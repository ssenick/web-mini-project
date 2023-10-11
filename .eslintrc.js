module.exports = {
   "env": {
      "browser": true,
      "es2021": true
   },
   "extends": [
      "standard-with-typescript",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:i18next/recommended",
      "plugin:storybook/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended"
   ],
   // "parser": '@typescript-eslint/parser',

   "parserOptions": {
      "ecmaVersion": "2020",
      "sourceType": "module",
      // "ecmaFeatures": {
      //    jsx: true,
      // },
      "parser": '@typescript-eslint/parser',
      "project": './tsconfig.json',
      "tsconfigRootDir": __dirname,
   },
   "overrides": [
      {
         "env": {
            "node": true
         },
         "files": [
            ".eslintrc.{js,cjs}",

         ],
         "parserOptions": {
            "sourceType": "script",
         }
      }
   ],
   "plugins": [
      "react",
      "i18next",
      '@typescript-eslint',
      "react-hooks"
      // '@typescript-eslint',
   ],
   "rules": {
      "react/no-deprecated": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/explicit-function-return-type" : 'warn',
      "@typescript-eslint/no-misused-promises": [
         "error",
         {
            "checksVoidReturn": false
         }
      ],
      "@typescript-eslint/naming-convention": 'off',
      "@typescript-eslint/no-var-requires": 'off',
      "i18next/no-literal-string": ["error", {markupOnly: true }],
      "react/display-name": "off",
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,

   },
   globals: {
      __IS_DEV__: true
   }
}
