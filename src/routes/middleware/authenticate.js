import { verify } from 'jsonwebtoken';

/**
 * Middleware to authenticate user using jwt token
 *
 * @export
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.Next} next
 * @returns void
 */
export default function auth() {
  return async (req, res, next) => {
    if (!req.headers || !req.headers.authorization) {
      res.sendStatus(401);
    }

    const authorization = req.headers.authorization.split(' ');

    if (authorization[0] !== 'Bearer') {
      res.sendStatus(401);
    }

    const token = verify(authorization[1], '8d85f1fd-ee6b-4ba1-bea9-17bd4e2d701d');

    if (!token) {
      res.sendStatus(401);
    }

    req.userId = token.userId;
    return next();
  };
}
