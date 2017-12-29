import * as Joi from "joi";
import Game from "~/core/Game";

import ResultFactory from "infrastructure/ResultFactory";

interface INewGameJoiSchema {
  title: Joi.StringSchema;
  description: Joi.StringSchema;
  author: Joi.StringSchema;
  genre: Joi.StringSchema;
  downloadUrl: Joi.StringSchema;
  status: Joi.StringSchema;
}

interface IExistingGameJoiSchema extends INewGameJoiSchema {
  id: Joi.NumberSchema;
}

type GameJoiSchemas =
  INewGameJoiSchema |
  IExistingGameJoiSchema;

const newGameSchema: INewGameJoiSchema = {
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string(),
  genre: Joi.string(),
  downloadUrl: Joi.string(),
  status: Joi.string(),
};

const existingGameSchema: IExistingGameJoiSchema = {
  ...newGameSchema,
  id: Joi.number().required(),
};

class GameValidation {

  public static async validateSelf(gameObject: Game, gameSchema: GameJoiSchemas) {
    const joiResult = await Joi.validate(gameObject, gameSchema);
    const result = ResultFactory.createInstance(joiResult);
    return result;
  }
  
}

export {
  newGameSchema,
  existingGameSchema,
};

export default GameValidation;
