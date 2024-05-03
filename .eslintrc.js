module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: ['jsx-a11y', 'promise'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    // Prettier must be last to override other configs
    'prettier',
  ],
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'never' },
    ],
    'import/newline-after-import': 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'one-var': 'off',
    'no-plusplus': 'off',
    'operator-assignment': 'off',
    'one-var-declaration-per-line': 'off',
    'class-methods-use-this': 'off',
    '@next/next/no-img-element': 'off',
  },
};
