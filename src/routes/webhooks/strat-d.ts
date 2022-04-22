import express, { Response, Request } from 'express';
import { BadRequestError } from '../../errors/bad-request-error';
import { requestPassPhrase } from '../../middlewares/request-passphrase';
import { binanceClient } from '../../services/binance-client';
import { Order } from '../../models/orders';
import { Strategies } from '../../types/strategy';
import { Sides } from '../../types/side';

const router = express.Router();

router.post(
  '/webhook/first',
  requestPassPhrase,
  async (req: Request, res: Response) => {
    const { ticker, quantity, side } = req.body;
    const sideAction = side.toUpperCase();
    console.log(sideAction);

    const order = Order.build({
      side: Sides.BUY,
      strategy: Strategies.C,
      quantity: quantity,
      date: new Date(),
      symbol: ticker,
      success: false,
    });
    const binanceOrder = await binanceClient.futuresOrder(
      side,
      ticker,
      quantity,
      false,
      {
        type: 'MARKET',
      }
    );
    if (!binanceOrder || binanceOrder.code < 0) {
      await order.save();
      throw new BadRequestError('Unable to perform trade');
    }
    order.set({ success: true });
    await order.save();
    res.status(201).send({ binanceOrder });
  }
);

export { router as stratDRouter };
