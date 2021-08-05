import express from "express";
import { upload, watch, edit, deleteVideo } from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get("/:id(\\d+)", watch);
videosRouter.get("/:id(\\d+)/edit", edit);
videosRouter.get("/:id(\\d+)/delete", deleteVideo);
videosRouter.get("/upload", upload);

export default videosRouter;