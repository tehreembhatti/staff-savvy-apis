import { Router } from 'express';
import { OpenController } from '@controllers/open.controller';
import { Routes } from '@interfaces/routes.interface';
const commonRoute = 'open';
const routeUrl = {
  ping: `/${commonRoute}/ping`,
};

export class OpenRoute implements Routes {
  public router = Router();
  public auth = new OpenController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(routeUrl.ping, this.auth.ping);
  }
}
