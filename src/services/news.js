import News from '../database/models/news';

export default class NewsService {
  static async createNews(news) {
    const response = await News.create(news);
    return response;
  }

  static async listNews() {
    const response = await News.find();
    return response;
  }

  static async getNewsById(id) {
    const response = await News.findById(id);
    return response;
  }
}
