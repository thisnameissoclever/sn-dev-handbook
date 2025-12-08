/**
 * Pass-by-VALUE example with primitives
 * 
 * When passing a primitive (string, number, boolean) into a function,
 * a COPY of the value is created. Modifications inside the function
 * do NOT affect the original variable.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Pass-by-reference
 */

var coolness = 'Extreme to the max';
changeCoolness(coolness);
console.log(coolness); // Still prints "Extreme to the max"

function changeCoolness(coolness) {
    var actualCoolnessLevel = 'Total doofus';
    coolness = actualCoolnessLevel;
    // This change does NOT affect the original variable
}
