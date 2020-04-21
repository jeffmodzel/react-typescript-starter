module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/typedef": [
            "error",
            {
              "arrowParameter": false,
              "variableDeclaration": true
            }
        ],
        "@typescript-eslint/no-unused-vars": 
            [
            "error", {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
                }
            ],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/react-in-jsx-scope": "off",
    }
};