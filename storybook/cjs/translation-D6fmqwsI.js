'use strict';

const ATUI$1 = {
	CANCEL: "Cancel",
	APPLY: "Apply",
	DELETE: "Delete",
	RESET: "Reset",
	CLEAR_SELECTION: "Clear selection",
	CLEAR_ALL: "Clear All",
	SETTINGS: "Settings",
	ENABLED: "Enabled",
	DISABLED: "Disabled",
	SEARCH: "Search",
	ON: "On",
	OFF: "Off",
	NO_ITEMS_FOUND: "No Items Found",
	NO_RESULTS_FOUND: "No Results Found",
	NO_OPTIONS_AVAILABLE: "No Options Available",
	NO_PERMISSION_EDIT_SETTING: "You must be an administrator to change the settings",
	TABLE: {
		LOADING_DATA: "Loading data...",
		NO_DATA: "No Data",
		SEARCH_BY_KEYWORD: "Search by keyword",
		EXPORT_TO_FILE: "Export to file",
		EXPORT_AS_CSV: "Export as CSV",
		EXPORT_AS_PDF: "Export as PDF",
		MANAGE_COLUMNS: "Manage Columns",
		FILTER_DATA: "Filter data",
		EXCLUDES_COLUMNS: "Excludes: ",
		NO_GLOBAL_SEARCH_COLUMNS: "Cannot search on the column(s) displayed"
	},
	TIME: {
		SELECT_ABSOLUTE_TIME: "Select Absolute time",
		SELECT_RELATIVE_TIME: "Select relative time",
		FROM_DATE: "Start Date",
		TO_DATE: "End Date",
		FROM_TIME: "Start Time",
		TO_TIME: "End Time",
		COMMONLY_USED: "Commonly Used",
		SET_END_DATE_AND_TIME_TO_NOW: "Set end date to now",
		SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION: "On every refresh this time will be set to the time of the refresh.",
		SECONDS: "Second(s)",
		MINUTES: "Minute(s)",
		HOURS: "Hour(s)",
		DAYS: "Day(s)",
		WEEKS: "Week(s)",
		MONTHS: "Month(s)",
		YEARS: "Year(s)",
		DAY: "Day",
		WEEK: "Week",
		MONTH: "Month",
		YEAR: "Year",
		SELECT_TIME_PERIOD: "Select time period",
		UPDATE_RESULTS: "Update results",
		AGO: "ago",
		LAST: "Last",
		DURATION_SHORT: {
			DAY: "day",
			DAYS: "days",
			HOUR: "hr",
			HOURS: "hrs",
			MIN: "min",
			MINS: "mins"
		},
		VALIDATION: {
			NON_ZERO: "Please enter a number larger than 0",
			MAX_NUMBER: "Please enter a number lower than {lowerThanValue}",
			MIN_NUMBER: "Please enter a number larger than {min}",
			MIN_DATE: "Date must be after {minDate}",
			MAX_LENGTH: "Maximum length is {num} characters",
			MIN_LENGTH: "Minimum length is {num} {num, plural, =1{character} other{characters}}",
			INVALID_CHARACTERS_SHORTTEXT: "Valid characters are A-Z a-z 0-9 _ -",
			INVALID_CHARACTERS_LONGTEXT: "Valid characters are A-Z a-z 0-9 . _ -",
			MINIMUM_TIME_BETWEEN_DATES: "A minimum of {num} {units} is required",
			DATE_REQUIRED: "Date is required",
			TIME_REQUIRED: "Time is required",
			PLEASE_ENTER_TIME: "Please select a time period",
			INTEGER_ONLY_ERROR: "Please enter integer only",
			FROM_MUST_BE_BEFORE_TO: "From date must be earlier than to date"
		},
		ALL: "All Time",
		ALL_TIME_LABEL: "All Time (No filter applied)"
	},
	PROMPT: {
		NO_MESSAGES_YET: "No messages yet",
		START_CONVERSATION: "Start a conversation",
		START_CONVERSATION_DESCRIPTION: "Send a message to begin chatting with the AI assistant",
		AI_ASSISTANT: "AI Assistant",
		ASSISTANT: "Assistant",
		USER: "user",
		TYPE_MESSAGE_PLACEHOLDER: "Type your message here...",
		TYPING: "Typing...",
		CLEAR: "Clear",
		SEND: "Send",
		NEW_THREAD: "New Thread",
		MESSAGE_TOO_LONG: "Message is too long ({current}/{max} characters)",
		ERROR_GENERATING_RESPONSE: "An error occurred while generating the response.",
		HELPFUL: "Helpful",
		NOT_HELPFUL: "Not Helpful",
		EDIT: "Edit",
		RETRY: "Retry",
		COPY: "Copy",
		COPIED: "Copied",
		VOTE_UP: "Vote Up",
		VOTE_DOWN: "Vote Down",
		ERROR_MESSAGE: "Message content has exceeded the maximum length, please shorten your message or split it into multiple messages."
	}
};
var en = {
	ATUI: ATUI$1
};

