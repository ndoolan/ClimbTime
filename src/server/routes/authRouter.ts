import express from 'express';
import { Request, Response } from 'express';
import userController from '../controllers/authController';

const authRouter = express.Router();

// Build module comp pop up later
authRouter.post(
  '/login',
  userController.verifyUser,
  (_req: Request, res: Response) => {
    if (!res.locals.user) {
      res.status(200).json('Invalid Credentials');
    } else {
      res.status(200).json(res.locals.user);
    }
  }
);

authRouter.post(
  '/register',
  userController.createUser,
  (_req: Request, res: Response) => {
    console.log('outside mid');
    res.status(200).json(res.locals.user);
  }
);

authRouter.post('/logout', (_req: Request, res: Response) => {
  res.status(200).json('logout hit');
});

export default authRouter;
