/**
 * Efficient batched query pattern - BETTER
 * 
 * Build an array of IDs first, then do a single query with IN operator.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 09 - Performance
 * Section: Nested queries
 */

var grUser, assignIDs = [];
var grInc = new GlideRecord('incident');
grInc.addEncodedQuery('some_query^asigned_to!=NULL');
grInc.query();
while (grInc.next()) {
    //This condition keeps the array values unique
    if (assignIDs.indexOf(grInc.getValue('assigned_to') < 0)) {
        assignIDs.push(grInc.getValue('assigned_to'));
    }
}

grUser = new GlideRecord('sys_user');
grUser.addQuery('sys_id', 'IN', assignIDs);
/*Include any other query params here, such as if you
only want to return active users.*/
grUser.query();
while (grUser.next()) {
    //NOW do something with the assignee records
}
// Only 2 queries instead of 10,001!
