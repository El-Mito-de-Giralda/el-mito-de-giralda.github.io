// eslint.config.js
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: __dirname, // Asegúrate de especificar el directorio base del proyecto
});

module.exports = {
  env: {
   browser: true,
   es2021: true,
  },
  extends: [
   'eslint:recommended',
   'plugin:react/recommended',
   'plugin:prettier/recommended',
  ],
  parserOptions: {
   ecmaFeatures: {
     jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'modul e',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
   },
 }; 