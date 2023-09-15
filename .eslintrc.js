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
      "plugin:storybook/recommended"
   ],
   // "parser": '@typescript-eslint/parser',

   "parserOptions": {
      "ecmaVersion": "latest",
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
      "i18next/no-literal-string": ["error", {markupOnly: true}]
   },
   globals: {
      __IS_DEV__: true
   }
}
