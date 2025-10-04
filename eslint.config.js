import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      prettier: eslintPluginPrettier,
    },
    extends: [
      "js/recommended",
      ...tseslint.configs.recommended,
      "plugin:prettier/recommended", // <= ini integrasi utama
    ],
    languageOptions: {
      globals: globals.node, // gunakan node untuk backend
    },
    rules: {
      "prettier/prettier": ["error"],
    },
  },
]);
