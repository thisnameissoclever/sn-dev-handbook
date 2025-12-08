/**
 * Query Business Rule example
 * 
 * Restricts records from non-admin users by adding query conditions.
 * WARNING: Null/blank values behave unexpectedly with != queries!
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 12 - Security
 * Section: Query Business Rules
 */

//Only allow admins to see my blue suede shoes
if (!gs.hasRole('admin')) {
    current.addQuery('material', '!=', 'Suede');
}
// Note: This also hides records where material is blank!
