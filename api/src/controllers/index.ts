import * as express from "express";

const controllers = express.Router();
import helloWorldController from "./helloWorldController";

controllers.use("/hello", helloWorldController);

export default controllers;