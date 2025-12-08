/**
 * Variable naming conventions example
 * 
 * Shows best practices for naming variables, functions, classes, and constants.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 03 - Naming Conventions Conventions
 * Section: Variables
 */

// Constants should be ALL_UPPERCASE
var MYCUSTOMTABLEQUERY = 'u_active=true^sys_updated_onONLast 30days@javascript:gs.beginningOfLast30Days()@javascript:gs.endOfLast30Days()';

// Regular variables and functions use camelCase
var assigneeSysID = getAssigneeSysID('Johnny B Developer');

function getAssigneeSysID(assigneeName) {
    var assigneeUtils;
    gs.debug('Got argument: "' + assigneeName + '".', 'exampleArgument');
    
    // GlideRecord variables should begin with "gr"
    var grUser = new GlideRecord('sys_user');
    
    //If user is found
    if (grUser.get('name', assigneeName)) {
        // Class names use TitleCase (e.g., AssigneeUtils)
        assigneeUtils = new AssigneeUtils();
        //Check if the user is a valid assignee
        if (assigneeUtils.checkIfValidAssignee(grUser)) {
            return grUser.getUniqueValue();
        }
    }
    
    //If user cannot be found, or not valid assignee, return false
    return false;
}
