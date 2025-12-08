/**
 * Example of an IMPURE function - DO NOT DO THIS
 * 
 * This function uses, but does not declare, a variable called myName.
 * It requires that a global (or parent-scope) variable called myName
 * be declared elsewhere, and is therefore NOT a pure function.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Pure functions
 */
function sayHello() {
    alert('Hello, ' + myName + '!');
}
