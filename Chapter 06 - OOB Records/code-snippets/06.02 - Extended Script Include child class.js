/**
 * Extended Script Include (child class)
 * 
 * Shows how to extend an OOB Script Include using Object.extendsObject().
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 06 - OOB Records Records
 * Section: Extending OOB Script Includes
 */

var ExampleExtendedScript = Class.create();
ExampleExtendedScript.prototype = Object.extendsObject(ExampleScriptInclude, {

    overrideMe: function() {
        return 'Thanks for overriding me!';
    },

    overrideMsg: 'Thanks for not overriding me!',

    type: 'ExampleExtendedScript'
});
