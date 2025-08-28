// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';


import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()],
  adapter: netlify(),
  server: {
    allowedHosts: [
      "localhost",
      "*.netlify.app" // 👈 add your Netlify preview host
    ]
  }
});