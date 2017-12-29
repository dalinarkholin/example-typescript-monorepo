import AbstractSuccess from "../abstractResults/AbstractSuccess";

class Success extends AbstractSuccess {
  public data: any;

  constructor(data: any) {
    super();
    this.data = data;
  }
}

export default Success;
