/**
 * Basic try/catch error handling
 * 
 * Catch errors and handle them gracefully with alternative functionality.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 07 - Testing
 * Section: Errors
 */

try {
    var priorityElement = gel("incident.priority");
    setPriorityBackgroundColor(priorityElement);
} catch(ex) {
    console.warn('Unable to get priority element or set element color. Using alternative handling');
    alternateIndicatePriority(); //optional
}
