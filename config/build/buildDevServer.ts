import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/config";

export function buildDevServer (option : BuildOptions): DevServerConfiguration {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
        host: option.host,
        hot:true,
    }
}