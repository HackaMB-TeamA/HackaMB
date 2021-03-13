import express from 'express';

const app = express();

app.use(express.json());

app.listen(4010, () => {
  console.log('server runing port 4010');
});
