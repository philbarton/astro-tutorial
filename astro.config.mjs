// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';


import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()],
  adapter: cloudflare(),
  server: {
    allowedHosts: true,
  }
});