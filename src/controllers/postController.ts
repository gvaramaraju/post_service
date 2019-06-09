import { Request, Response } from "express";
import mongoose from "mongoose";
import { PostSchema } from "./../models/post";

const Post = mongoose.model("Post", PostSchema);

export class PostController {
    public addPost(req: Request, res: Response) {
        const post = new Post(req.body);
        post.save((err, postDocument: mongoose.Document) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).json(post);
            }
        });
    }

    public getPosts(req: Request, res: Response) {
        Post.find({}, (err, postDocument: mongoose.Document) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).json(postDocument);
            }
        });
    }

    public getPostById(req: Request, res: Response) {
        Post.findById({ _id: req.params.postId }, (err, postDocument) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(postDocument);
            }
        });
    }

    public updatePostById(req: Request, res: Response) {
        Post.findByIdAndUpdate({ _id: req.params.postId }, req.body, { new: true }, (err, postDocument) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(postDocument);
            }
        });
    }

    public deletePostById(req: Request, res: Response) {
        Post.findByIdAndDelete({ _id: req.params.postId }, (err, postDocument) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send();
            }
        });
    }

}
