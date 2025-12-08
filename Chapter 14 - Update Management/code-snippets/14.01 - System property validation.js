/**
 * System property validation with blank default
 * 
 * When you can't specify a reasonable default, use blank string
 * and validate the property is set.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 14 - Update Management
 * Section: What is (and isn't) tracked
 */

var myProp = gs.getProperty('some_prop', '');
if (!myProp) {
    throw new Error('System property "some_prop" not set.');
}
