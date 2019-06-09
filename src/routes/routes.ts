import express from "express";
import postRouter from "./post_router";

export class Routes {
    public configureRoutes(app: express.Application) {
        app.use("/post", postRouter);
    }
}
