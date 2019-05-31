import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editDetail,
  changePassword
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editDetail, editDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
