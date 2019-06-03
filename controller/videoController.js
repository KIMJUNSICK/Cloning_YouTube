import { videos } from "../db.js";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const serach = (req, res) => {
  const {
    query: { SomethingYouWant: something }
  } = req;
  res.render("search", { pageTitle: "Search", something });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
