import express from "express";
import routes from "../routes";
import {
  getUpLoad,
  postUpLoad,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpLoad);
videoRouter.post(routes.upload, postUpLoad);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
