// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        // config: 'configs/webpack.common.conf.js',
        // 'config-index': 1
        // 使用上面的配置没起作用，各种搜索后找到一个解决方案
        // https://github.com/benmosher/eslint-plugin-import/issues/352#issuecomment-291967058
        config: 'configs/webpack.eslint.conf.js',
      }
    }
  },
  // weex no-undef 问题
  // https://eslint.org/docs/user-guide/configuring.html#specifying-globals
  globals: {
    weex: true,
    WXEnvironment: true
  },
  // add your custom rules here
  rules: {
    'vue/no-parsing-error':  [2, {
      "x-invalid-end-tag": false
    }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'no-underscore-dangle': ['error', {
      allow: [
        '_wx_tpl'
      ]
    }],
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
