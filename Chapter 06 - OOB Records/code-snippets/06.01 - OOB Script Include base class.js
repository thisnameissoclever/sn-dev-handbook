/**
 * Example OOB Script Include (base class)
 * 
 * This represents an out-of-box Script Include that you might want to extend.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 06 - OOB Records Records
 * Section: Extending OOB Script Includes
 */

var ExampleScriptInclude = Class.create();
ExampleScriptInclude.prototype = {
    initialize: function() {
    },

    overrideMe: function() {
        return 'Override me!';
    },

    dontOverrideMeBro: function() {
        return this.overrideMsg;
    },

    overrideMsg: 'Don\'t override me, bro!',

    type: 'ExampleScriptInclude'
};
