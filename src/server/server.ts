import express, { Request, Response, NextFunction, Application } from 'express'
import path from 'path'
import 'dotenv/config';

//Routers
import authRouter from './routes/authRouter';

const app: Application = express();

app.use('/auth', authRouter);

app.get('*', (_req: Request,res: Response)=>{
    res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

// global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    const defaultError = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' }
    } 
    const errorObj = { ...defaultError, ...(err instanceof Error ? { message: { err: err.message } } : err) };
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message); 
  });

app.listen(process.env.PORT, ()=>{
    console.log(`Starting up on ${process.env.PORT}... Let's get it`)
})