import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/about.html"),
        projects: resolve(__dirname, "src/projects.html"),
        services: resolve(__dirname, "src/Services.html"),
        contact: resolve(__dirname, "src/contact.html"),
      },
    },
  },
});
