import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { iconClasses } from "@mui/material";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
  },
  resolve: {
    alias: [
      {
        find: "@icons",
        replacement: fileURLToPath(
          new URL("./src/assets/icons", import.meta.url),
        ),
      },
    ],
  },
});
