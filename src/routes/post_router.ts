import express from "express";
import { PostController } from "../controllers/postController";

const postRouter = express.Router();
const postController = new PostController();

postRouter
    .get("/", postController.getPosts)
    .post("/", postController.addPost)
    .get("/:postId", postController.getPostById)
    .post("/:postId", postController.updatePostById)
    .delete("/:postId", postController.deletePostById);

export default postRouter;
