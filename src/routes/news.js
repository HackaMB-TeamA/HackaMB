import express from 'express';
import NewsService from '../services/news';

const router = express.Router();

router.post('/',
  async (req, res) => {
    let response;
    try {
      response = await NewsService.createNews(req.body);
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

router.get('/',
  async (req, res) => {
    let response;
    try {
      response = await NewsService.listNews();
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

router.get('/:id',
  async (req, res) => {
    let response;
    try {
      response = await NewsService.getNewsById(req.params.id);
    } catch (err) {
      return res.send(err);
    }
    return res.send(response);
  });

export default router;
