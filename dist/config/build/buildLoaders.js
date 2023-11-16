import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
export function buildLoaders(_a) {
    var isDev = _a.isDev;
    var fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };
    var svgLoader = buildSvgLoader();
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };
    var scssLoader = buildScssLoader(isDev);
    var babelLoader = {
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
    };
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader
    ];
}