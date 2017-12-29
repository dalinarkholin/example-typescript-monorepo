import IResult from "../IResult";

abstract class AbstractError implements IResult {
  public static KIND: string = "error";
  public kind: string = AbstractError.KIND;
  public data: any;
}

export default AbstractError;
