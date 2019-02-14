# vue-cliを利用したセットアップ手順

vue-cliを使うと依存関係にあるものを一緒にインストールしてくれて大変便利。
しかもwebpackの設定をしなくてすむ。

開発スピードが早いので、本やインターネットの情報は古いことが多い。
必ず本家サイトに目を通して実行すること。

<https://cli.vuejs.org/guide/installation.html>

## Node.js

2019年2月時点ではNode.js 8.9以降が必要。

```text
iida-macbook-pro:vuejs-practice2 iida$ node --version
v8.15.0
```

## vue-cliのインストール

vue-cliはグローバル環境にインストールする。

```bash
npm install -g @vue/cli
```

インストールされたバージョンを確認する。

```bash
iida-macbook-pro:vuejs-practice2 iida$ vue --version
3.4.0
```

## いつもの.gitignore

別途必要になるので準備しておく。

使っているのはgiboで生成したものに若干の手を加えたもの。

```bash
./gibo dump Windows Linux macOS Emacs vim python Node >> .gitignore
```

## いつもの.eslintrc.js

別途必要になるので準備しておく。

eslintがインストールされてなければインストールする。

```bash
npm -g install eslint
npm -g install eslint-config-google
```

.eslintrc.js

```js
module.exports = {
  // "extends": ["google"],
  "extends": ["eslint:recommended", "google"],
  // "installedESLint": true,
  "env": {
    "browser": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    // インデントは2スペース
    "indent": ["error", 2],

    // 改行コード unix or windows
    "linebreak-style": ["error", "unix"],

    // コメント要否
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": false,
        "ClassDeclaration": false
      }
    }],

    // 無視する設定
    "max-len": "off",
    "dot-notation": "off",
    "camelcase": "off"

  }
};
```

## vueプロジェクトの作成

これらは事前に決めておくこと。

- プロジェクト名
- 使うフィーチャ

フィーチャとして使うのはBabel, Router, Vuex, CSS, Linterくらい。
最初のうちは、RouterとVuexはいらないかも。

```bash
vue create <プロジェクト名>
```

これを実行することで<プロジェクト名>のディレクトリが新規で作られる。

作るものが明確ならvue createでディレクトリを作成して、それを育てていくのがいい。
ただ、最初のうちはトライ＆エラーでいくつもプロジェクトを作ることも想定するので、
.gitignoreや.eslintrc.jsといった共通ファイルを上位のディレクトリに置いて共有した方ががいいかもしれない。

```bash
vue create hello-world
```

プリセットを何にするか聞かれるので、Manually select featuresを選択する。

```text
Vue CLI v3.4.0
? Please pick a preset:
  default (babel, eslint)
❯ Manually select features
```

使うフィーチャを矢印キーとスペースで選択していく。

```text
? Check the features needed for your project:
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
❯◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

vue-routerでヒストリーモードを使うかどうかを決める。
ヒストリーモードの場合はWebサーバ側で適切に設定しないといけない。
nを選択しておく。

```text
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
```

dart-sassとnode-sassの違いが分からない・・・

```text
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
❯ Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus
```

linterとformatterは、ESLint + Prettierを選択。

```text
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
❯ ESLint + Prettier
```

LintするタイミングとしてLint on saveを選択。

```text
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
```

設定を機能ごとに別々に保存するか、package.jsonに統合するか、を選択する。

```text
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json
```

最後に、以上の選択肢を保存しておくかを選択する。

```text
? Save this as a preset for future projects? (y/N)
```

いろんな処理が走ったあと、以下のように表示される。

```bash
Successfully created project hello-world.

Get started with the following commands:

 $ cd hello-world
 $ npm run serve
 ```

これで動くサンプルが完成している。

```text
iida-macbook-pro:vuejs-practice2 iida$ tree -I node_modules
.
├── README.md
├── hello-world
│   ├── README.md
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   └── src
│       ├── App.vue
│       ├── assets
│       │   └── logo.png
│       ├── components
│       │   └── HelloWorld.vue
│       ├── main.js
│       ├── router.js
│       ├── store.js
│       └── views
│           ├── About.vue
│           └── Home.vue
└── vscode.code-workspace
```

2019年2月時点では、インストール直後の状態で不具合がでる。
実行時にこのようなエラーがでる場合は、ajvモジュールが最新化されたことによる影響。

```text
iida-macbook-pro:myproject iida$ npm run serve

> myproject@0.1.0 serve /Users/iida/tmp/myproject
> vue-cli-service serve

 INFO  Starting development server...
 ERROR  Error: custom keyword definition is invalid: data.errors should be boolean
Error: custom keyword definition is invalid: data.errors should be boolean
    at Ajv.addKeyword (/Users/iida/tmp/myproject/node_modules/ajv/lib/keyword.js:65:13)
    at module.exports (/Users/iida/tmp/myproject/node_modules/ajv-errors/index.js:10:7)
    at Object.<anonymous> (/Users/iida/tmp/myproject/node_modules/webpack-dev-server/node_modules/schema-utils/src/validateOptions.js:22:1)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
