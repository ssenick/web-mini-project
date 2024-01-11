import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import { type BuildOptions } from '../types/config'

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean
}

export function buildBabelLoader ({ isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx
            }
          ],
          isTsx && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid']
            }
          ],
          '@babel/plugin-transform-runtime'
          // isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  }
}
