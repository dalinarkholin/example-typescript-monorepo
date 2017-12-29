import * as Joi from "joi";
import User from "~/core/User";

import ResultFactory from "infrastructure/ResultFactory";

interface INewUserJoiSchema {
  sub: Joi.StringSchema;
  email: Joi.StringSchema;
  firstName: Joi.StringSchema;
  lastName: Joi.StringSchema;
  acceptedCurrentTermsOfService: Joi.BooleanSchema;
}

interface IExistingUserJoiSchema extends INewUserJoiSchema {
  id: Joi.NumberSchema;
}

type UserJoiSchemas =
  INewUserJoiSchema |
  IExistingUserJoiSchema;

const newUserSchema: INewUserJoiSchema = {
  sub: Joi.string().required(),
  email: Joi.string().email().required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  acceptedCurrentTermsOfService: Joi.boolean(),
};

const existingUserSchema: IExistingUserJoiSchema = {
  ...newUserSchema,
  id: Joi.number().required(),
};

class UserValidation {

  public static async validateSelf(userObject: User, userSchema: UserJoiSchemas) {
    const joiResult = await Joi.validate(userObject, userSchema);
    const result = ResultFactory.createInstance(joiResult);
    return result;
  }
  
}

export {
  newUserSchema,
  existingUserSchema,
};

export default UserValidation;
