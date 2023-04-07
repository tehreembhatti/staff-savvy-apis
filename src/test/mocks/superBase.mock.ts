import { ILoginPayload } from '@/interfaces/auth.interface';

const mockedLoginPasswordPayload: Record<string, string> = {
  'example1@email.com': 'testPasswordABCDE',
};

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn().mockReturnValue({
    auth: {
      signInWithPassword: jest.fn().mockImplementation(
        (payload: ILoginPayload) =>
          new Promise(resolve => {
            const { email } = payload;
            if (mockedLoginPasswordPayload[email]) resolve({ data: { user: 'ABC' } });
            else resolve({ error: { status: 500, message: 'User not found' } });
          }),
      ),
    },
  }),
}));
