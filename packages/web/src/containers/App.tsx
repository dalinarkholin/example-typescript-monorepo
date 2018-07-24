import * as React from "react";

import core from "~/core";

interface IAppProps {}

const App = (props: IAppProps) => {
  return (
    <div>
      <div>Hello Web World!</div>
      <div>{core}</div>
    </div>
  );
};

export default App;
