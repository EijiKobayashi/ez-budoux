# ez-budoux  

## 超簡単にBudouXを使っちゃお〜  

レスポンシブウェブデザインのPC幅, SP幅で改行ポイントをうるさく指示してくるお客様とかいて HTML 内に &lt;br class=&quot;sp&quot;&gt; &lt;br class=&quot;pc&quot;&gt; が増えるパターンってよくあるある。  

そんなとき日本語をいい具合に改行してくれるライブラリ[BudouX](https://github.com/google/budoux)って超便利っ！  

だけど JS が苦手って方のためにポン付け「超簡単にBudouXを使っちゃお〜」 ez-budoux を作ってみました。  

<hr>

### ダウンロード
このリポジトリの[Download ZIP](https://github.com/EijiKobayashi/ez-budoux/archive/refs/heads/develop.zip)からダウンロードしてください。  
解凍後、以下のパスにある JS ファイルが ez-budoux です。
```
/public/assets/js/ez-budoux.js
```
  
<hr>
  
### 使用方法  

#### 設置  
```HTML
<script type="text/javascript" src="/assets/js/ez-budoux.js"></script>
```

#### 基本  
```HTML
<p data-budoux="true">あの<strong>イーハトーヴォ</strong>のすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られた<em>モリーオ市</em>、郊外のぎらぎらひかる草の波。</p>
```
- 文章を囲むタグにデータ属性 data-budoux="true" を付与する  
※ &lt;wbr&gt; で区切りられます

#### 基本 + しきい値  
```HTML
<p data-budoux="true" data-budoux-threshold="100">あの<strong>イーハトーヴォ</strong>のすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られた<em>モリーオ市</em>、郊外のぎらぎらひかる草の波。</p>
```
- 文章を囲むタグにデータ属性 data-budoux="true" を付与する  
- 文章を囲むタグにデータ属性 data-budoux-threshold (しきい値: 100 〜 2000) を付与する  
※ デフォルト値は 1000 です  
※ 小: 区切りが多い, 大: 区切りが少ない  

#### 基本 + しきい値 + タイプ  
```HTML
<p data-budoux="true" data-budoux-threshold="100" data-budoux-type="br">あの<strong>イーハトーヴォ</strong>のすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られた<em>モリーオ市</em>、郊外のぎらぎらひかる草の波。</p>
```
- 文章を囲むタグにデータ属性 data-budoux="true" を付与する  
- 文章を囲むタグにデータ属性 data-budoux-threshold (しきい値: 100 〜 2000) を付与する  
- 文章を囲むタグにデータ属性 data-budoux-type (値: br, wbr, span) を付与する  
※ &lt;br&gt;, &lt;wbr&gt;, &lt;span&gt; のいずれかで区切りられます  
※ class が付与されます  
※ &lt;html&gt; タグは無効化されます  
  
<hr>
  
### パラメータ
| Parameter             |   |
| -                     | - |
| data-budoux           | デフォルト: true<br> |
| data-budoux-threshold | このパラメータの値を設定すると改行させるポイントを変更できます。<br>しきい値は 100 〜 2000 で 100 単位で指定できます。<br>値が小さいと区切りが多く、値が大きいと区切りが少なくなります。 |
| data-budoux-type      | このパラメータの値を設定すると改行させる際に付与される HTML タグを変更できます。<br>またその HTML タグにインデックスされた CLASS (例: class="fruit-0") が付与されます。<br>・ `data-budoux-type="br"`: &lt;br&gt;<br>・ `data-budoux-type="wbr"`: &lt;wbr&gt;<br>・ `data-budoux-type="span"`: &lt;span&gt;<br>(注) 初期ストリングに記載した &lt;html&gt; タグはすべて無効化されます。 |
