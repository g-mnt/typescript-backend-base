import { Router } from "express";

export const apiRouter = Router();

apiRouter.get("/", (_req, res) => {
    res.json({message: "Hello world!"});
});
