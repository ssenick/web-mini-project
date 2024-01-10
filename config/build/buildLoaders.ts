import type webpack from 'webpack'

import { buildScssLoader } from './loaders/buildScssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }
  const svgLoader = buildSvgLoader()

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const scssLoader = buildScssLoader(isDev)
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env']
        ]
      }
    }
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader
  ]
}
