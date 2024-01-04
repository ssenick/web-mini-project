var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import webpack from "webpack";
import path from 'path';
import { buildScssLoader } from "../build/loaders/buildScssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
export default (function (_a) {
    var config = _a.config;
    var paths = {
        entry: "",
        html: "",
        build: "",
        src: path.resolve(__dirname, "..", "..", 'src'),
        locales: '',
        buildLocales: ''
    };
    config.performance = {
        hints: false,
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx', '.js', 'jsx');
    config.module.rules.push(buildScssLoader(true));
    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.com'),
        __PROJECT__: JSON.stringify('storybook')
    }));
    var rules = config.module.rules;
    config.module.rules = rules.map(function (rule) {
        if (/svg/.test(rule.test)) {
            return __assign(__assign({}, rule), { exclude: /\.svg$/i });
        }
        return rule;
    });
    config.module.rules.push(buildSvgLoader());
    return config;
});
