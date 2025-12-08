/**
 * Variable declaration best practices
 * 
 * Always declare variables outside of loops and initialize with default values.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 03 - Naming Conventions Conventions
 * Section: Variables
 */

// BAD - variable declared inside loop block
var i = 12;
while (i < 10) {
    var howMany = i + 42; // BAD: declared inside loop
    i++;
}
console.log(howMany); //undefined!


// BETTER - variables declared outside loop with default values
var i = 12;
var howMany = 0; // Initialize with default value

while (i < 10) {
    howMany = i + 42;
    i++;
}

console.log(howMany); // Will be 0 (or calculated value if loop runs)
