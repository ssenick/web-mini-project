import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from 'path';
import {buildScssLoader} from "../build/loaders/buildScssLoader";

export default ({config}: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: "",
        html: "",
        build: "",
        src: path.resolve(__dirname, "..", "..", 'src'),
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.tx', '.tsx')
    config.module.rules.push(buildScssLoader(true))

    return config
}
