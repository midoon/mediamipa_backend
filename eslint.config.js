import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  js.configs.recommended, // dari @eslint/js
  ...tseslint.configs.recommended, // dari typescript-eslint
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules, // disable rules yg bentrok dgn prettier
      "prettier/prettier": "error", // aktifkan prettier sebagai rule
    },
  },
  globalIgnores( [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/src/generated/**", // pastikan ada trailing /** agar semua file di-skip
    ]),
]);
