import express from 'express';
import AuthenticateService from '../services/authenticate';

const router = express.Router();

router.post('/',
  async (req, res) => {
    const response = await AuthenticateService.authenticate(req.body.email, req.body.password);
    return res.send(response);
  });

export default router;
