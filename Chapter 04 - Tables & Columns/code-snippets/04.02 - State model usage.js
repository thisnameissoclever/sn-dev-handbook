/**
 * Using the State model Script Include
 * 
 * Access state values by name instead of magic numbers.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 04 - Tables & Columns & Columns
 * Section: The State field
 */

var currentState = parseInt(current.getValue('state'));
if (currentState === new MyTaskStates().ON_HOLD ||
    currentState === new MyTaskStates().PENDING) {
    //do something when task is on hold
}
