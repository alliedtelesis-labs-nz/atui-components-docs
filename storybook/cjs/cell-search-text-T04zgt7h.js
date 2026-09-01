'use strict';

var index = require('./index-Do5plV20.js');
var timeDatePresentation_util = require('./time-date-presentation.util-CBDuvYdu.js');
var date = require('./date-DDRmOnS1.js');
var relativeTimeLabel = require('./relative-time-label-Cl44YHvZ.js');

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
        return timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(value);
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
    [index.AvailableCells.TEXT_CELL]: (value, data, params) => {
        if (params.textTransform) {
            return stringify(params.textTransform(data, value));
        }
        if (Array.isArray(value)) {
            return value.filter((entry) => !!entry).join(',');
        }
        return stringify(value);
    },
    [index.AvailableCells.TEXT_STATUS_CELL]: (value, _data, params) => {
        if (!value) {
            return '';
        }
        return stringify(params.mapValueToText ? params.mapValueToText(value) : value);
    },
    [index.AvailableCells.TEXT_WITH_BADGE_CELL]: (value, data, params) => join(params.text ? params.text(data) : value?.text, params.badgeText ? params.badgeText(data) : value?.badgeText),
    [index.AvailableCells.TITLE_SUBTITLE_CELL]: (_value, data, params) => join(params.title ? params.title(data) : data?.titleSubtitleCell?.title, params.subtitle
        ? params.subtitle(data)
        : data?.titleSubtitleCell?.subtitle),
    [index.AvailableCells.TITLE_SUBTITLE_DATE_CELL]: (value) => {
        const date$1 = typeof value === 'string' ? new Date(value) : value;
        if (!date$1) {
            return '';
        }
        return join(timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(date$1, date.DateFormat.HOURS_MINUTES_SECONDS), timeDatePresentation_util.TimeDatePresentationUtil.getFormattedDate(date$1, date.DateFormat.YEAR_MONTH_DAY));
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
    [index.AvailableCells.RELATIVE_DATETIME_CELL]: (value, data, params) => {
        const source = params.getDateTime ? params.getDateTime(data) : value;
        const parsed = relativeTimeLabel.parseCellDateTime(source);
        if (!parsed) {
            return stringify(source);
        }
        return join(relativeTimeLabel.getRelativeTimeLabel(parsed), source);
    },
    [index.AvailableCells.CHIP_LIST_CELL]: (_value, data, params) => params.chips ? join(params.chips(data)) : '',
    [index.AvailableCells.TEXT_WITH_ICON_CELL]: (value, data, params) => stringify(params.text ? params.text(data) : value),
    [index.AvailableCells.TEXT_WITH_IMAGE_CELL]: (value, data, params) => stringify(params.text ? params.text(data) : value),
    [index.AvailableCells.PROGRESS_BAR_CELL]: (value, data, params) => {
        if (params.label) {
            return stringify(params.label(data));
        }
        if (params.hideLabel) {
            return '';
        }
        return `${Math.round(resolveProgressPercentage(value, data, params))}%`;
    },
    [index.AvailableCells.EDIT_TEXT_CELL]: (value) => stringify(value),
    [index.AvailableCells.TOGGLE_CELL]: (_value, data, params) => stringify(params.label ? params.label(data) : data?.toggleCell?.label),
    [index.AvailableCells.MULTI_BTN_CELL]: (_value, _data, params) => {
        const buttons = typeof params.buttons === 'function' ? [] : params.buttons;
        return Array.isArray(buttons)
            ? join(buttons.map((button) => button?.value))
            : '';
    },
    [index.AvailableCells.COLOR_STATUS_CELL]: NO_VISIBLE_TEXT,
    [index.AvailableCells.HEALTH_DOT_CELL]: NO_VISIBLE_TEXT,
    [index.AvailableCells.CHECKBOX_CELL]: NO_VISIBLE_TEXT,
    [index.AvailableCells.MENU_CELL]: NO_VISIBLE_TEXT,
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

exports.resolveCellSearchText = resolveCellSearchText;