const ATUI = {
	CANCEL: "キャンセル",
	APPLY: "適用",
	DELETE: "削除",
	RESET: "リセット",
	CLEAR_SELECTION: "選択解除",
	CLEAR_ALL: "すべて消去",
	SETTINGS: "設定",
	ENABLED: "有効",
	DISABLED: "無効",
	SEARCH: "検索",
	ON: "オン",
	OFF: "オフ",
	NO_ITEMS_FOUND: "項目がありません。",
	NO_RESULTS_FOUND: "結果がありません。",
	NO_PERMISSION_EDIT_SETTING: "管理者アカウントでのみ設定を変更できます。",
	TABLE: {
		LOADING_DATA: "データを読み込み中...",
		NO_DATA: "データなし",
		SEARCH_BY_KEYWORD: "キーワードで検索",
		EXPORT_TO_FILE: "ファイルに出力",
		EXPORT_AS_CSV: "CSV 出力",
		EXPORT_AS_PDF: "PDF 出力",
		MANAGE_COLUMNS: "列を管理",
		FILTER_DATA: "フィルター",
		EXCLUDES_COLUMNS: "以下を除く: ",
		NO_GLOBAL_SEARCH_COLUMNS: "表示中の列では検索ができません。"
	},
	TIME: {
		SELECT_ABSOLUTE_TIME: "日付を指定",
		SELECT_RELATIVE_TIME: "相対的な期間を指定",
		FROM_DATE: "開始日",
		TO_DATE: "終了日",
		FROM_TIME: "開始",
		TO_TIME: "終了",
		COMMONLY_USED: "一般的に使用",
		SET_END_DATE_AND_TIME_TO_NOW: "終了日を現在に指定",
		SET_END_DATE_AND_TIME_TO_NOW_DESCRIPTION: "更新のたびにこの時刻を更新時刻に設定します。",
		SECONDS: "秒",
		MINUTES: "分",
		HOURS: "時間",
		DAYS: "日",
		WEEKS: "週間",
		MONTHS: "か月",
		YEARS: "年",
		DAY: "日",
		WEEK: "週間",
		MONTH: "か月",
		YEAR: "年",
		SELECT_TIME_PERIOD: "期間を選択",
		UPDATE_RESULTS: "結果を更新",
		AGO: "前",
		LAST: "直近",
		DURATION_SHORT: {
			DAY: "日",
			DAYS: "日",
			HOUR: "時間",
			HOURS: "時間",
			MIN: "分",
			MINS: "分"
		},
		VALIDATION: {
			NON_ZERO: "0 より大きい数値を入力してください。",
			MAX_NUMBER: "{lowerThanValue} より小さい数値を入力してください。",
			MIN_NUMBER: "{min} {units} 以上入力してください。",
			MIN_DATE: "{minDate} 以降の日付を指定してください。",
			MAX_LENGTH: "最大 {num} 文字以下で指定してください。",
			MIN_LENGTH: "最小 {num} 文字以上で指定してください。",
			INVALID_CHARACTERS_SHORTTEXT: "半角英数字（大文字・小文字）、ハイフン（-）、アンダースコア（_）のみ使用できます。",
			INVALID_CHARACTERS_LONGTEXT: "半角英数字（大文字・小文字）、ピリオド（.）、ハイフン（-）、アンダースコア（_）のみ使用できます。",
			MINIMUM_TIME_BETWEEN_DATES: "最低 {num} {units}の期間を指定してください。",
			DATE_REQUIRED: "日付を指定してください。",
			TIME_REQUIRED: "時刻を指定してください。",
			PLEASE_ENTER_TIME: "期間を選択してください。",
			INTEGER_ONLY_ERROR: "整数のみで指定できます。",
			FROM_MUST_BE_BEFORE_TO: "開始日は終了日より前の日付にしてください。"
		},
		ALL: "全期間",
		ALL_TIME_LABEL: "全期間（フィルターなし）"
	},
	PROMPT: {
		NO_MESSAGES_YET: "まだメッセージがありません",
		START_CONVERSATION: "会話を開始",
		START_CONVERSATION_DESCRIPTION: "AIアシスタントとのチャットを開始するためにメッセージを送信してください",
		AI_ASSISTANT: "AIアシスタント",
		ASSISTANT: "アシスタント",
		USER: "user",
		TYPE_MESSAGE_PLACEHOLDER: "ここにメッセージを入力してください...",
		TYPING: "入力中...",
		CLEAR: "クリア",
		SEND: "送信",
		NEW_THREAD: "新しいスレッド",
		MESSAGE_TOO_LONG: "メッセージが長すぎます（{current}/{max} 文字）",
		ERROR_GENERATING_RESPONSE: "応答の生成中にエラーが発生しました。",
		HELPFUL: "役に立つ",
		NOT_HELPFUL: "役に立たない",
		EDIT: "編集",
		RETRY: "再試行",
		COPY: "コピー",
		COPIED: "コピー済み",
		VOTE_UP: "高評価",
		VOTE_DOWN: "低評価",
		ERROR_MESSAGE: "メッセージの内容が最大長を超えています。メッセージを短くするか、複数のメッセージに分割してください。"
	}
};
var ja = {
	ATUI: ATUI
};

const bundledTranslations = { en, ja };
function getLocale(element) {
    const closestElement = element.closest('[lang]');
    return closestElement ? closestElement.lang : 'en';
}
async function fetchTranslations(element) {
    const locale = getLocale(element);
    return bundledTranslations[locale];
}

exports.fetchTranslations = fetchTranslations;
