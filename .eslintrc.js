module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint', 'simple-import-sort' ],
  rules: {
    'quotes': [ 'error', 'single' ],
    'jsx-quotes': [ 'error', 'prefer-single' ],
    'prettier/prettier': 0,
    'comma-dangle': [ 'error', 'only-multiline' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'curly': [ 'error', 'multi-line' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'radix': [ 'error', 'as-needed' ],
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react`\`react-dom` packages come first.
          [ 
            '^\\u0000',
            '^react(-dom)?$',
            '^prop-types',
            '^@?\\w'
          ],

          // Side effect imports.
          [ '^\\u0000' ],

          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          [ '^' ],
          // Relative imports.
          // Anything that starts with a dot.
          [ '^\\.' ],
        ]
      }
    ],
  }
};