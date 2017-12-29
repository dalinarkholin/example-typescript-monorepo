import AbstractError from "../abstractResults/AbstractError";

class Error extends AbstractError {

  public data: any;

  constructor(data: any) {
    super();
    this.data = data;
  }
}

export default Error;
