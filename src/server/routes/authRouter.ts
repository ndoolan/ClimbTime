import express from "express";
import { Request, Response } from "express";

const authRouter = express.Router();

authRouter.post('/login', (_req: Request,res: Response)=>{
    res.status(200).json('first route hit')
})

authRouter.post('/signup', (_req: Request,res: Response)=>{
    res.status(200).json('sign up hit')
})

authRouter.post('/logout', (_req: Request,res: Response)=>{
    res.status(200).json('logout hit')
})

export default authRouter;