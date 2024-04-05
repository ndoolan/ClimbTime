import User from '../models/models';
import { encryptPass, validatePass } from '../utils/bcrypt';
import { NextFunction, Response, Request } from 'express';

interface userController {
  createUser: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: userController = {
  async createUser(req, res, next) {
    try {
      const { username, password, email } = req.body.registerForm;

      // Check if username is taken
      const user = await User.findOne({ username: username });
      if (user) {
        res.send('Username taken, please try another.');
      }

      const newUser = await User.create({
        username: username,
        password: await encryptPass(password),
        email: email,
      });
      console.log('new creation', newUser._id);
      res.locals.user = newUser._id;
      return next();
    } catch (error) {
      return next({
        log: 'error occurred creating the user',
        status: 400,
        message: { error: 'invalid user request' },
      });
    }
  },

  async verifyUser(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });

      if (!user) {
        console.log('no user');
      } else {
        console.log(user?.password);
        console.log(user?.username);
        const result = await validatePass(password, user.password);

        if (result) {
          res.locals.user = user;
          return next();
        } else {
          res.locals.user = 'Invalid Password';
        }
      }
      return next();
    } catch (error) {
      return next({
        log: error,
        status: 400,
        message: { error: 'invalid username and password combination' },
      });
    }
  },
};

export default userController;
