export function buildDevServer(option) {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
        host: option.host,
        hot: true
    };
}
