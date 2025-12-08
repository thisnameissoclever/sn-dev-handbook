/**
 * Simple field value operation in script
 * 
 * This executes in less than a millisecond.
 * The equivalent in Flow Designer takes hundreds/thousands of ms
 * due to JSON parsing, Data Pill resolution, and engine overhead.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 10 - Flow Designer
 * Section: Flow execution overhead
 */

var shortDesc = current.getValue('short_description');
current.setValue(
    'description',
    shortDesc
);
