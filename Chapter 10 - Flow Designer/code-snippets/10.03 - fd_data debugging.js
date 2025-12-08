/**
 * Debugging fd_data in Flow Designer Script steps
 * 
 * fd_data provides runtime context for Flow execution.
 * Always log it when exploring or debugging a Flow.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 10 - Flow Designer
 * Section: Using the fd_data object
 */

gs.info(JSON.stringify(fd_data));
