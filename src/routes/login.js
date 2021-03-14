import express from 'express';
import AuthenticateService from '../services/authenticate';

const router = express.Router();

router.post('/',
  async (req, res) => {
    let response;
    try {
      response = await AuthenticateService.authenticate(req.body.email, req.body.password);
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

export default router;
