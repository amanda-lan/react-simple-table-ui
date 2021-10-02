module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
        "jest": true
    },
    "settings": {
        "react": {
            "version": 'detect',
        },
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },

};
