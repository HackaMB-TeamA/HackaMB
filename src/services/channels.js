import Channels from '../database/models/news';

export default class ChannelsService {
  static async createChannels(news) {
    const response = await Channels.create(news);
    return response;
  }

  static async listChannels() {
    const response = await Channels.find();
    return response;
  }

  static async getChannelById(id) {
    const response = await Channels.findById(id);
    return response;
  }
}
