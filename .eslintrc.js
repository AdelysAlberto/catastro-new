module.exports = {
  env: {
    browser: true,
    es6: true,
    node: 1,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 2,
    'no-lonely-if': 0,
    'no-plusplus': 0,
    "block-spacing": ["error", "always"],
    'no-mixed-spaces-and-tabs': 2,
    'jsx-quotes': [2, "prefer-single"],
    "comma-spacing" : ["error", { "before": false, "after": true }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing" : ["error", "always"],
    "indent": ["error", 4 ],
    "semi": ["error", "always"],
    "quotes": ["error","single"],
    "class-methods-use-this": 0,
  },
};
