import pino from 'pino';
import fs from 'fs';
import path from 'path';

const LOG_DIR = path.resolve(process.cwd(), 'logs');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

const transport = pino.transport({
  targets: [
    {
      target: 'pino/file',
      level: 'error',
      options: { destination: path.join(LOG_DIR, 'error.log') },
    },
    {
      target: 'pino/file',
      level: 'info',
      options: { destination: path.join(LOG_DIR, 'info.log') },
    },
    {
      target: 'pino-pretty',
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      options: { colorize: true },
    },
  ],
});

export const Logger = pino({ level: 'info' }, transport);