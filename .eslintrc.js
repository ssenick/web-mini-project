module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'standard-with-typescript',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:i18next/recommended',
      'plugin:storybook/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
   ],

   parserOptions: {
      ecmaVersion: '2020',
      sourceType: 'module',
      // "ecmaFeatures": {
      //    jsx: true,
      // },
      parser: '@typescript-eslint/parser',
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
   },
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
   ],
   plugins: [
      'react',
      'i18next',
      '@typescript-eslint',
      'react-hooks',
      'ulbi-tv-plugin',
      'simple-import-sort',
      'unused-imports',
      // '@typescript-eslint',
   ],
   rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
         'warn',
         {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
         },
      ],
      'react/no-deprecated': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-misused-promises': [
         'error',
         {
            checksVoidReturn: false,
         },
      ],
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'i18next/no-literal-string': ['error', { markupOnly: true }],
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
      'ulbi-tv-plugin/public-api-imports': [
         'error',
         {
            alias: '@',
            testFilesPatterns: ['**/*.test.*', '**/*.story.*', 'StoreDecorator.tsx'],
         },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
   },
   globals: {
      __IS_DEV__: true,
      __API__: true,
      __PROJECT__: true,
   },
};
