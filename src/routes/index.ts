// configure the API routes

import express from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';

export function createRouter(userController: UserController) {
  const router = express.Router();

  router.post('/register', userController.register.bind(userController));
  router.post('/login', userController.login.bind(userController));

  // Protected route example
  router.get('/profile', authMiddleware, (req, res) => {
    const user = req['user'];
    res.json(user);
  });

  return router;
}
