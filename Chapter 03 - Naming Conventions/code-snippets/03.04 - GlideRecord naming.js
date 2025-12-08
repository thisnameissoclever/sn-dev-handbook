/**
 * GlideRecord variable naming
 * 
 * GlideRecord variables should begin with "gr" and indicate the table
 * and optionally something about the query. Keep names singular.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 03 - Naming Conventions Conventions
 * Section: GlideRecords
 */

var grOpenIncident = new GlideRecord('incident');
grOpenIncident.addActiveQuery(); //Get only open Incidents
grOpenIncident.query();
//etc...
