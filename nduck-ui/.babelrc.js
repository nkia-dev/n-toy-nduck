module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: 'defaults',
                },
                useBuiltIns: 'usage',
                corejs: '3',
            },
        ],
    ],
    plugins: [
        ['transform-remove-console', { exclude: ['error', 'warn'] }],
        'react-hot-loader/babel',
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-async-to-generator',
        'dynamic-import-webpack',
        [
            'import',
            { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
        ],
    ],
}
