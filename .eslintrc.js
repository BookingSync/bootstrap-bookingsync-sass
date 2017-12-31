module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/use-ember-get-and-set': 0,
    'ember/named-functions-in-promises': 0,
    'ember/order-in-routes': 1,
    'ember/order-in-models': 1,
    'ember/order-in-controllers': 1,
    'ember/alias-model-in-controller': 0
  }
};
