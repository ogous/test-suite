// https://eslint.org/docs/rules/
module.exports = {
    'root': true,
    // system globals
    'env': {
        'node': true,
        'browser': true,
        'amd': true,
        'commonjs': true,
        'es6': true
    },
    // other globals
    'globals': {

    },

    'plugins': [
        "jest"
    ],

    'extends': [
        'plus',
        'next/core-web-vitals',
        'prettier'
    ],

    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },

    'rules': {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    },
};
