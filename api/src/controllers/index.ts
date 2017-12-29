import * as express from "express";

const controllers = express.Router();
import userController from "./userController";

// Testing Route
controllers.get("/hello", (req: any, res: any) => {
  res.json("Hello World")
})
controllers.use("/users", userController);


export default controllers;