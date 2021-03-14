import express from 'express';
import ChannelsService from '../services/channels';

const router = express.Router();

router.post('/',
  async (req, res) => {
    const response = await ChannelsService.createChannels(req.body);
    return res.send(response);
  });

router.get('/',
  async (req, res) => {
    const response = await ChannelsService.listChannels();
    return res.send(response);
  });

export default router;
