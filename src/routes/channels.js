import express from 'express';
import ChannelsService from '../services/channels';

const router = express.Router();

router.post('/',
  async (req, res) => {
    let response;
    try {
      response = await ChannelsService.createChannels(req.body);
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

router.get('/',
  async (req, res) => {
    let response;
    try {
      response = await ChannelsService.listChannels();
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

router.get('/:id',
  async (req, res) => {
    let response;
    try {
      response = await ChannelsService.getChannelById(req.params.id);
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

export default router;
