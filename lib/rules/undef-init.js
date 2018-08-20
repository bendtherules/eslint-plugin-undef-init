/**
 * @fileoverview Always initialize variables during declaration. Set it explicitly to undefined, if required.
 * @author Abhas Bhattacharya
 */
"use strict";

const ruleMessage = require('../ruleNameMessageMap')['undef-init'];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: ruleMessage,
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",
        schema: [
        ]
    },

    create: function (context) {

        // variables should be defined here
        const defaultAllowInForConditon = {
            ForInStatement: true,
            ForOfStatement: true,
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "VariableDeclarator": function (node) {

                if (node.init === null) {
                    // Parent in always VariableDeclarator, whose parent can be directly one of the for in / for of statements
                    if (node.parent.parent.type === 'ForInStatement' && defaultAllowInForConditon.ForInStatement) {
                        return;
                    }
                    if (node.parent.parent.type === 'ForOfStatement' && defaultAllowInForConditon.ForOfStatement) {
                        return;
                    }

                    context.report({
                        node:node, 
                        message:ruleMessage,
                        fix: function(fixer) {
                            return fixer.insertTextAfter(node, " = undefined");
                        }
                    });
                }
            }
        };
    }
};
