/**
 * DRY code using a constructor - BETTER
 * 
 * Uses a constructor to reduce repetitive property assignments.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Writing DRY code
 */

var i,
    grRecord,
    stateChangeDetails,
    stateChange;

//constructor
function StateChangeDetail(table, query, state) {
    this.table_name = table;
    this.encoded_query = query;
    this.state_value = state;
}

stateChangeDetails = [ //An array of StateChangeDetail objects
    new StateChangeDetail('incident', 'some_query', 3),
    new StateChangeDetail('problem', 'some_other_query', 4),
    new StateChangeDetail('change_request', 'third_query', 5)
];

for (i = 0; i < stateChangeDetails.length; i++) {
    stateChange = stateChangeDetails[i];
    grRecord = new GlideRecord(stateChange.table_name);
    grRecord.addEncodedQuery(stateChange.encoded_query);
    grRecord.query();

    while (grRecord.next()) {
        grRecord.setValue('state', stateChange.state_value); //set state to work in progress
        grRecord.update();
    }
}
