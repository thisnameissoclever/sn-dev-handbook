/**
 * Problematic query pattern - DO NOT DO THIS
 * 
 * This code assumes only one record exists but doesn't enforce it.
 * The while loop will return the LAST matching record, which is
 * unpredictable and inefficient.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 02 - Debugging
 * Section: Limiting query results
 */

function getOpenTicketNumberByUser(userSysID) {
    var ticketNumber;
    var grTask = new GlideRecord('task');
    if (!userSysID) {
        throw new Error(
            'Invalid user sys_id passed in.'
        );
    }
    grTask.addActiveQuery();
    grTask.addQuery('opened_by', userSysID);
    grTask.query();
    while (grTask.next()) { // Problem: loops through ALL matching records
        ticketNumber = grTask.getValue('number');
    }
    return ticketNumber; // Returns the LAST record found - unpredictable!
}
