import {ValidationError} from "sequelize";
import {ISequelizeConfig, ISequelizeValidationOnlyConfig, Sequelize} from "sequelize-typescript"; 

// import {getLogger} from "../logger";

const decamelize = require("decamelize"); // tslint:disable-line no-var-requires

// const logger = getLogger("db");

const commonConfig: any = {
  dialect: "postgres",
  username: process.env.DB_USER || "autio",
  password: process.env.DB_PASS || "autio",
  host: process.env.DB_HOST || "localhost",
  name: process.env.DB_NAME || "autio",
  port: process.env.DB_PORT || 5432,

  pool: {
    min: 1,
    max: 10,
  },

  logging: !!process.env.DB_DEBUG
    ? (msg: string) => console.log
    : false,

  define: {
    underscored: true,
    underscoredAll: true,
    paranoid: true,
    timestamps: true,
  },
};

const testConfig: ISequelizeConfig | ISequelizeValidationOnlyConfig = {
  ...commonConfig,
  pool: {
    min: 0,
    idle: 1000,
  },
};

const environmentConfigs: {[key: string]: ISequelizeConfig | ISequelizeValidationOnlyConfig} = {
  development: commonConfig,
  test: testConfig,
  production: commonConfig,
};
const DB_CONFIG = environmentConfigs["development"];

let sequelize: Sequelize | null = null;

const init = async (): Promise<Sequelize> => {
  if (!sequelize) {
    console.info("Initializing sequelize...");

    try {
      sequelize = new Sequelize(DB_CONFIG);

      sequelize.addHook("beforeDefine", (attributes: any) => {
        // console.log("Attributes:\n", attributes);

        Object.keys(attributes).forEach((key) => {
          // console.log("Considering:", key);
          if (!attributes[key].field) {
            attributes[key].field = decamelize(key);
          }
          // attributes.createdAt = {field: "created_at", type: Sequelize.DATE};
          // attributes.updatedAt = {field: "updated_at", type: Sequelize.DATE};
          // attributes.deletedAt = {field: "deleted_at", type: Sequelize.DATE};
        });
      });
      //
      // sequelize.addHook("afterDefine", (model: Model<any>) => {
      //   console.log("After define model:", model);
      // });

      console.info("Adding models");
      sequelize.addModels([__dirname]);
      console.info("Done adding models");

      const err: ValidationError = await sequelize.validate();

      if (err && err.errors.length > 0) {
        throw new Error("Error connecting to postgres: " + err.errors[0].message);
      }
      console.info("Sequelize initialized.");

    } catch (err) {
      throw err;
    }

  }

  return sequelize;
};

const close = (): void => {
  if (sequelize) {
    console.info("Stopping sequelize...");
    sequelize.close();
    sequelize = null;
    console.info("Sequelize stopped.");
  }
};

export {
  DB_CONFIG,
  close,
  sequelize,
};

export default init;
