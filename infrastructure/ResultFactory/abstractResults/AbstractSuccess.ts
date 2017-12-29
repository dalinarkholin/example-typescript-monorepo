import IResult from "../IResult";

abstract class AbstractSuccess implements IResult {
  public static KIND: string = "success";
  public kind: string = AbstractSuccess.KIND;
  public data: any;
}

export default AbstractSuccess;
