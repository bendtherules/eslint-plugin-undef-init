/**
 * @fileoverview Always initialize variables during declaration. Set it explicitly to undefined, if required.
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/undef-init"),
    RuleTester = require("eslint").RuleTester,
    ruleMessage = require("../../../lib/ruleNameMessageMap")['undef-init'];


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 7 }
});
ruleTester.run("undef-init", rule, {

    valid: [
        "var a = undefined;",
        "var a = 123;",
        "let a = [];",
        "var a = 1; var b = a;",
        "for (var a of {}) {a;}",
        "for (var a in []) {a;}",
    ],

    invalid: [
        {
            code: "var a;",
            errors: [{
                message: ruleMessage,
            }],
            output: "var a = undefined;",
        },
        {
            code: "let  abc; something_else()",
            errors: [{
                message: ruleMessage,
            }],
            output: "let  abc = undefined; something_else()"
        },
        {
            code: "let a1, a2, a3;",
            errors: [
                {
                    message: ruleMessage,
                },
                {
                    message: ruleMessage,
                },
                {
                    message: ruleMessage,
                }
            ],
            output: "let a1 = undefined, a2 = undefined, a3 = undefined;",
        },
        {
            code: "var a1, a2= 123, a3;",
            errors: [
                {
                    message: ruleMessage,
                },
                {
                    message: ruleMessage,
                },
            ],
            output: "var a1 = undefined, a2= 123, a3 = undefined;",
        },
        {
            code: "for (a of {}){var c;}",
            errors: [
                {
                    message: ruleMessage,
                },
            ],
            output: "for (a of {}){var c = undefined;}",
        },
        {
            code: "for (var a of {}){var c;}",
            errors: [
                {
                    message: ruleMessage,
                },
            ],
            output: "for (var a of {}){var c = undefined;}",
        },
        {
            code: "for (var a in []){var c;}",
            errors: [
                {
                    message: ruleMessage,
                },
            ],
            output: "for (var a in []){var c = undefined;}",
        },
    ]
});
