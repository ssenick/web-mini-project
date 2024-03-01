import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildScssLoader (isDev: boolean): object {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }

        }
      },
      'sass-loader'
    ]
  }
}
