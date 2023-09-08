import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

const path = require('path');


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const PORT = 'auto'
    const isDev = mode === 'development'

    // const host = 'localhost' || 'local-ip'
    const Host = {
        localhost: 'localhost',
        localIp: 'local-ip'
    } as const


    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        host: Host.localhost
    })

    return config
};