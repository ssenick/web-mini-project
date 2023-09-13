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
   ],

   "overrides": [
      {
         "env": {
            "node": true
         },
         "files": [
            ".eslintrc.{js,cjs}"
         ],
         "parserOptions": {
            "sourceType": "script"
         }
      }
   ],
   "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "parser": '@typescript-eslint/parser',
      "project": './tsconfig.json',
      "tsconfigRootDir": __dirname,
   },
   "plugins": [
      "react",
      "i18next"
   ],
   "rules": {
      "react/no-deprecated": "warn",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",

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
