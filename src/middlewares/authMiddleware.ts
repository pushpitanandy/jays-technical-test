// verify the authenticity of incoming requests using JSON Web Tokens (JWT)

import { Request, Response, NextFunction } from 'express';
import { JWTService } from '../services/JWTService';

export function authMiddleware(jwtService: JWTService) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) throw new Error('Authorization token not found.');

      const decodedToken = jwtService.verifyToken(token);
      req['user'] = decodedToken; // Set the authenticated user on the request object
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
}
