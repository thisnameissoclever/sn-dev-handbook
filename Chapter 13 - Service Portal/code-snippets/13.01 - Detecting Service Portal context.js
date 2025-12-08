/**
 * Detecting Service Portal vs CMS context
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 13 - Service Portal
 * Section: Client scripts
 */

var inPortal = !document;
if (inPortal) {
    doSomethingPortal();
} else {
    doSomethingCMS();
}
//Define functions below...
