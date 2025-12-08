/**
 * Efficient multi-record update using updateMultiple() - BETTER
 * 
 * Uses updateMultiple() to batch the operation in a single DB transaction.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 09 - Performance
 * Section: Multi-record operations
 */

var grStaleIncident = new GlideRecord('incident');
grStaleIncident.addEncodedQuery('active=true^state=2^sys_updated_onRELATIVELE@dayofweek@ago@30');
//state 7 is 'Closed'
grStaleIncident.setValue('state', '7');
grStaleIncident.updateMultiple(); // Much more efficient!