```

この時点でインストールされているのはajv 6.9.0なので、一つ前のバージョンを入れる。

$ npm uninstall ajv
$ npm install ajv@6.8.1

これで動くようになる。

npm run serveを実行してからブラウザを開くと、vue-cliのページが表示される。

# Bulmaのセットアップ

見た目を調整するためにCSSフレームワークのBulmaを使う。

<https://bulma.io/>

## Bulmaのインストール

プロジェクト内にnpmでインストール。

```bash
npm install --save bulma
```

実行例。

```bash
iida-macbook-pro:hello-world iida$ npm install --save bulma
+ bulma@0.7.4
added 1 package from 1 contributor and audited 25948 packages in 8.238s
found 0 vulnerabilities
```

インストールされた場所はnode_modules/bulma/の下。

```text
.
├── bulma.sass
├── css
│   ├── bulma.css
│   ├── bulma.css.map
│   └── bulma.min.css
├── package.json
```

## bulmaの使い方

これらを参照。

<https://www.reddit.com/r/vuejs/comments/5q932p/setting_up_vuejs_with_bulma/>

<https://stackoverflow.com/questions/41966491/css-frameworks-in-vue-js>

CSSファイルが見えているのでindex.htmlファイルで取り込んでもいいけど、
せっかくwebpackで固めて使うのでローダーで固めるのが良さそう。

## 個別に指定する場合

プロジェクト内に./src/variables.scssを新規に作成する。
中身は1行のみ。

```scss
/* ~記号はnode_modules/を意味する  */
@import '~bulma/bulma.sass'
```

作成した./src/bulma.scssファイルを./src/main.jsから呼び出す。
呼び出しはrequireでもimportでもどちらでもよい。

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ★
// CSSフレームワークBulmaを利用
// require("./bulma.scss");
import "./bulma.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

## vue.config.jsで指定する方法

ローダーオプションとして指定する方が簡単でいい。
vue-cliではvue.config.jsを自動作成してくれないので新規で作成する。

これをやっておけば、どこでもbulmaのCSSを利用できる。

~記号はnode_modules/を指している。
@記号は./srcを指している

```js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/variables.scss";`
      }
    }
  }
};
```

## public/index.html

langをjaにする程度で、そのまま流用可能。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="<%= BASE_URL %>favicon.ico">

    <title>hello-world</title>

  </head>

  <body>

    <noscript>
      <strong>We're sorry but hello-world doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>

    <div id="app"></div>

  </body>
</html>
```

# font awesomeの取り込み

font-awesomeはCSSなのでindex.htmlで読み込んでしまえば手っ取り早い。

```html
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
```

公式サイトでvue.js用にvue-fontawesomeパッケージが公開されているけど、これは使わない。
フリー版の最新をnpmでインストールする。

```bash
npm install --save @fortawesome/fontawesome-free
```

CSSファイルは./node_modules/@fortawesome/fontawesome-free/cssにインストールされる。
使いたいのはall.cssなので、これを取り込む。

```text
iida-macbook-pro:hello-world iida$ ls -l node_modules/@fortawesome/fontawesome-free/css
total 712
-rw-r--r--  1 iida  staff  68243 10 26  1985 all.css
-rw-r--r--  1 iida  staff  54456 10 26  1985 all.min.css
-rw-r--r--  1 iida  staff    528 10 26  1985 brands.css
-rw-r--r--  1 iida  staff    475 10 26  1985 brands.min.css
-rw-r--r--  1 iida  staff  66628 10 26  1985 fontawesome.css
-rw-r--r--  1 iida  staff  53029 10 26  1985 fontawesome.min.css
-rw-r--r--  1 iida  staff    547 10 26  1985 regular.css
-rw-r--r--  1 iida  staff    490 10 26  1985 regular.min.css
-rw-r--r--  1 iida  staff    540 10 26  1985 solid.css
-rw-r--r--  1 iida  staff    482 10 26  1985 solid.min.css
-rw-r--r--  1 iida  staff   7270 10 26  1985 svg-with-js.css
-rw-r--r--  1 iida  staff   4688 10 26  1985 svg-with-js.min.css
-rw-r--r--  1 iida  staff  41032 10 26  1985 v4-shims.css
-rw-r--r--  1 iida  staff  26440 10 26  1985 v4-shims.min.css
```

どのみちBulmaを使うための設定でvue.config.jsを作っているので、CSSローダーに追加で読み込ませる。

./src/variables.scssに以下のように追記する。

```scss
/* ~記号はnode_modules/を意味する  */
@import '~bulma/bulma.sass';

/* font-awesome */
$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/brands";
```

# vue-tables-2のインストール

vue-table-2はテーブルを表示するコンポーネント。
検索やソートがクライアント側でできる。

<https://github.com/matfish2/vue-tables-2>

```bash
npm install --save vue-tables-2
```

main.js

```js
import { ClientTable } from "vue-tables-2";
Vue.use(ClientTable);
```

# vue-good-tableのインストール

vue-good-tableはテーブルを表示するコンポーネント。

<https://xaksis.github.io/vue-good-table/>

インストールはいつも通りnpmで。

```bash
npm install --save vue-good-table
```

main.js

```js
import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
```
