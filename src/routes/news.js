import express from 'express';
import NewsService from '../services/news';

const router = express.Router();

router.post('/',
  async (req, res) => {
    const response = await NewsService.createNews(req.body);
    return res.send(response);
  });

router.get('/',
  async (req, res) => {
    const response = await NewsService.listNews();
    return res.send(response);
  });
export default router;
