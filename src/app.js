import express from 'express';
import router from './routes/index';
import './database/connection';

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(4010, () => {
  console.log('server runing port 4010');
});
