import { cleanEnv, port, str } from 'envalid';

export const ValidateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    SUPERBASE_PROJECT_ID: str(),
    SUPERBASE_PUBLIC_CLIENT_ID: str(),
  });
};
