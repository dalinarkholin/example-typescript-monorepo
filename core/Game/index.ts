
import { handleResult } from "infrastructure/ResultFactory";
import GameValidation, {existingGameSchema, newGameSchema} from "./GameValidation";

class Game {

  public static async create(gameObject: any) {
    const result = await GameValidation.validateSelf(gameObject, newGameSchema);
    return handleResult(result,
      (success) => success.data.value,
      (error) => error,
    );
  }

  public static async update(gameObject: any) {
    const result = await GameValidation.validateSelf(gameObject, existingGameSchema);
    return handleResult(result,
      (success) => success.data.value,
      (error) => error,
    );
  }

  public id: number;
  public title: string;
  public description: string;
  public author: string;
  public genre: string;
  public downloadUrl: string;
  public status: string;
  // public rating: boolean;


}

export default Game;
