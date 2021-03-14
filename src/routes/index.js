import express from 'express';

const router = express.Router();

router.use('/login', require('./login').default);
router.use('/user', require('./user').default);
router.use('/news', require('./news').default);
router.use('/channels', require('./channels').default);

export default router;
