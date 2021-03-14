import { sign } from 'jsonwebtoken';
import User from '../database/models/user';

export default class AuthenticateService {
  static async authenticate(email, password) {
    const user = await User.findOne({ email, password });

    if (!user) {
      throw new Error('Usuario não encontrado');
    }

    const token = sign({ userId: user.id }, '8d85f1fd-ee6b-4ba1-bea9-17bd4e2d701d', {
      expiresIn: '2h',
    });
    return { token };
  }
}
