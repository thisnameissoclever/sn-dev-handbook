/**
 * Self-documenting code: Abstracting conditionals into functions
 * 
 * Complex conditionals become clearer when moved to named functions.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 08 - Code Documentation
 * Section: Self-documenting code
 */

// BEFORE: Unclear conditional
if (!g_form.getValue('needs_repair') && !g_form.getValue('needs_replacement')) {
    g_form.showFieldMsg(
        'additional_info',
        'Please clarify what action is required',
        'info',
        false
    );
}

// AFTER: Self-documenting with function
if (!needsRepairOrReplacement()) {
    g_form.showFieldMsg(
        'additional_info',
        'Please clarify what action is required',
        'info',
        false
    );
}

function needsRepairOrReplacement() {
    return (
        g_form.getValue('needs_repair') !== '' ||
        g_form.getValue('needs_replacement') !== ''
    );
}

// ALTERNATIVE: Use a descriptive variable
var needsRepairOrReplacement = (g_form.getValue('needs_repair') !== '' || g_form.getValue('needs_replacement') !== '');

if (!needsRepairOrReplacement) {
    g_form.showFieldMsg('additional_info', 'Please clarify what action is required', 'info', false);
}
