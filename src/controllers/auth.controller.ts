import { NextFunction, Request, Response } from 'express';
import spbClient from '@/models/supbClient';
import { ILoginPayload } from '@/interfaces/auth.interface';

export class AuthController {
  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: ILoginPayload = req.body;
      const { email, password } = userData;
      spbClient.auth
        .signInWithPassword({
          email,
          password,
        })
        .then(response => {
          const { data, error } = response;
          if (error) return res.status(error.status).json({ message: error.message });
          return res.status(200).json(data);
        });
    } catch (error) {
      next(error);
    }
  };
}
