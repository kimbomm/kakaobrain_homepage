module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'standard',
    'airbnb'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
