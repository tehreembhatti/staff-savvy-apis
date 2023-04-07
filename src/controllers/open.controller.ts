import { Request, Response } from 'express';

export class OpenController {
  public ping = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({ message: 'PONG!', from: req.headers }).end();
  };
}
