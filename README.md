# ReactNative + Typescript + Styleguidist

## Install packages

```sh
yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn tsc --init --pretty --jsx react
touch rn-cli.config.js
yarn add --dev @types/react @types/react-native @types/react-test-renderer
yarn add react-styleguidist react-docgen-typescript

yarn add -D @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/polyfill @babel/preset-env babel-loader babel-plugin-react-native-web file-loader metro-react-native-babel-preset react-art react-dom react-native-web react-styleguidist webpack

yarn add -D webpack-cli webpack-dev-server ts-loader @types/react-dom @types/jest
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
