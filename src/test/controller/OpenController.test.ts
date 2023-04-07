import request from 'supertest';
import { App } from '@/app';
import { OpenRoute } from '@/routes/open.routes';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('TEST Open API', () => {
  const route = new OpenRoute();
  const app = new App([route]);
  describe('[GET] /open/ping', () => {
    it('"PONG" when server is up and running', async () => {
      const response = await request(app.getServer()).get('/open/ping');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('PONG!');
    });
  });
});
