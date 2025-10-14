import 'dotenv/config';
import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'staging', 'production']).default('development'),
  PORT: z.string().regex(/^\d+$/).default('3000'),

});

const parsed = EnvSchema.safeParse(process.env);
if (!parsed.success) {
  const errors = parsed.error.flatten().fieldErrors;
  console.error('Invalid environment variables:', errors);
  process.exit(1);
}

const data = parsed.data;

export const env = Object.freeze({
  nodeEnv: data.NODE_ENV,
  port: Number(data.PORT),
});
