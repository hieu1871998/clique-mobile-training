module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'jsx-quotes': 'prefer-single',
        'no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', {
          'args': 'none'
        }],
        'react/no-unescaped-entities': 'warn',
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'prefer-const': 'warn',
        'sort-imports': 'off',
        'no-unsafe-optional-chaining': 'error',
        'no-extra-boolean-cast': 'warn',
        'quotes': [2, 'single', 'avoid-escape'],
        'max-len': ['warn', { 'code': 120, 'tabWidth': 2 }],
        'arrow-parens': ['warn', 'as-needed'],
        'no-trailing-spaces': 'warn',
        'no-empty': 'warn',
        'no-duplicate-imports': 'error'
      },
    },
  ],
};
