# webpack-template

webpack を利用してみたい！
そんな気持ちにさせてくれるよ...

## ディレクトリ  
|  ディレクトリ  |  内容  |
| ---- | ---- |
|  src  |  開発用コード  |
|  public  |  出力コード  |

## ファイル
|  ファイル  |  内容  |
| ---- | ---- |
|  .browserslistrc  |  対象ブラウザの指定  |
|  .eslintrc.js  |  ESLintの設定  |
|  babel.config.js |  Babelの設定  |
|  package.json  |  node, webpackなどの各種設定  |
|  postcss.config.js  |  autoprefixerの設定  |
|  webpack.config  |  webpack実行ファイル  |


<!--
## 利用アーキテクチャ・バージョン  
node.js	v14.10.1以上  
yarn	1.22.4以上  
-->

## 各種コマンド  
### nodeパッケージインストール  

```
yarn install  
```
上記コマンドで/node_modules/のインストール

### 監視  

```
yarn watch  
```
上記コマンドで仮ビルドを実行  
/public/ には書き出されないので注意  
ローカルサーバーが立ち上がり確認可能（デフォルトではlocalhost:8080）

### ビルド  

```
yarn build
```
上記コマンドで /public/ ディレクトリに吐きだれる


### キャッシュクリア  

```
yarn clear-cache
```
監視時にエラーが出た場合に実行するといい具合になる  
もしくは /public/ を削除するといい具合になる  



## 注意事項 

### 画像パスについて
HTMLに記述する画像パスについてはsrc内の相対パスで編集すること  
例：/src/img/logo.svgを読んでいる
```
<img src="../img/logo.svg"> 
```
出力先HTMLのパスについては下記参照

cssに記述するパスは出力先と同様の書き方をする
例
```
background: url(../img/top/bg_paper.png) no-repeat;
```

<!--
### 出力先ディレクトリを変更したい
webpack.config.jsを変更する  
**CSS**
```
new MiniCssExtractPlugin({
    filename: "./common/css/import.css",
}),  
```
**JS**
```
entry: {
    cmn: "./src/js/cmn.js", //デフォルトのエントリーポイント
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "common/js/[name].js",
  }, 
```
-->
