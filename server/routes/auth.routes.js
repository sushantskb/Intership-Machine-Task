import express from "express";
import { login } from "../controllers/auth.Controller.js";

const authRouter = express.Router();

authRouter.post("/login", login);

export default authRouter;
