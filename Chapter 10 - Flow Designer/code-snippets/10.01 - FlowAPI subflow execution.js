/**
 * Triggering a Subflow from script using FlowAPI
 * 
 * Use sn_fd.FlowAPI to run subflows programmatically.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 10 - Flow Designer
 * Section: Subflows
 */

var inputs = {
    "some_input_name": "some input value",
    "some_input_name_2": "another input value"
};

//Get the Flow Runner
var flowResult = sn_fd.FlowAPI.getRunner()
    //Specify the subflow to run
    .subflow('global.test_subflow')
    //Run in foreground. Use inBackground() to run in background instead.
    .inForeground()
    //Pass inputs to the subflow, or an empty object if none are needed
    .withInputs(inputs)
    //Get the result of the subflow
    .run();

//Get the outputs from the Subflow. Note: Not available if run in background
var outputs = flowResult.getOutputs();
