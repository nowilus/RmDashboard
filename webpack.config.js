const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (webpackEnv, argv) => {
  const isProduction = argv && argv.mode !== "development";
  const isDevelopment = !isProduction;
  
  const srcPath = __dirname + "/src";
  const buildPath = __dirname + "/build";
  const deployPath = __dirname + "/deploy";
  const moduleName = "react_module";

  let plugins = [
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [{ source: srcPath + "/*Map.js", destination: buildPath }],
          archive: [{ source: buildPath, destination: deployPath + "/" + moduleName + "_bundle.zip" }]
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css" //.[chunkhash:8]
    })
  ];

  return [
    {
      entry: {  [moduleName]: srcPath + "/index.jsx" },
      output: { filename: "[name]_bundle.js", path: buildPath },
      resolve: { extensions: [".js", ".jsx", "scss", "css"] },
      target: ["web", "es5"],
      plugins: plugins,
      devtool: isDevelopment && "eval-source-map",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: { presets: ["@babel/preset-env", "@babel/preset-react"]}
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{ loader: "file-loader", options: { name: "../media/[name].[ext]" } }]
          }
        ]
      },
      optimization: {
        minimize: isProduction,
        minimizer: [
          `...`,
          new CssMinimizerPlugin({
            minimizerOptions: { preset: [ "default", { discardComments: { removeAll: true } }] }
          })
        ]
      }
    }
  ];
};