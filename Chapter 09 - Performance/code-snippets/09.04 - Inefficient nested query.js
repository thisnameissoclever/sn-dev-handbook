/**
 * Inefficient nested query - DO NOT DO THIS
 * 
 * Running a query inside a while loop results in N+1 queries.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 09 - Performance
 * Section: Nested queries
 */

var grUser;
var grIncident = new GlideRecord('incident');
grIncident.addEncodedQuery('some_query'); //include a query param for 'assigned_to not blank'
grIncident.query();
while (grIncident.next()) {
    grUser = new GlideRecord('sys_user'); // BAD: Separate query for EACH incident!
    if (grUser.get(grIncident.getValue('assigned_to'))) {
        //do something with the user
    }
}
// If 10,000 incidents are found, this creates 10,001 queries!
