/**
 * Pass-by-REFERENCE example with objects
 * 
 * When passing an object into a function, you pass a REFERENCE to the same object.
 * Modifications inside the function WILL affect the original object.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Pass-by-reference
 */

var me = {
    name: 'Tim',
    age: 30,
    coolness: 'Extreme to the max'
};

changeCoolness(me);
console.log('I\'m this cool: ' + me.coolness); // Prints "Total doofus"!

function changeCoolness(person) {
    var actualCoolnessLevel = 'Total doofus';
    person.coolness = actualCoolnessLevel;
    // This DOES affect the original object because both variables
    // reference the SAME object in memory
}
