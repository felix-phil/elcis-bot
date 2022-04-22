export const binanceClient = {
  futuresOrder: jest
    .fn()
    .mockImplementation(
      (
        side: 'BUY' | 'SELL',
        symbol: string,
        quantity,
        price = false,
        params: Object
      ) => {
        return {
          orderId: 3034720872,
          symbol: symbol,
          status: 'NEW',
          clientOrderId: 'xdlPgXOSdHSHz0DCm6B0Z4',
          price: '0',
          avgPrice: '0.00000',
          origQty: '0.010'  ,
          executedQty: '0',
          cumQty: '0',
          cumQuote: '0',
          timeInForce: 'GTC',
          type: 'MARKET',
          reduceOnly: false,
          closePosition: false,
          side: 'BUY',
          positionSide: 'BOTH',
          stopPrice: '0',
          workingType: 'CONTRACT_PRICE',
          priceProtect: false,
          origType: 'MARKET',
          updateTime: 1650631961635,
        };
      }
    ),
};
