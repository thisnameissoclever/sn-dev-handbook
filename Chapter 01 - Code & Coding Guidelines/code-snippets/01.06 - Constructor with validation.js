/**
 * Constructor with validation and default values
 * 
 * Demonstrates setting defaults, casting types, and using an IIFE
 * (Immediately Invoked Function Expression) for validation.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Writing DRY code
 */

function Person(name, age, coolness) {
    this.name = name ? name : 'Bob'; //Default to Bob if falsey value was passed in
    this.age = Number(age); //Cast age to a number
    this.coolness = function(coolness) { //self-executing function to validate coolness value
        var actualCoolness = 'Total doof';
        if (coolness === actualCoolness) {
            return coolness;
        } else {
            return actualCoolness;
        }
    }(); //Adding "()" makes it an IIFE, which executes and returns the value
}

// Usage:
var personMe = new Person('', '30', 'Extreme to the max');
