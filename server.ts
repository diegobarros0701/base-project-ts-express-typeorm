import { app } from './app';
import { createConnection } from 'typeorm';

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);

  createConnection().catch((err) => {
    console.log(err);
  });
});
