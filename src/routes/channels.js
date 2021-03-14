import express from 'express';
import ChannelsService from '../services/channels';

const router = express.Router();

router.post('/',
  async (req, res) => {
    const response = await ChannelsService.createUser(req.body);
    return res.send(response);
  });

router.get('/',
  async (req, res) => {
    const response = await ChannelsService.getUserLogged(req.userId);
    return res.send(response);
  });

export default router;
