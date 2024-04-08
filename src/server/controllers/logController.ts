import { NextFunction, Response, Request } from 'express';
import User from '../models/models';

interface logController {
  getLogs: (req: Request, res: Response, next: NextFunction) => void;
  createLog: (req: Request, res: Response, next: NextFunction) => void;
  removeLog: (req: Request, res: Response, next: NextFunction) => void;
}

const logController: logController = {
  async getLogs(req, res, next) {
    try {
      const { cookies }: { cookies: Record<string, string> } = req;
      const ctUid = cookies['ct-uid'];
      const user = await User.findById({ _id: ctUid });
      res.locals.logs = user?.logs;
      return next();
    } catch (error) {
      return next({
        log: 'error occurred getting the total climbs',
        status: 400,
        message: { error: 'invalid climb input for total climbs' },
      });
    }
  },

  async createLog(req, res, next) {
    try {
      const { cookies }: { cookies: Record<string, string> } = req;
      const ctUid = cookies['ct-uid'];
      const { name, grade, location, flash, attempts, comments } = req.body;
      console.log('insideCreateLog', name, grade, location, flash);
      console.log('cookie id', ctUid);

      const user = await User.findByIdAndUpdate(
        { _id: ctUid },
        {
          $push: {
            logs: {
              name: name,
              grade: grade,
              location: location,
              flash: flash,
              comments: comments,
              attempts: attempts,
            },
          },
        }
      );

      if (!user) {
        throw new Error('User not found');
      }
      console.log('are there logs', user?.logs);
      res.locals.logs = user?.logs;
      return next();
    } catch (error) {
      return next({
        log: 'error occurred creating the new climb',
        status: 400,
        message: { error: error },
      });
    }
  },
  async removeLog(req, _res, next) {
    console.log('inside dlete ');
    try {
      const { cookies }: { cookies: Record<string, string> } = req;
      const ctUid = cookies['ct-uid'];
      const { _id } = req.body;

      const user = await User.findByIdAndUpdate(
        { _id: ctUid },
        {
          $pull: {
            logs: {
              _id: _id,
            },
          },
        }
      );
      console.log(user?.logs);
      // console.log(user.totalClimbs)
      // res.locals.totalClimbs = user.totalClimbs
      return next();
    } catch (error) {
      return next({
        log: 'error occurred deleting the climb',
        status: 400,
        message: { error: 'deletion method' },
      });
    }
  },
};

export default logController;
