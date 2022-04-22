import mongoose from 'mongoose';
import { Sides } from '../types/side';
import { Strategies } from '../types/strategy';

interface OrderAttr {
  strategy: Strategies;
  quantity: number;
  date: Date;
  side: Sides;
  symbol: string;
  success: boolean;
}

interface OrderDoc extends mongoose.Document {
  strategy: Strategies;
  quantity: number;
  date: Date;
  side: Sides;
  symbol: string;
  success: boolean;
}
interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attr: OrderAttr): OrderDoc;
}

const orderSchema = new mongoose.Schema(
  {
    strategy: {
      type: String,
      required: true,
      enum: Object.values(Strategies),
    },
    quantity: {
      type: Number,
      required: true,
    },
    side: {
      type: String,
      required: true,
      enum: Object.values(Sides),
    },
    symbol: {
      type: String,
      required: true,
    },
    success: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
orderSchema.statics.build = (atrrs: OrderAttr) => {
  return new Order(atrrs);
};
const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);
export { Order };
