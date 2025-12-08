/**
 * BETTER - Variable declaration outside loop with default
 * 
 * Declare variables before loops and initialize with defaults.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 03 - Naming Conventions Conventions
 * Section: Variables & Functions
 */

var i = 12;
var howMany = 0; // Initialize with default value

while (i < 10) {
    howMany = i + 42;
    i++;
}

console.log(howMany); // Works correctly
