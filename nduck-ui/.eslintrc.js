const path = require('path')

module.exports = {
    extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
    plugins: [
        // ...
        'prettier',
        'react-hooks',
        'jest',
    ],
    parser: 'babel-eslint',
    rules: {
        semi: ['error', 'never'],
        'no-unused-vars': 'off',
        'max-len': [1, 120, 2, { ignoreComments: true }],
        indent: [1, 4, { SwitchCase: 1 }],
        'arrow-body-style': [
            'error',
            'as-needed',
            { requireReturnForObjectLiteral: true },
        ],
        'react/jsx-indent': [1, 4],
        'linebreak-style': 0,
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
        'react/prop-types': 0,
        'react/jsx-indent-props': [2, 4],
        'react/forbid-prop-types': 0,
        'react/require-default-props': [0, { forbidDefaultForRequired: false }],
        'jsx-a11y/href-no-hash': 0,
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: false,
            },
        ],
        'jsx-a11y/anchor-is-valid': 0,
        'import/prefer-default-export': 'off',
        'object-curly-newline': 0,
        'import/no-unresolved': [
            'error',
            {
                ignore: ['src/'],
            },
        ],
        'react/sort-comp': 'off',
        'func-names': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        'jest/globals': true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve('./src')],
            },
        },
    },
}
