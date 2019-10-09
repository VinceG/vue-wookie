const path = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  },
  devServer: {
    open: true,
    compress: true
  },
  css: {
    sourceMap: true,
    extract: true,
    loaderOptions: {
      css: {
        localIdentName: "[name]-[hash]",
        camelCase: "only"
      }
    }
  },
  configureWebpack: {
    resolve: {
      modules: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "scss")
      ],
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    plugins: [
      require("autoprefixer"),
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./public/index.html"),
          path.join(__dirname, "./src/**/*.vue"),
          path.join(__dirname, "./src/**/*.js")
        ]),
        keyframes: true,
        rejected: true,
        whitelistPatternsChildren: []
      })
    ]
  }
};
