import * as express from "express";

import UserService from "../services/UserService";

const userController = express.Router();

userController.get('/profile', (req: any, res: any) => {
  const userSub = req.user.sub;
  UserService.get(userSub)
  .then((user) => res.json(user));
});

export default userController;
