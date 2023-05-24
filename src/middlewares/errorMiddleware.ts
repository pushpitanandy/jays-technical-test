// error handling middlewaare

import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/errorHandler';

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error instanceof CustomError) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
