import Channels from '../database/models/channels';

export default class ChannelsService {
  static async createChannels(channel) {
    const response = await Channels.create(channel);
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
