import express from 'express';
import { Request, Response } from 'express';
import logController from '../controllers/logController';

const logsRouter = express.Router();

// All route names are incorrect

// Get all Logs
logsRouter.get(
  '/getlogs',
  logController.getLogs,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.logs);
  }
);

// Create Log
logsRouter.post(
  '/create',
  logController.createLog,
  (_req: Request, res: Response) => {
    res.status(200).json('ok');
  }
);

// Fix Log controller

// Create a new Quick Log
logsRouter.post(
  '/quickLog',
  logController.createLog,
  (_req: Request, res: Response) => {
    res.status(200).json('ok');
  }
);

logsRouter.post(
  '/remove',
  logController.removeLog,
  (_req: Request, res: Response) => {
    res.status(200).json(true);
  }
);

export default logsRouter;
