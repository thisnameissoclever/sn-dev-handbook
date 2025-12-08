/**
 * Example of NON-DRY (repetitive) code - DO NOT DO THIS
 * 
 * This code does the same thing multiple times with minor differences.
 * It's inefficient to write, hard to read, and prone to errors.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Writing DRY code
 */

var grIncident = new GlideRecord('incident');
var encodedQuery = 'some_encoded_query_here';
grIncident.addEncodedQuery(encodedQuery);
grIncident.query();
while (grIncident.next()) {
    grIncident.setValue('state', 3); //Set state to work in progress
    grIncident.update();
}

//lather, rinse, repeat
var grProblem = new GlideRecord('problem');
var encodedQuery = 'some_encoded_query_here';
grProblem.addEncodedQuery(encodedQuery);
grProblem.query();
while (grProblem.next()) {
    grProblem.setValue('state', 4); //set state to some other state
    grProblem.update();
}

//lather, rinse, repeat
var grChange = new GlideRecord('change_request');
var encodedQuery = 'some_encoded_query_here';
grChange.addEncodedQuery(encodedQuery);
grChange.query();
while (grChange.next()) {
    grChange.setValue('state', 5); //always specify what the integer corresponds to when setting state
    grChange.update();
}
//[and so on...]
