/**
 * Example of a PURE function - RECOMMENDED
 * 
 * By passing myName in as a parameter, this function is much easier
 * to read, update, and repurpose. It doesn't rely on any external state.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Pure functions
 */
function sayHello(myName) {
    alert('Hello, ' + myName + '!');
}
