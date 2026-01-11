function getLocale(element) {
    const closestElement = element.closest('[lang]');
    return closestElement ? closestElement.lang : 'en';
}
async function fetchTranslation(locale) {
    const result = await (await fetch(`/translation/${locale}.json`)).json();
    return result;
}
export async function fetchTranslations(element) {
    const locale = getLocale(element);
    try {
        return await fetchTranslation(locale);
    }
    catch (e) {
        console.error(`File for language ${locale} not found. Reverting to fallback`, e);
        return fallback;
    }
}
const fallback = {
    ATUI: {
        CANCEL: 'Cancel',
        APPLY: 'Apply',
        DELETE: 'Delete',
        RESET: 'Reset',
        CLEAR_SELECTION: 'Clear selection',
        CLEAR_ALL: 'Clear All',
        SETTINGS: 'Settings',
        ENABLED: 'Enabled',
        DISABLED: 'Disabled',
        NO_ITEMS_FOUND: 'No Items Found',
        NO_RESULTS_FOUND: 'No Results Found',
        VISTA_USER_GUIDE: "Please see <a target='blank' href='https://www.alliedtelesis.com/nz/en/configure/vista-manager-ex-user-guide'>Vista Manager EX User Guide</a> for detailed documentation.",
        NO_PERMISSION_EDIT_SETTING: 'You must be an administrator to change the settings',
        TABLE: {
            LOADING_DATA: 'Loading data...',
            NO_DATA: 'No Data',
            SEARCH_BY_KEYWORD: 'Search by keyword',
            EXPORT_TO_FILE: 'Export to file',
            EXPORT_AS_CSV: 'Export as CSV',
            EXPORT_AS_PDF: 'Export as PDF',
            MANAGE_COLUMNS: 'Manage Columns',
            FILTER_DATA: 'Filter data',
            EXCLUDES_COLUMNS: 'Excludes: ',
            NO_GLOBAL_SEARCH_COLUMNS: 'Cannot search on the column(s) displayed',
        },
        TIME: {
            SELECT_ABSOLUTE_TIME: 'Select Absolute time',
            SELECT_RELATIVE_TIME: 'Select relative time',
            FROM_DATE: 'Start Date',
            TO_DATE: 'End Date',
            FROM_TIME: 'Start Time',
            TO_TIME: 'End Time',
            COMMONLY_USED: 'Commonly Used',
            SET_END_DATE_AND_TIME_TO_NOW: 'Set end date to now',
            SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION: 'On every refresh this time will be set to the time of the refresh.',
            SECONDS: 'Second(s)',
            MINUTES: 'Minute(s)',
            HOURS: 'Hour(s)',
            DAYS: 'Day(s)',
            WEEKS: 'Week(s)',
            MONTHS: 'Month(s)',
            YEARS: 'Year(s)',
            DAY: 'Day',
            WEEK: 'Week',
            MONTH: 'Month',
            YEAR: 'Year',
            SELECT_TIME_PERIOD: 'Select time period',
            UPDATE_RESULTS: 'Update results',
            AGO: 'ago',
            LAST: 'Last',
            DURATION_SHORT: {
                DAY: 'day',
                DAYS: 'days',
                HOUR: 'hr',
                HOURS: 'hrs',
                MIN: 'min',
                MINS: 'mins',
            },
            VALIDATION: {
                NON_ZERO: 'Please enter a number larger than 0',
                MAX_NUMBER: 'Please enter a number lower than {lowerThanValue}',
                MIN_NUMBER: 'Please enter a number larger than {min}',
                MIN_DATE: 'Date must be after {minDate}',
                MAX_LENGTH: 'Maximum length is {num} characters',
                MIN_LENGTH: 'Minimum length is {num} {num, plural, =1{character} other{characters}}',
                INVALID_CHARACTERS_SHORTTEXT: 'Valid characters are A-Z a-z 0-9 _ -',
                INVALID_CHARACTERS_LONGTEXT: 'Valid characters are A-Z a-z 0-9 . _ -',
                MINIMUM_TIME_BETWEEN_DATES: 'A minimum of {num} {units} is required',
                DATE_REQUIRED: 'Date is required',
                TIME_REQUIRED: 'Time is required',
                PLEASE_ENTER_TIME: 'Please select a time period',
                INTEGER_ONLY_ERROR: 'Please enter integer only',
            },
            ALL: 'All Time',
            ALL_TIME_LABEL: 'All Time (No filter applied)',
        },
        PROMPT: {
            NO_MESSAGES_YET: 'No messages yet',
            START_CONVERSATION: 'Start a conversation',
            START_CONVERSATION_DESCRIPTION: 'Send a message to begin chatting with the AI assistant',
            AI_ASSISTANT: 'AI Assistant',
            ASSISTANT: 'Assistant',
            TYPE_MESSAGE_PLACEHOLDER: 'Type your message here...',
            TYPING: 'Typing...',
            CLEAR: 'Clear',
            SEND: 'Send',
            NEW_THREAD: 'New Thread',
            MESSAGE_TOO_LONG: 'Message is too long ({current}/{max} characters)',
            ERROR_GENERATING_RESPONSE: 'An error occurred while generating the response.',
        },
    },
};
//# sourceMappingURL=translation.js.map
