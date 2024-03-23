import express from 'express';
import { Request, Response } from 'express';
import logController from '../controllers/logController';

const logsRouter = express.Router();

// All route names are incorrect

// Get all Logs
logsRouter.post('/getlogs', (_req: Request, res: Response) => {
  console.log('outside mid');
  res.status(200).json(res.locals.user);
});

// Create a new Quick Log
logsRouter.post(
  '/quickLog',
  logController.createLog,
  (_req: Request, res: Response) => {
    res.status(200).json('ok');
  }
);

logsRouter.post('/delete', (_req: Request, res: Response) => {
  res.status(200).json('deleted');
});

export default logsRouter;
