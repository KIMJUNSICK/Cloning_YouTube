import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  res.send("here, Home");
});
globalRouter.get(routes.join, (req, res) => {
  res.send("here, Join");
});
globalRouter.get(routes.login, (req, res) => {
  res.send("here, Login");
});
globalRouter.get(routes.logout, (req, res) => {
  res.send("here, Logout");
});
globalRouter.get(routes.search, (req, res) => {
  res.send("here, Search");
});

export default globalRouter;
