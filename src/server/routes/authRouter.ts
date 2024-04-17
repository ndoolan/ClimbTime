import express from 'express';
import { Request, Response } from 'express';
import userController from '../controllers/authController';
import cookieController from '../controllers/cookieController';

const authRouter = express.Router();

// Build module comp pop up later
authRouter.post(
  '/login',
  userController.verifyUser,
  cookieController.setCookie,
  (_req: Request, res: Response) => {
    if (!res.locals.user._id) {
      res.status(200).send('Invalid Credentials');
    } else {
      res.status(200).send('logged in');
    }
  }
);

authRouter.post(
  '/register',
  userController.createUser,
  cookieController.setCookie,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.user);
  }
);

authRouter.post(
  '/logout',
  cookieController.clearCookie,
  (_req: Request, res: Response) => {
    res.status(200).json('Cookie Cleared');
  }
);

export default authRouter;



