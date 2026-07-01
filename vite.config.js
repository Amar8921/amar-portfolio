import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/amar-portfolio/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ["react-icons"],
  },
});