module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint', 'unused-imports' ],
  rules: {
    quotes: [ 'error', 'single' ],
    'jsx-quotes': [ 'error', 'prefer-single' ],
    'prettier/prettier': 0,
    'comma-dangle': [ 'error', 'only-multiline' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'curly': [ 'error', 'multi-line' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'radix': [ 'error', 'as-needed' ],
    'react/react-in-jsx-scope': 'off',

    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		]
  },
};
