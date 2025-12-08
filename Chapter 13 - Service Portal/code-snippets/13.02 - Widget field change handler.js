/**
 * Service Portal widget field change handler
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 13 - Service Portal
 * Section: Widgets & the catalog
 */

$rootScope.$on("field.change", function(evt, parms) {
    if (parms.field.variable_name = 'variable_name') {
        //Do something here.
        //Access the new value with parms.newValue
    }
});
