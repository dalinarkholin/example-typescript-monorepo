
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

const PATHS = {
  src: path.join(__dirname, "src"),
  images: path.join(__dirname, "src", "assets", "images"),
};

const config: webpack.Configuration = {
  entry: [
    // activate HMR for React
    "react-hot-loader/patch",
    "whatwg-fetch",
    "./src/index.tsx",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",  
    filename: "scripts/[id]-[hash].js",
    chunkFilename: "scripts/[id]-[hash].js",
  },

  // Enable sourcemaps for debugging webpack"s output.
  devtool: "source-map",

  resolve: {
    modules: ["../../node_modules", "node_modules"],
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
    }),
    new CopyWebpackPlugin([
      {
        from: PATHS.images,
        to:  "assets/images",
      },
    ]),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  node: {
    fs: "empty",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              plugins: ["react-hot-loader/babel"],
            },
          },
          "awesome-typescript-loader", // (or awesome-typescript-loader)
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
      {
        test: /\.(jpg|png|svg)$/,
        exclude: /node_modules/,
        loader: "file?publicPath=../&name=./images/img-[hash].[ext]",
      },
    ],
  },
};
if (process.env.NODE_ENV === "development") {
  config.devServer = {
    contentBase: "dist",
    historyApiFallback: true,
    hot: true,
    stats: "normal",
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 8080,
    watchOptions: {
      poll: 1000,
    },
  };

} else {
  // Do Prod Build things
}

module.exports = config;
