const path = require("path");

/** @type {import('vite').UserConfig} */
export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
  publicDir: path.resolve(__dirname, "public"),
};
