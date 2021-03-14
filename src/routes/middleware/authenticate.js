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

    const userId = verify(authorization[1], process.env.JWT_SECRET_KEY);

    if (!userId) {
      res.sendStatus(401);
    }

    req.userId = userId;
    return next();
  };
}
