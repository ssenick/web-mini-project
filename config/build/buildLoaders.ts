import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";


export function buildLoaders({isDev}: BuildOptions) {

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
                loader:"css-loader",
                options:{
                    modules : {
                        auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
                    },

                }
            },
            "sass-loader",
        ],
    }
    return [
        typescriptLoader,
        scssLoader,
    ]
}