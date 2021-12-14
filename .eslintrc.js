module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    camelcase: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/display-name': 'off',
    'prettier/prettier': 'error',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
    'consistent-return': 'warn',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        prop: 'ignore',
      },
    ],
    'react/no-unused-prop-types': 'off',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"]
  },
};
