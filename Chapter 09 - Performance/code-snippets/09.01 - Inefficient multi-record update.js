/**
 * Inefficient multi-record update - DO NOT DO THIS
 * 
 * Looping through records and calling .update() on each is inefficient.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 09 - Performance
 * Section: Multi-record operations
 */

var grStaleIncident = new GlideRecord('incident');
grStaleIncident.addEncodedQuery('active=true^state=2^sys_updated_onRELATIVELE@dayofweek@ago@30');
grStaleIncident.query();
while (grStaleIncident.next()) {
    //state 7 is 'Closed'
    grStaleIncident.setValue('state', '7');
    grStaleIncident.update(); // Inefficient! Creates DB round-trip for EACH record
}
