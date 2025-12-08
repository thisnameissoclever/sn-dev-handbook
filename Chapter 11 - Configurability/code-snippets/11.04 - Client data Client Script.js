/**
 * Accessing client data from a Client Script
 * 
 * Client data set via session variables persists across page loads.
 * Use g_user.getClientData() to retrieve it.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 11 - Configurability
 * Section: Session variables & client data
 */

function onLoad() {
    //Hoist variable declarations
    var isvalidCategory, lastSelectedCategory;
    //Prevent script from running unless we're on the "new record" form.
    if (!g_form.isNewRecord()) {
        return;
    }
    lastSelectedCategory = g_user.getClientData(
        'last_selected_category'
    );
    //Halt if last selected category not set.
    if (!lastSelectedCategory) {
        return;
    }
    //Determine if last selected category is a valid.
    //Cast to boolean with !!.
    isvalidCategory = !!g_form.getOption(
        'category',
        lastSelectedCategory
    );
    if (isvalidCategory) {
        g_form.setValue('category', lastSelectedCategory);
    }
}
