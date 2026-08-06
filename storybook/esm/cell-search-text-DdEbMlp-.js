import { T as TimeDatePresentationUtil } from './time-date-presentation.util-H5gcGi8Y.js';
import { D as DateFormat } from './date-C3LwY5aR.js';
import { p as parseCellDateTime, g as getRelativeTimeLabel } from './relative-time-label-CLVJlEqK.js';

/**
 * NEW AtAvailableCells also need to be added to getFrameworkComponents()
 * so that ag-grid can import and render the cell components
 */
var AvailableCells;
(function (AvailableCells) {
    AvailableCells["CHECKBOX_CELL"] = "AtCheckboxCell";
    AvailableCells["TEXT_CELL"] = "AtTextCell";
    AvailableCells["TEXT_STATUS_CELL"] = "AtTextStatusCell";
    AvailableCells["HEALTH_DOT_CELL"] = "AtHealthDotCell";
    AvailableCells["RELATIVE_DATETIME_CELL"] = "AtRelativeDateTimeCell";
    AvailableCells["TEXT_WITH_BADGE_CELL"] = "AtTextBadgeCell";
    AvailableCells["TEXT_WITH_ICON_CELL"] = "AtTextIconCell";
    AvailableCells["TITLE_SUBTITLE_CELL"] = "AtTitleSubtitleCell";
    AvailableCells["TITLE_SUBTITLE_DATE_CELL"] = "AtTitleSubtitleDateCell";
    AvailableCells["EDIT_TEXT_CELL"] = "AtEditTextCell";
    AvailableCells["CHIP_LIST_CELL"] = "AtChipListCell";
    AvailableCells["TOGGLE_CELL"] = "AtToggleCell";
    AvailableCells["MULTI_BTN_CELL"] = "AtMultiBtnCell";
    AvailableCells["COLOR_STATUS_CELL"] = "AtColorStatusCell";
    AvailableCells["TEXT_WITH_IMAGE_CELL"] = "AtTextImageCell";
    AvailableCells["MENU_CELL"] = "AtMenuCell";
    AvailableCells["PROGRESS_BAR_CELL"] = "AtProgressBarCell";
})(AvailableCells || (AvailableCells = {}));
var AvailableHeaders;
(function (AvailableHeaders) {
    AvailableHeaders["CHECKBOX_HEADER"] = "checkboxHeader";
    AvailableHeaders["ICON_HEADER"] = "iconHeader";
})(AvailableHeaders || (AvailableHeaders = {}));

const NO_VISIBLE_TEXT = () => '';
function toFiniteNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
}
function resolveProgressPercentage(value, data, params) {
    if (params.percentage) {
        return toFiniteNumber(params.percentage(data));
    }
    if (value?.percentage !== undefined) {
        return toFiniteNumber(value.percentage);
    }
    const used = params.used
        ? toFiniteNumber(params.used(data))
        : toFiniteNumber(value?.used);
    const total = params.total
        ? toFiniteNumber(params.total(data))
        : toFiniteNumber(value?.total);
    return total > 0 ? (used / total) * 100 : 0;
}
function join(...parts) {
    return parts
        .map((part) => stringify(part))
        .filter((part) => part.length > 0)
        .join(' ');
}
function stringify(value) {
    if (value === null || value === undefined) {
        return '';
    }
    if (Array.isArray(value)) {
        return value
            .map((entry) => stringify(entry))
            .filter((entry) => entry.length > 0)
            .join(' ');
    }
    if (value instanceof Date) {
        return TimeDatePresentationUtil.getFormattedDate(value);
    }
    if (typeof value === 'object') {
        return '';
    }
    return String(value);
}
/**
 * Each entry mirrors the corresponding renderer's own text derivation. Renderers that show
 * no text return an empty string so they contribute nothing to search.
 */
