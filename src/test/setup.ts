import mongoose from 'mongoose';
import { app } from '../app.js';
import request from 'supertest';

jest.mock('../services/binance-client');
beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/test-bot-elcis');
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
  //   await mongo.stop();
});
