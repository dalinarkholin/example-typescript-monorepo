
import { handleResult } from "infrastructure/ResultFactory";
import UserValidation, {existingUserSchema, newUserSchema} from "./UserValidation";

class User {

  public static async create(userObject: any) {
    const result = await UserValidation.validateSelf(userObject, newUserSchema);
    return handleResult(result,
      (success) => success.data.value,
      (error) => error,
    );
  }

  public static async update(userObject: any) {
    const result = await UserValidation.validateSelf(userObject, existingUserSchema);
    return handleResult(result,
      (success) => success.data.value,
      (error) => error,
    );
  }

  public id: number;
  public sub: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public acceptedCurrentTermsOfService: boolean;

}

export default User;
