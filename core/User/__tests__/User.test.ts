
import User from "~/core/User";

import { handleResult, Success, Error, IResult } from "~/infrastructure/ResultFactory";

const userData = {
  sub: "auth0|asdf",
  email: "example@example.com",
  firstName: "George",
  lastName: "Harwood",
  acceptedCurrentTermsOfService: true,
};

describe("User", () => {
  describe("#to be created", () => {
    it("gets created if valid in itself", async () => {
      const result: IResult = await User.create(userData);
      return handleResult(result,
        async (success: Success) => {
          expect(success.data).toEqual(userData);
      },
        async (error: Error) => {
      });
    });
  });

  describe("#being updated", () => {
    it("gets updated if valid in itself", async () => {
      const result: IResult = await User.update({...userData, id: 1});
      return handleResult(result,
        async (success: Success) => {
          expect(success.data).toEqual({...userData, id: 1});
      },
        async (error: Error) => {
      });
      
    });
  });
});
