module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    // JS lints
    'dot-notation': 'error',
    'space-infix-ops': 'error',
    'func-call-spacing': 'error',
    'no-useless-concat': 'error',
    'no-trailing-spaces': 'error',

    'curly': ['error', 'all'],
    'semi': ['error', 'always'],
    'no-empty': ['error'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'spaced-comment': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'space-before-function-paren': ['error', 'never'],

    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'one-var': ['error', { 'uninitialized': 'always', 'initialized': 'never' }],
    'camelcase': ['error', { 'properties': 'always' }],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-unary-ops': ['error', { 'words': false, 'nonwords': false }],
    'keyword-spacing': ['error', { 'overrides': { 'catch': { 'after': false } } }],
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': false }],

    // ES6 lints
    'no-var': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'no-useless-rename': 'error',
    'prefer-destructuring': 'error',

    'eol-last': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'object-shorthand': ['error', 'always'],

    'new-cap': ['error', { 'capIsNewExceptions': ['A'] }],
    'generator-star-spacing': ['error', { 'before': false, 'after': true }],

    // eslint-plugin-ember
    'ember/no-observers': 1,
    'ember/use-ember-get-and-set': 0,
    'ember/named-functions-in-promises': 0
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    }
  ]
};
