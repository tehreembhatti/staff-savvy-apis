import request from 'supertest';
import { App } from '@/app';
import { AuthRoute } from '@routes/auth.routes';
import { ILoginPayload } from '@/interfaces/auth.interface';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('TEST Authorization API', () => {
  const route = new AuthRoute();
  const app = new App([route]);
  describe('[POST] /auth/login', () => {
    it('response should have the Valid User with 200 status code', async () => {
      const userData: ILoginPayload = {
        email: 'example1@email.com',
        password: 'testPasswordABCDE',
      };

      const response = await request(app.getServer()).post('/auth/login').send(userData);
      expect(response.status).toBe(200);
      expect(response.body.user).toBe('ABC');
    });
  });
});
