import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
   const paths: BuildPaths = {
      entry: '',
      html: '',
      build: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: '',
      buildLocales: '',
   };
   config.performance = {
      hints: false,
   };
   config!.resolve!.modules!.push(paths.src);
   config!.resolve!.extensions!.push('.ts', '.tsx', '.js', 'jsx');
   config!.module!.rules!.push(buildScssLoader(true));
   config!.plugins!.push(
      new webpack.DefinePlugin({
         __IS_DEV__: JSON.stringify(true),
         __API__: JSON.stringify('https://testapi.com'),
         __PROJECT__: JSON.stringify('storybook'),
      }),
   );
   const rules = config!.module!.rules as RuleSetRule[];
   config!.module!.rules = rules.map((rule) => {
      if (/svg/.test(rule.test as string)) {
         return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
   });
   config!.module!.rules!.push(buildSvgLoader());
   config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '@': paths.src,
   };

   return config;
};
