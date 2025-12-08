/**
 * Query Business Rule with NULL value handling
 * 
 * When using != in queries, blank/NULL values are excluded by default.
 * Use addOrCondition with 'NULL' to include them.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 12 - Security
 * Section: Query Business Rules
 */

(function executeRule(current, previous /*null when async*/) {
    current.addQuery('u_material', '!=', 'Suede').addOrCondition('u_material', 'NULL');
})(current, previous);
