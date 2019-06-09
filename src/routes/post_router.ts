import express from "express";
import { PostController } from "../controllers/postControler";

const postRouter = express.Router();
const postController = new PostController();

postRouter.get("/", postController.getPosts);

export default postRouter;
