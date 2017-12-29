
import IResult from "./IResult";
import Error from "./results/Error";
import Success from "./results/Success";

class ResultFactory {
  public static createInstance(response: any): IResult {
    if (response.ok) {
      return new Success(response);
    }
    return new Error(response);
  }
}

function handleResult(result: IResult,
                      success: (x: any) => any,
                      error: (e: Error) => void): Error | any {

  switch (result.kind) {
    case Success.KIND: return success(result);
    case Error.KIND: return error(result as Error);
    default:
      return new Error({error: "Error was not caught correctly"});
  }
}

export {
  handleResult,
  IResult,
  Error,
  Success,
};

export default ResultFactory;
