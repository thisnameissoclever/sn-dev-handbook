/**
 * Improved query with setLimit and validation - BETTER
 * 
 * Uses setLimit(2) with validation to check if multiple records exist.
 * Much more efficient and provides useful error logging.
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
    grTask.setLimit(2); // Only fetch up to 2 records
    grTask.query();
    if (grTask.next()) { // Changed from while to if
        ticketNumber = grTask.getValue('number');
        if (grTask.hasNext()) {
            //In our system, users should
            // only have one open task!
            gs.error(
                'User with sys_id ' + userSysID +
                ' has more than one open ticket!'
            );
        }
    }
    return ticketNumber;
}
