module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // rules里的规则会覆盖extends里的规则
    "rules": {
        //未被使用的变量:https://eslint.nodejs.cn/docs/rules/no-unused-vars
        // 'no-unused-vars' : ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
        // 'no-unused-vars' : ["error", "all"]
        // 'no-unused-vars' : [2, "all"]
        // 'no-unused-vars' : 2
        // 'no-unused-vars' : 'error',
        'no-unused-vars' : 0,

        // 尾随逗号:https://eslint.nodejs.cn/docs/rules/comma-dangle
        'comma-dangle': ['error', 'never'],

        //强制一致使用反引号、双引号或单引号:https://eslint.nodejs.cn/docs/rules/quotes
        'quotes': ['error', 'single'],

        //要求或禁止使用分号:https://eslint.nodejs.cn/docs/rules/semi
        //一句代码的末尾要不要使用分号
        'semi': ['error', 'always'],

        //不允许多个空行:"max"（默认值：2）强制连续空行的最大数量。"maxEOF" 强制文件末尾连续空行的最大数量。"maxBOF" 强制文件开头连续空行的最大数量。
        //https://eslint.nodejs.cn/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines':['error', { "max": 2, "maxEOF": 1, "maxBOF":1 }],

        //驼峰命名约定
        'camelcase':"error",

        //禁止使用console,生产环境下不允许使用console
        //https://eslint.nodejs.cn/docs/rules/no-console
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        //禁用 debugger,生产环境下不允许使用debugger
        //https://eslint.nodejs.cn/docs/rules/no-debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        //要求使用 === 和 !==
        //https://eslint.nodejs.cn/docs/rules/eqeqeq
        'eqeqeq': 'error',

        //在块之前强制执行一致的间距
        //https://eslint.nodejs.cn/docs/rules/space-before-blocks
        'space-before-blocks': 'error',

        //强制执行一致的缩进
        //https://eslint.nodejs.cn/docs/rules/indent
        'indent': ['error', 4],

        //在 function 定义左括号之前强制执行一致的间距
        //https://eslint.nodejs.cn/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', 'never'],

    }
};