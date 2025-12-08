/**
 * User preference APIs
 * 
 * Set and get user preferences from client and server side.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 11 - Configurability
 * Section: User preferences
 */

// ============= SETTING USER PREFERENCES =============

// Client-side:
setPreference('preference_name', 'preference_value');

// Server-side:
gs.getUser().setPreference('pref_name', 'pref_value');


// ============= GETTING USER PREFERENCES =============

// Client-side (no default value parameter):
getPreference('preference_name');

// Server-side (with default value):
gs.getPreference('preference_name', 'default_value');
