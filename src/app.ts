import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { Routes } from "./routes/routes";

class App {
    public app: express.Application;
    public routes: Routes = new Routes();
    private mongoUrl: string = "mongodb://localhost:27017/my_database";

    constructor() {
        this.app = express();
        this.config();
        this.mongoConnection();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.routes.configureRoutes(this.app);
    }

    private mongoConnection(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;
