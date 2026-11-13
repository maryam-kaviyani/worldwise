import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? "/worldwise/" : "/",
  plugins: [react(), eslint()],
}));
