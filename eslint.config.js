// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import typescript from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";

import parser from "@typescript-eslint/parser";

export default [
  js.configs.recommended, // 使用基础规则集
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // 指定适用的文件范围
    languageOptions: {
      ecmaVersion: "latest", // 最新的 ECMAScript 版本
      sourceType: "module", // 使用 ES 模块
      parser, // 使用 TypeScript 解析器
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 启用 JSX 支持
        },
      },
    },
    plugins: {
      react,
      "@typescript-eslint": typescript,
      prettier,
    },
    rules: {
      ...typescript.configs.recommended.rules, // 引入 TypeScript 推荐规则
      ...react.configs.recommended.rules, // 引入 React 推荐规则

      // 自定义规则
      "react/react-in-jsx-scope": "off", // React 17+ 不需要显式导入 React
      "react/prop-types": "off", // 禁用 prop-types 检查
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      // Prettier 规则
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
        },
      ],
    },
  },
];
