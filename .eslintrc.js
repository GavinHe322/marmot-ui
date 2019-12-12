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
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-debugger': 'error',
  }
}
