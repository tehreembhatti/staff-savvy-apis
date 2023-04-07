import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { AuthRoute } from '@/routes/auth.routes';
import { OpenRoute } from '@/routes/open.routes';

ValidateEnv();

const app = new App([new AuthRoute(), new OpenRoute()]);

app.listen();
