import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/httpException';
import { ZodSchema } from 'zod';

/**
 * @name ValidationMiddleware
 * @description Allows use of decorator and non-decorator based validation
 * @param type dto
 * @param skipMissingProperties When skipping missing properties
 * @param whitelist Even if your object is an instance of a validation class it can contain additional properties that are not defined
 * @param forbidNonWhitelisted If you would rather to have an error thrown when any non-whitelisted properties are present
 */
export const ValidationMiddleware = (schema: ZodSchema) => {
  return (req: Request, _: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (parsed.success) {
      req.body = parsed.data;
      next();
    } else next(new HttpException(400, JSON.stringify(parsed)));
  };
};
