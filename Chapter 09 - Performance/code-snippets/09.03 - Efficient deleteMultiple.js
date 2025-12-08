/**
 * Efficient multi-record delete using deleteMultiple()
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 09 - Performance
 * Section: Multi-record operations
 */

var grInc = new GlideRecord('incident');
grInc.addEncodedQuery(someQuery);
grInc.deleteMultiple(); // Deletes all matching records in one DB operation
