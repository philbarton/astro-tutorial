import { defineConfig } from "vite";

export default defineConfig({
    server: {
        allowedHosts: [
            "localhost",
            "*.netlify.app" // 👈 add your Netlify preview host
        ]
    },
});