const DERIVERS = {
    [AvailableCells.TEXT_CELL]: (value, data, params) => {
        if (params.textTransform) {
            return stringify(params.textTransform(data, value));
        }
        if (Array.isArray(value)) {
            return value.filter((entry) => !!entry).join(',');
        }
        return stringify(value);
    },
    [AvailableCells.TEXT_STATUS_CELL]: (value, _data, params) => {
        if (!value) {
            return '';
        }
        return stringify(params.mapValueToText ? params.mapValueToText(value) : value);
    },
    [AvailableCells.TEXT_WITH_BADGE_CELL]: (value, data, params) => join(params.text ? params.text(data) : value?.text, params.badgeText ? params.badgeText(data) : value?.badgeText),
    [AvailableCells.TITLE_SUBTITLE_CELL]: (_value, data, params) => join(params.title ? params.title(data) : data?.titleSubtitleCell?.title, params.subtitle
        ? params.subtitle(data)
        : data?.titleSubtitleCell?.subtitle),
    [AvailableCells.TITLE_SUBTITLE_DATE_CELL]: (value) => {
        const date = typeof value === 'string' ? new Date(value) : value;
        if (!date) {
            return '';
        }
        return join(TimeDatePresentationUtil.getFormattedDate(date, DateFormat.HOURS_MINUTES_SECONDS), TimeDatePresentationUtil.getFormattedDate(date, DateFormat.YEAR_MONTH_DAY));
    },
    /**
     * Mirrors the cell, which renders the relative prose above the source datetime in
     * parentheses, so both "3 days ago" and the raw timestamp match.
     *
     * The label is derived from the current time, so a term like "3 days ago" matches only
     * while it remains true — search results here move with the clock by nature. The text is
     * computed per filter pass, so it stays current unless a consumer opts into AG Grid's
     * `cacheQuickFilter` (off by default), which freezes it until
     * `api.resetQuickFilterCache()` is called.
     */
    [AvailableCells.RELATIVE_DATETIME_CELL]: (value, data, params) => {
        const source = params.getDateTime ? params.getDateTime(data) : value;
        const parsed = parseCellDateTime(source);
        if (!parsed) {
            return stringify(source);
        }
        return join(getRelativeTimeLabel(parsed), source);
    },
    [AvailableCells.CHIP_LIST_CELL]: (_value, data, params) => params.chips ? join(params.chips(data)) : '',
    [AvailableCells.TEXT_WITH_ICON_CELL]: (value, data, params) => stringify(params.text ? params.text(data) : value),
    [AvailableCells.TEXT_WITH_IMAGE_CELL]: (value, data, params) => stringify(params.text ? params.text(data) : value),
    [AvailableCells.PROGRESS_BAR_CELL]: (value, data, params) => {
        if (params.label) {
            return stringify(params.label(data));
        }
        if (params.hideLabel) {
            return '';
        }
        return `${Math.round(resolveProgressPercentage(value, data, params))}%`;
    },
    [AvailableCells.EDIT_TEXT_CELL]: (value) => stringify(value),
    [AvailableCells.TOGGLE_CELL]: (_value, data, params) => stringify(params.label ? params.label(data) : data?.toggleCell?.label),
    [AvailableCells.MULTI_BTN_CELL]: (_value, _data, params) => {
        const buttons = typeof params.buttons === 'function' ? [] : params.buttons;
        return Array.isArray(buttons)
            ? join(buttons.map((button) => button?.value))
            : '';
    },
    [AvailableCells.COLOR_STATUS_CELL]: NO_VISIBLE_TEXT,
    [AvailableCells.HEALTH_DOT_CELL]: NO_VISIBLE_TEXT,
    [AvailableCells.CHECKBOX_CELL]: NO_VISIBLE_TEXT,
    [AvailableCells.MENU_CELL]: NO_VISIBLE_TEXT,
};
/**
 * Returns the searchable text for a cell: the renderer's displayed text plus the raw value.
 *
 * The two are combined rather than substituted so this is strictly additive - a column that
 * was searchable by its underlying code or ISO date stays searchable by it, and becomes
 * searchable by what the user can actually see. Object and array values contribute nothing,
 * which is what stops them matching "[object Object]".
 */
function resolveCellSearchText(colDef, value, data) {
    const rawText = stringify(value);
    const renderer = colDef?.cellRenderer;
    if (typeof renderer !== 'string') {
        return rawText;
    }
    const derive = DERIVERS[renderer];
    if (!derive) {
        return rawText;
    }
    let displayedText;
    try {
        displayedText = derive(value, data, colDef.cellRendererParams ?? {});
    }
    catch {
        return rawText;
    }
    if (displayedText === rawText) {
        return rawText;
    }
    return join(displayedText, rawText);
}

export { AvailableCells as A, AvailableHeaders as a, resolveCellSearchText as r };
