
import Game from "~/core/Game";

import { handleResult, Success, Error, IResult } from "infrastructure/ResultFactory";

const gameData = {
  title: "Fake Autio Game",
  description: "A real life story of the life and death...",
}; 

describe("Game", () => {
  describe("#to be created", () => {
    it("gets created if valid in itself", async () => {
      const result: IResult = await Game.create(gameData);
      return handleResult(result,
        async (success: Success) => {
          expect(success.data).toEqual(gameData);
      },
        async (error: Error) => {
      });
    });
  });

  describe("#being updated", () => {
    it("gets updated if valid in itself", async () => {
      const result: IResult = await Game.update({...gameData, id: 1});
      return handleResult(result,
        async (success: Success) => {
          expect(success.data).toEqual({...gameData, id: 1});
      },
        async (error: Error) => {
      });
      
    });
  });
});
