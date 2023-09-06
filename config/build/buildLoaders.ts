import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";


export function buildLoaders({isDev}: BuildOptions) {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
                    },

                }
            },
            "sass-loader",
        ],
    }
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        scssLoader,
    ]
}