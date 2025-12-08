/**
 * DO NOT DO THIS - Variable declaration inside loop
 * 
 * Variables declared inside loops are scoped incorrectly
 * and may be undefined if the loop doesn't run.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 03 - Naming Conventions Conventions
 * Section: Variables & Functions
 */

// DO NOT DO THIS:
var i = 12;
while (i < 10) {
    var howMany = i + 42;
    i++;
}
console.log(howMany); //undefined!
