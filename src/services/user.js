import User from '../database/models/user';

export default class UserService {
  static async createUser(user) {
    const response = await User.create(user);
    return response;
  }

  static async getUserLogged(id) {
    const response = await User.findById(id);
    return response;
  }
}
