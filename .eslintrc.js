module.exports = {
    extends: [
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Turn off the rule globally
      '@typescript-eslint/no-explicit-any': 'off', // Optional: disable the `any` rule globally if needed
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  };
  