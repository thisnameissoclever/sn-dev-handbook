/**
 * Defensive error handling with prevention
 * 
 * Check if an API exists before using it, but still use try/catch as backup.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 07 - Testing
 * Section: Errors
 */

if (typeof gel !== 'undefined') {
    try {
        var priorityElement = gel("incident.priority");
        setPriorityBackgroundColor(priorityElement);
    } catch(ex) {
        console.warn('Unable to get priority element or set element color. Using alternative handling');
        alternateIndicatePriority('some message'); //optional
    }
} else {
    alternateIndicatePriority('some other message');
}
