/**
 * Simple JavaScript ES5 constructor example
 * 
 * Constructors are functions called with the "new" keyword to create objects.
 * Note: Constructor names should always begin with a capital letter.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Writing DRY code
 */

function Person(name, age, coolness) {
    this.name = name;
    this.age = age;
    this.coolness = coolness;
}

// Usage:
var personMe = new Person('Tim', 30, 'Extreme to the max');
