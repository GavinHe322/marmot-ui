module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  parser: "vue-eslint-parser",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  globals: {
    window: false,
    document: false,
    navigator: false
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: ['vue'],
  rules: {
    'no-debugger': 'error',
    'comma-dangle': [1, 'always-multiline'],
    // 禁止重复命名
    'no-dupe-args': 2,
    // 禁止出现未使用的变量
    'no-unused-vars': 1,
    'no-empty': 1,
    'no-extra-semi': 1,
    'no-irregular-whitespace': 1,
    'no-unreachable': 1,
    'curly': 1,
    'eqeqeq': 1,
    'dot-notation': 1,
    'no-unused-expressions': 1,
    'array-bracket-newline': 1,
    'array-bracket-spacing': 1,
    'camelcase': 1,
    'block-spacing': 1,
    'linebreak-style': 1,
    'new-cap': 1,
    'no-trailing-spaces': 1,
    'quotes': 1,
    // es6
    'arrow-spacing': 1,
    'no-var': 1,
    'prefer-destructuring': 1,
  }
}
