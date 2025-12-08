/**
 * System property usage with default value
 * 
 * Always use the second argument for a default value.
 * Remember: gs.getProperty() ALWAYS returns a string!
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 11 - Configurability
 * Section: System properties
 */

// WARNING: This comparison will return FALSE even if my_prop equals 10,
// because gs.getProperty() always returns a string!
var propIsTen = (gs.getProperty('my_prop', 10) == 10); // FALSE!

// BETTER: Compare with string
var propIsTen = (gs.getProperty('my_prop', '10') == '10'); // TRUE

// Or cast to number
var propValue = parseInt(gs.getProperty('my_prop', '10'), 10);
