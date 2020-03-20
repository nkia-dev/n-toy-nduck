const PnpWebpackPlugin = require('pnp-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssNormalize = require('postcss-normalize')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')

const paths = require('./config/paths')

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

module.exports = webpackEnv => {
    const isEnvDevelopment = webpackEnv === 'development'
    const isEnvProduction = webpackEnv === 'production'

    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            isEnvDevelopment && require.resolve('style-loader'),
            isEnvProduction && {
                loader: MiniCssExtractPlugin.loader,
                options: {},
            },
            {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                // Options for PostCSS as we reference these options twice
                // Adds vendor prefixing based on your specified browser support in
                // package.json
                loader: require.resolve('postcss-loader'),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebook/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        }),
                        // Adds PostCSS Normalize as the reset css with default options,
                        // so that it honors browserslist config in package.json
                        // which in turn let's users customize the target behavior as per their needs.
                        postcssNormalize(),
                    ],
                    sourceMap: isEnvProduction,
                },
            },
        ].filter(Boolean)
        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve('resolve-url-loader'),
                    options: {
                        sourceMap: isEnvProduction,
                    },
                },
                {
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: true,
                        javascriptEnabled: true,
                    },
                },
            )
        }
        return loaders
    }

    return {
        module: {
            rules: [
                { parser: { requireEnsure: false } },
                {
                    test: /\.(js|mjs|jsx)$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                                cache: false,
                                // cache: true,
                                formatter: require.resolve(
                                    'react-dev-utils/eslintFormatter',
                                ),
                                eslintPath: require.resolve('eslint'),
                                resolvePluginsRelativeTo: __dirname,
                            },
                            loader: require.resolve('eslint-loader'),
                        },
                    ],
                    include: paths.appSrc,
                },
                {
                    oneOf: [
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: 10000,
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        {
                            test: /\.(js|mjs|jsx)$/,
                            loader: 'babel-loader',
                            include: paths.appSrc,
                            exclude: /node_modules/,
                            options: {
                                cacheCompression: false,
                                cacheDirectory: true,
                                compact: isEnvProduction,
                            },
                        },
                        {
                            test: cssRegex,
                            exclude: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                sourceMap: isEnvProduction,
                            }),
                            sideEffects: true,
                        },
                        {
                            test: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                sourceMap: isEnvProduction,
                                modules: {
                                    getLocalIdent: getCSSModuleLocalIdent,
                                },
                            }),
                        },
                        {
                            test: lessRegex,
                            use: getStyleLoaders(
                                {
                                    importLoaders: 3,
                                    sourceMap: isEnvProduction,
                                },
                                'less-loader',
                            ),
                            // Don't consider CSS imports dead code even if the
                            // containing package claims to have no side effects.
                            // Remove this when webpack adds a warning or an error for this.
                            // See https://github.com/webpack/webpack/issues/6571
                            sideEffects: true,
                        },
                        {
                            test: lessModuleRegex,
                            use: getStyleLoaders(
                                {
                                    importLoaders: 3,
                                    sourceMap: isEnvProduction,
                                    modules: {
                                        getLocalIdent: getCSSModuleLocalIdent,
                                    },
                                },
                                'less-loader',
                            ),
                        },
                        {
                            loader: require.resolve('file-loader'),
                            exclude: [
                                /\.(js|mjs|jsx|ts|tsx)$/,
                                /\.html$/,
                                /\.json$/,
                            ],
                            options: {
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                    ],
                },
            ],
        },

        resolve: {
            // This allows you to set a fallback for where Webpack should look for modules.
            // We placed these paths second because we want `node_modules` to "win"
            // if there are any conflicts. This matches Node resolution mechanism.
            // https://github.com/facebook/create-react-app/issues/253
            modules: ['node_modules', paths.appNodeModules].concat([
                paths.appSrc,
            ]),
            // These are the reasonable defaults supported by the Node ecosystem.
            // We also include JSX as a common component filename extension to support
            // some tools, although we do not recommend using it, see:
            // https://github.com/facebook/create-react-app/issues/290
            // `web` extension prefixes have been added for better support
            // for React Native Web.
            extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
            plugins: [
                // Adds support for installing with Plug'n'Play, leading to faster installs and adding
                // guards against forgotten dependencies and such.
                PnpWebpackPlugin,
                // Prevents users from importing files from outside of src/ (or node_modules/).
                // This often causes confusion because we only process files within src/ with babel.
                // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
                // please link the files into your node_modules/ and let module-resolution kick in.
                // Make sure your source files are compiled, as they will not be processed in any way.
                new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
            ],
        },
        resolveLoader: {
            plugins: [
                // Also related to Plug'n'Play, but this time it tells Webpack to load its loaders
                // from the current package.
                PnpWebpackPlugin.moduleLoader(module),
            ],
        },

        optimization: {
            minimize: isEnvProduction,
            splitChunks: {
                chunks: 'all',
                name: false,
            },
            noEmitOnErrors: true,
        },

        node: {
            module: 'empty',
            dgram: 'empty',
            dns: 'mock',
            fs: 'empty',
            http2: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty',
        },
    }
}
