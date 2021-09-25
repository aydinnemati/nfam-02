module.exports = {
    root: true,
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 2021,
    },
    env: {
      commonjs: true,
      es6: true,
      browser: false,
      node: true,
    },
    plugins: ['sonarjs', 'node', 'security', 'prettier'],
    extends: [
      'eslint:all',
      'plugin:security/recommended',
      'plugin:node/recommended',
      'plugin:sonarjs/recommended',
      'airbnb',
      'prettier',
    ],
    rules: {
      // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      // 'no-underscore-dangle': 'off',
      // 'node/no-unpublished-require': 'off',
      'prettier/prettier': 'error',
    },
  };