import express from 'express';
import UserService from '../services/user';
import auth from './middleware/authenticate';

const router = express.Router();

router.post('/',
  async (req, res) => {
    let response;
    try {
      response = await UserService.createUser(req.body);
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

router.get('/me',
  auth(),
  async (req, res) => {
    let response;
    try {
      response = await UserService.getUserLogged(req.userId);
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

export default router;
