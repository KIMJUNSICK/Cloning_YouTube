import express from "express";
import routes from "../routes";
import { home, serach } from "../controller/videoController";
import {
  postJoin,
  getJoin,
  postLogin,
  getLogin,
  logout
} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, serach);
globalRouter.get(routes.logout, logout);

export default globalRouter;
