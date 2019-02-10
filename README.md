# vue-cliを利用したセットアップ手順

vue-cliを使うとwebpack関連も一緒にインストールしてくれて大変便利。
開発スピードが早いので、本やインターネットの情報は古いことが多い。
必ず本家サイトに目を通して実行すること。

<https://cli.vuejs.org/guide/installation.html>

## Node.js

Node.js 8.9以降が必要。

```text
iida-macbook-pro:vuejs-practice2 iida$ node --version
v8.15.0
```

## vue-cliのインストール

グローバル環境にインストールする。

```bash
npm install -g @vue/cli
```

インストールされたバージョンを確認する。

```bash
iida-macbook-pro:vuejs-practice2 iida$ vue --version
3.4.0
```

## いつもの.gitignore

使っているのはgiboで生成したものに若干の手を加えたもの。

```bash
./gibo dump Windows Linux macOS Emacs vim python Node >> .gitignore
```

## いつもの.eslintrc.js

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

## プロジェクトの作成

事前に決めておくこと。

- プロジェクト名
- 使うフィーチャ

フィーチャとして使うのはBabel, Router, Vuex, CSS, Linterくらい。

```bash
vue create my-project
```

これを実行することでmy-projectディレクトリが新規で作られる。

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
npm install -D bulma
```

実行例。

```bash
iida-macbook-pro:hello-world iida$ npm install -D bulma
+ bulma@0.7.4
added 1 package from 1 contributor and audited 25948 packages in 8.238s
found 0 vulnerabilities
```

インストールされた場所はここ。

```text
./node_modules/bulma/bulma.sass
```

## bulma.scssの新規作成

プロジェクト内にbulma.scssを新規に作成する。
場所はどこでもよい。./src/assets/bulma.scssでもよいし、./bulma.scssでもいい。

中身は1行のみ。

```scss
/* ~記号はnode_modules/を意味する  */
@import '~bulma/bulma'
```

## main.jsから呼び出す

作成したbulma.scssファイルをsrc/main.jsから呼び出す。

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSSフレームワークBulmaを利用
require("./bulma.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

## public/index.html

langをjaにした程度。

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
