import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, serach } from "../controller/videoController";
import {
  postJoin,
  getJoin,
  postLogin,
  getLogin,
  logout,
  githubLogin,
  postGithubLogin,
  getMe,
  instagramLogin,
  postInstagramLogin
} from "../controller/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, serach);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.instagram, instagramLogin);
globalRouter.get(
  routes.instagramCallback,
  passport.authenticate("instagram", { failureRedirect: "/login" }),
  postInstagramLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
