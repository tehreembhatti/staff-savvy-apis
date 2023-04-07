import request from 'supertest';
import { App } from '@/app';
import { AuthRoute } from '@routes/auth.routes';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('TEST Authorization API', () => {
  const route = new AuthRoute();
  const app = new App([route]);
  describe('[GET] /open/ping', () => {
    it('"PONG" when server is up and running', async () => {
      const response = await request(app.getServer()).get('/open/ping');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('PONG!');
    });
  });
});
