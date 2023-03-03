import path from 'path'
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [
      {
        find: '@', replacement: path.join(__dirname, 'src'),
      }
    ]
  },
});
