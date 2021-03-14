import { sign } from 'jsonwebtoken';
import User from '../database/models/user';

export default class AuthenticateService {
  static async authenticate(email, password) {
    const user = await User.findOne({ email, password });

    if (!user) {
      throw new Error('Usuario não encontrado');
    }

    const token = sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_SECRET_EXPIRE,
    });
    return token;
  }
}
