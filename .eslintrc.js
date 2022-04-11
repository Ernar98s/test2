module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        'import/extensions': 'off',
        "comma-dangle": 0,
        'guard-for-in': 'off',
        'no-restricted-syntax': 'off',
        'no-underscore-dangle': 'off',
        'import/no-cycle': 'off',
        'import/no-unresolved': 'off',
        'linebreak-style': 'off',
        "no-alert": "off",
        "no-param-reassign": [2, {
            "props": false
        }]
    },
}