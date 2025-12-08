/**
 * State model Script Include
 * 
 * A helper class to centralize state values for a custom task table.
 * Similar to OOB IncidentState/IncidentStateSNC.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 04 - Tables & Columns & Columns
 * Section: The State field
 */

var MyTaskStates = Class.create();
MyTaskStates.prototype = {
    initialize: function() {
        this.DRAFT = -1;
        this.NEW = 1;
        this.WORK_IN_PROGRESS = 2;
        this.ON_HOLD = 3;
        this.PENDING = 4;
        this.COMPLETE = 7;
        this.CANCELLED = 8;
    },

    type: 'MyTaskStates'
};
