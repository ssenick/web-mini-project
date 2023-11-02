export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: string
  host: string
  apiUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}

export interface BuildEnv {
  mode: BuildMode
  apiUrl: string
  //    port: string
}
