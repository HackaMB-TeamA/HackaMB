import express from 'express';
import UserService from '../services/user';
import auth from './middleware/authenticate';

const router = express.Router();

router.post('/',
  async (req, res) => {
    const response = await UserService.createUser(req.body);
    return res.send(response);
  });

router.get('/me',
  auth(),
  async (req, res) => {
    const response = await UserService.getUserLogged(req.userId);
    return res.send(response);
  });

export default router;
