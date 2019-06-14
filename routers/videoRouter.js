import express from "express";
import routes from "../routes";
import {
  getUpLoad,
  postUpLoad,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controller/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpLoad);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpLoad);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
