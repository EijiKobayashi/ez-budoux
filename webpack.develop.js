const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Fiber = require('fibers');
const globule = require('globule');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const LazyLoadWebpackPlugin = require('lazyload-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const targetTypes = { html: 'html', js: 'js' };

const getEntriesList = (targetTypes) => {
  const entriesList = {};
  for (const [srcType, targetType] of Object.entries(targetTypes)) {
    const filesMatched = globule.find(
      [`**/*.${srcType}`, `!**/_*.${srcType}`],
      { cwd: `${__dirname}/src/ejs` }
    );

    for (const srcName of filesMatched) {
      const targetName = srcName.replace(
        new RegExp(`.${srcType}$`, 'i'),
        `.${targetType}`
      );
      entriesList[targetName] = `${__dirname}/src/ejs/${srcName}`;
    }
  }
  return entriesList;
};

const app = {
  mode: 'development', // production / development

  entry: {
    main: './src/js/main.js', // デフォルトのエントリーポイント
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/js/[name].js',
  },

  cache: false,

  module: {
    rules: [
      {
        test: /\.js$/, // 処理対象になるファイル
        exclude: /node_modules/, // 除外したいファイル
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3,
                targets: {
                  ie: '11',
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.scss$/,
        use: [
          // 指定した順の逆から実行される。この順で書くこと
          MiniCssExtractPlugin.loader,
          // 'css-loader', //モジュールに変換
          {
            loader: 'css-loader',
            options: {
              // url: false,
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    grid: true,
                    browsers: ['last 2 versions', 'ie >= 11'],
                  }),
                  require('css-declaration-sorter')({
                    order: 'alphabetical',
                  }),
                  require('postcss-sort-media-queries')({
                    sort: 'mobile-first',
                  }),
                ],
              },
            },
          },
          {
            loader: 'sass-loader', //コンパイル
            options: {
              implementation: require('sass'), // DartSass
              sassOptions: {
                fiber: Fiber,
                outputStyle: 'expanded', // 圧縮 expanded,compressed
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/assets/images',
              outputPath: 'assets/images',
              context: 'src/images',
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'ejs-plain-loader',
          },
        ],
        //loader: 'html-loader',
        //options: {
        //  minimize: false,
        //},
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    // open: true, // 起動時にブラウザを開く
    port: 8080, // localhost:8080
    overlay: true, // エラーをオーバーレイ表示
    // publicPath: 'img'
    hot: true,
  },
  externals: [
    {
      jQuery: 'jquery',
    },
  ],
  plugins: [
    new HardSourceWebpackPlugin(),
    // new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css',
    }),
  ],
  devtool: 'source-map',
  // import文で拡張子が.tsのファイルを解決する
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
for (const [targetName, srcName] of Object.entries(
  getEntriesList({ ejs: 'html' })
)) {
  app.plugins.push(
    new HtmlWebpackPlugin({
      filename: targetName,
      template: srcName,
      minify: false, // minifyしない
      inject: false, // バンドルしたjsファイルを読み込むscriptタグを自動出力するか
    }),
    new LazyLoadWebpackPlugin()
  );
}

module.exports = app; //実行
