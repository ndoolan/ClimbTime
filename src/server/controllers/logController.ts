import { NextFunction, Response, Request } from 'express';
import User from '../models/models';

interface logController {
  getLogs: (req: Request, res: Response, next: NextFunction) => void;
  createLog: (req: Request, res: Response, next: NextFunction) => void;
  //   deleteLog: (req: Request, res: Response, next: NextFunction) => void;
}

const logController: logController = {
  async getLogs(req, res, next) {
    try {
      const { cookies }: { cookies: Record<string, string> } = req;
      const ctUid = cookies['ct-uid'];
      const user = await User.findById({ _id: ctUid });
      console.log(user);
      res.locals.totalClimbs = user?.totalClimbs;
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
      console.log(req.body);
      const { cookies }: { cookies: Record<string, string> } = req;
      const ctUid = cookies['ct-uid'];
      const { name, grade, location, flash } = req.body;
      // const user = await User.findById({_id: Ticklist_ID })

      const user = await User.findByIdAndUpdate(
        { _id: ctUid },
        {
          $push: {
            totalClimbs: {
              name: name,
              grade: grade,
              location: location,
              flash: flash,
            },
          },
        }
      );

      if (!user) {
        throw new Error('User not found');
      }

      // res.locals is currently one behind created climb although new climbs go through correctly
      res.locals.totalClimbs = user.totalClimbs;
      return next();
    } catch (error) {
      return next({
        log: 'error occurred creating the new climb',
        status: 400,
        message: { error: 'invalid climb input' },
      });
    }
  },

  //   async deleteLog(req, res, next) {
  //     console.log('inside dlete ');
  //     try {
  //       const { name } = req.body;
  //       const { Ticklist_ID } = req.cookies;
  //       console.log(Ticklist_ID);
  //       const user = await User.findById({ _id: Ticklist_ID });
  //       console.log(user);
  //       // user.totalClimbs.findOneAndDelete(name)
  //       // console.log(user.totalClimbs)
  //       // res.locals.totalClimbs = user.totalClimbs
  //     } catch (error) {
  //       return next({
  //         log: 'error occurred deleting the climb',
  //         status: 400,
  //         message: { error: 'deletion method' },
  //       });
  //     }
  //   },
};

export default logController;
