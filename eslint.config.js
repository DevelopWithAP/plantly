// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierReommended = require("eslint-plugin-prettier/recommended");
const eslintPluginReactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierReommended,
  {
    plugins: {
      "react-native": eslintPluginReactNative,
    },
    rules: {
      "react-native/no-unused-styles": "error",
    },
  },
  {
    ignores: ["dist/*"],
  },
]);
