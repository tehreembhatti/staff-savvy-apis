import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { AuthRoute } from '@/routes/auth.routes';

ValidateEnv();

const app = new App([new AuthRoute()]);

app.listen();
