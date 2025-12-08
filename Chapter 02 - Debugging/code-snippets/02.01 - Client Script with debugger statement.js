/**
 * Client Script with debugger statement for debugging
 * 
 * Adding "debugger;" to your client-side code will halt execution
 * when the browser's dev tools (F12) are open, allowing you to
 * inspect variables and step through code.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 02 - Debugging
 * Section: Client-side debugging
 */

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var assigneeMgrID = g_form.getValue('manager');
    var watchList = g_form.getValue('watch_list');
    debugger; // Execution will pause here when dev tools are open
    
    //If watch list has anything in it, split it into an array;
    // otherwise, replace with a blank array.
    watchList = (watchList ? watchList.split(',') : []);

    //If manager is empty or already on watch list, halt and do nothing.
    if (!assigneeMgrID || watchList.indexOf(assigneeMgrID) >= 0) {
        return;
    }

    watchList.push(assigneeMgrID);
    //Add manager to watch list array
    g_form.setValue('watch_list', watchList.join(','));
    //update watch list field
}
