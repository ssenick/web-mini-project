import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

const path = require('path')

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const apiUrl = env.apiUrl || 'http://localhost:8000'
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
    host: Host.localhost,
    apiUrl,
    project: 'frontend'
  })

  return config
}
