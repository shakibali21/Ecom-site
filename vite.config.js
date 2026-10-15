import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, "index.html"),
        about: resolve(projectRoot, "about.html"),
        contact: resolve(projectRoot, "contact.html"),
        products: resolve(projectRoot, "products.html"),
        addToCart: resolve(projectRoot, "addToCart.html"),
      },
    },
  },
});
