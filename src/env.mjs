import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().optional(),
    GOOGLE_SITE_VERIFICATION_ID: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().min(1),
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().min(1),
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
});
