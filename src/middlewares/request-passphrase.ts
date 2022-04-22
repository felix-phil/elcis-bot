import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requestPassPhrase = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { passphrase } = req.body;

  if (!passphrase || passphrase !== process.env.TV_PASSPHRASE) {
    throw new NotAuthorizedError();
  }
  next();
};
