import webpack, {RuleSetRule} from "webpack";
import {BuildPaths} from "../build/types/config";
import path from 'path';
import {buildScssLoader} from "../build/loaders/buildScssLoader";
import {buildSvgLoader} from "../build/loaders/buildSvgLoader";

export default ({config}: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: "",
        html: "",
        build: "",
        src: path.resolve(__dirname, "..", "..", 'src'),

    }
    config.performance={
        hints: false,
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx', '.js', 'jsx')
    config.module.rules.push(buildScssLoader(true))


    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)){
            return { ...rule, exclude:/\.svg$/i};
        }
        return rule
    })
    config.module.rules.push(buildSvgLoader())


    return config
}
