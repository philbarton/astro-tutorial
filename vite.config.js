import { defineConfig } from "vite";

export default defineConfig({
    server: {
        allowedHosts: [
            "localhost",
            "devserver-main--philb-astro.netlify.app", // 👈 add your Netlify dev server host
        ],
    },
});