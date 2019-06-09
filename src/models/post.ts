import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
    title: {
        type: String,
        required: "Title of a post is mandatory"
    },
    content: {
        type: String,
        required: "Content of a post is mandatory"
    },
    author: {
        type: String,
        required: "Post cannot be without author"
    }
}, { timestamps: {}, versionKey: "_version" });
