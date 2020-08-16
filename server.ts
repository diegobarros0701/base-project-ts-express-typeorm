import { app } from './app';
import { createConnection } from 'typeorm';

app.listen(process.env.PORT, () => {
  const currentTime = new Date().toLocaleTimeString();
  console.log(`[${currentTime}] Server started at port ${process.env.PORT}`);

  createConnection().catch((err) => {
    console.log(err);
  });
});
