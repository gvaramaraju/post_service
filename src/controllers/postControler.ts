import mongoose from "mongoose";
import { Request, Response } from "express";
import { PostSchema } from "./../models/post";

const Post = mongoose.model("Post", PostSchema);

export class PostController {
    public addPost(req: Request, res: Response) {
        let post = new Post(req.body);

        post.save((err, postDocument: mongoose.Document) => {
            if (err) {
                res.send(err);
            } else {
                res.json(post);
            }
        });
    }

    public getPosts(req: Request, res: Response) {
        Post.find({}, (err, postDocument: mongoose.Document) => {
            if (err) {
                res.send(err);
            } else {
                res.json(postDocument);
            }
        });
    }
}
