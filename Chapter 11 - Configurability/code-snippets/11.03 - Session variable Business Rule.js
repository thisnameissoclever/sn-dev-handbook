/**
 * Setting a session variable from a Business Rule
 * 
 * Session variables persist across page loads and become
 * available as client data on subsequent pages.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 11 - Configurability
 * Section: Session variables & client data
 */

(function executeRule(current, previous /*null when async*/) {

    var lastSelectedCategory = current.getValue('category');
    gs.getSession().putClientData(
        'last_selected_category',
        lastSelectedCategory
    );

})(current, previous);
