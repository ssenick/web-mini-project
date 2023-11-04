import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildScssLoader(isDev) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: function (resourcePath) { return Boolean(resourcePath.includes('.module.')); },
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            },
            'sass-loader'
        ]
    };
}
