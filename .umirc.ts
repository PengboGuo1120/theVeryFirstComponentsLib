const { defineConfig } = require("umi");

const config = defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'yarn',
});

module.exports = config;