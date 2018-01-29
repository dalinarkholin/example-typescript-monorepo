import * as express from "express";

import core from "~/core";
import infrastructure from "~/infrastructure";

const helloWorldController = express.Router();

helloWorldController.get("/core", (req: any, res: any) => {
  // Talk to a service that talks to a db
  res.json(core);
});
helloWorldController.get("/infrastructure", (req: any, res: any) => {
  // Talk to a service that talks to a db,
  res.json(infrastructure);
});

export default helloWorldController;
