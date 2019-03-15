# ReactNative + Typescript + Styleguidist

🤔 Next thing to do? 🌮

## Install packages

- Typescript packages

```sh
yarn add --dev typescript react-docgen-typescript react-native-typescript-transformer
```

- Generate tsconfig.json file

```sh
yarn tsc --init --pretty --jsx react
```

```sh
touch rn-cli.config.js
```

- Types

```sh
yarn add --dev @types/react @types/react-native @types/react-test-renderer
```

```sh
yarn add react-styleguidist
```

- Some packages for react-native-web and styleguidist

```sh
yarn add -D @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/polyfill @babel/preset-env babel-loader babel-plugin-react-native-web file-loader metro-react-native-babel-preset react-art react-dom react-native-web react-styleguidist webpack webpack-cli webpack-dev-server ts-loader @types/react-dom @types/jest
```

## rn-cli.config.js

```js
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx']
  }
}
```

## package.json

```json
{
  "scripts": {
    "styleguide": "styleguidist server",
    "styleguide:build": "styleguidist build"
  }
}
```

## Update your styleguide.config.js

```js
module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse
}
```
