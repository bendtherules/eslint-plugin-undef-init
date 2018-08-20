/**
 * @fileoverview Always initialize variables declarations. Instead of naked declarations, set it to undefined.
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
  
  module.exports.configs = {
    recommended: {
      rules: {
        // Disable no-undef-init as its the opposite inbuilt rule
        'no-undef-init': 0,
        'undef-init/undef-init': 1,
      },
    },
  };


