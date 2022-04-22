import request from 'supertest';
import { app } from '../../../app';

it('Should create a binance order', async () => {
  await request(app)
    .post('/webhook/first')
    .send({
      passphrase: 'asdj',
      side: 'BUY',
      activationPrice: 40575.0,
      callbackRate: 0.5,
      quantity: 0.01,
      ticker: 'BTCUSDT',
      entryPrice: 40561.0,
      hedgeMode: true,
      stopPrice: 40400,
    })
    .expect(201);
});
