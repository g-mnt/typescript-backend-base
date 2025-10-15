import { env } from '@config/env';
import { app } from './app';

const server = app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port})`);
});

process.on('SIGINT', () => server.close(() => process.exit(0)));
process.on('SIGTERM', () => server.close(() => process.exit(0)));
