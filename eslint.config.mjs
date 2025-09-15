import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname
})

const eslintConfig = [
    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
            ]
        }
    })
]

export default eslintConfig
