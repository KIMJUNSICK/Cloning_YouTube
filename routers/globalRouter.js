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
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, serach);
globalRouter.get(routes.logout, onlyPublic, logout);

export default globalRouter;
