/**
 * Getting journal field values
 * 
 * Journal fields (like work_notes) require special handling.
 * Use getJournalEntry() instead of getValue() or direct access.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 01 - Code & Coding Guidelines
 * Section: Getting and setting field values
 */

// Returns only the most recent journal entry
grInc.work_notes.getJournalEntry(1);

// Returns all journal entries, delimited by "\n\n"
grInc.work_notes.getJournalEntry(-1);
