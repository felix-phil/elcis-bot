import Binance from 'node-binance-api';

const binanceClient = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_SECRET_KEY,
  test: process.env.BINANCE_TEST === 'true' ? true : false,
  recvWindow: 5000,
  // hedgeMode: true,
  tld: 'us',
});

export { binanceClient };
