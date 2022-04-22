import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.BINANCE_API_KEY) {
    throw new Error('BINANCE_API_KEY env var is required');
  }
  if (!process.env.BINANCE_SECRET_KEY) {
    throw new Error('BINANCE_SECRET_KEY env var is required');
  }
  if (!process.env.TV_PASSPHRASE) {
    throw new Error('TV_PASSPHRASE env var is required');
  }
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL env var is required');
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Elcis DB Connected');
  } catch (error) {
    console.error(error);
  }
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log('Elcis bot listening on port ' + PORT);
  });
};

start();
