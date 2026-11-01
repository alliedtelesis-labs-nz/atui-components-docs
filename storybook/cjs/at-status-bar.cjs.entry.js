'use strict';

var index = require('./index-E25G0lY5.js');

const LIGHT_TEXT = 'var(--token-color-base-slate-100)';
const DARK_TEXT = 'var(--token-color-base-slate-900)';
const LIGHT_TEXT_RGB = [241, 245, 249];
const DARK_TEXT_RGB = [15, 23, 42];
const BLACK_CLAMP = 0.022;
const BLACK_CLAMP_EXPONENT = 1.414;
const LOW_CONTRAST_CUTOFF = 0.1;
function screenLuminance([red, green, blue]) {
    const luminance = 0.2126729 * Math.pow(red / 255, 2.4) +
        0.7151522 * Math.pow(green / 255, 2.4) +
        0.072175 * Math.pow(blue / 255, 2.4);
    return luminance >= BLACK_CLAMP
        ? luminance
        : luminance + Math.pow(BLACK_CLAMP - luminance, BLACK_CLAMP_EXPONENT);
}
function apcaLightnessContrast(text, background) {
    const textLuminance = screenLuminance(text);
    const backgroundLuminance = screenLuminance(background);
    if (backgroundLuminance > textLuminance) {
        const contrast = (Math.pow(backgroundLuminance, 0.56) -
            Math.pow(textLuminance, 0.57)) *
            1.14;
        return contrast > LOW_CONTRAST_CUTOFF ? contrast - 0.027 : 0;
    }
    const contrast = (Math.pow(backgroundLuminance, 0.65) - Math.pow(textLuminance, 0.62)) *
        1.14;
    return contrast < -LOW_CONTRAST_CUTOFF ? Math.abs(contrast + 0.027) : 0;
}
function contrastTextColor(resolvedBackground) {
    const channels = resolvedBackground.match(/[\d.]+/g)?.map(Number);
    if (!channels || channels.length < 3) {
        return DARK_TEXT;
    }
    const [red, green, blue, alpha = 1] = channels;
    if (alpha === 0) {
        return DARK_TEXT;
    }
    const background = [red, green, blue];
    return apcaLightnessContrast(LIGHT_TEXT_RGB, background) >
        apcaLightnessContrast(DARK_TEXT_RGB, background)
        ? LIGHT_TEXT
        : DARK_TEXT;
}

const MIN_HEIGHT = 'min-h-[16px]';
const AtStatusBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * List of segments that make up the status bar. Each segment implements the AtIStatusBarSegment interface.
     */
    status_bar = [];
    /**
     * Height of the status bar
     */
    size = 'sm';
    /**
     * Shows a tooltip with the segment's label and percentage on hover
     */
    show_tooltip = true;
    /**
     * Shows each segment's label and percentage inside the bar. The bar grows with
     * its text, never shorter than the `lg` size, and ignores `size`. Text colour is
     * derived from each segment's background.
     */
    show_internal_value;
    /**
     * Space in pixels between adjacent segments. Segments share the remaining
     * width in proportion to their percentages.
     */
    segment_gap = 0;
    get el() { return index.getElement(this); }
    themeObserver;
    componentDidLoad() {
        this.themeObserver = new MutationObserver(() => this.applyContrast());
        this.themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'data-theme'],
        });
    }
    componentDidRender() {
        this.applyContrast();
    }
    disconnectedCallback() {
        this.themeObserver?.disconnect();
    }
    applyContrast() {
        if (!this.show_internal_value) {
            return;
        }
        this.el
            .querySelectorAll('[data-name="status-bar-segment"]')
            .forEach((segment) => {
            segment.style.color = contrastTextColor(getComputedStyle(segment).backgroundColor);
        });
    }
    get statusBarClass() {
        if (this.show_internal_value) {
            return `${MIN_HEIGHT} flex items-stretch rounded-lg overflow-hidden`;
        }
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-full overflow-hidden`;
    }
    segmentSummary(segment) {
        return segment.label
            ? `${segment.label}: ${segment.percentage}%`
            : `${segment.percentage}%`;
    }
    get coveredPercentage() {
        return this.status_bar.reduce((total, segment) => total + segment.percentage, 0);
    }
    get hasRemainder() {
        return this.coveredPercentage < 99.999;
    }
    get flexItemCount() {
        return this.status_bar.length + (this.hasRemainder ? 1 : 0);
    }
    renderRemainder() {
        return (index.h("div", { class: "bg-surface-0 min-w-0 flex-1", "data-name": "status-bar-remainder", "aria-hidden": "true" }));
    }
    segmentBasis(percentage) {
        if (!this.segment_gap) {
            return `${percentage}%`;
        }
        const totalGap = this.segment_gap * (this.flexItemCount - 1);
        return `calc((100% - ${totalGap}px) * ${percentage / 100})`;
    }
    get segments() {
        return this.status_bar.map((segment) => (index.h("at-tooltip", { position: "top", class: `flex items-stretch justify-center ${this.show_internal_value
                ? '[&>[data-name=tooltip-trigger]]:w-full'
                : ''}`, disabled: !this.show_tooltip, style: {
                flex: `0 0 ${this.segmentBasis(segment.percentage)}`,
            } }, index.h("div", { class: `h-full w-full ${this.show_internal_value
                ? 'relative'
                : 'absolute inset-0'}`, slot: "tooltip-trigger", role: "img", "data-name": "status-bar-segment", "aria-label": this.segmentSummary(segment), style: {
                background: segment.backgroundColor,
            } }, this.show_internal_value && (index.h("div", { class: "flex h-full flex-col justify-center overflow-hidden px-8 py-4 text-left", "data-name": "status-bar-segment-value" }, index.h("span", { class: "truncate text-xs" }, segment.label), index.h("span", { class: "truncate text-sm font-bold" }, segment.percentage, "%")))), index.h("span", null, this.segmentSummary(segment)))));
    }
    render() {
        return (index.h(index.Host, { key: '04b52eae30339639322a3fd46787a50968bd276e', class: this.statusBarClass }, index.h("div", { key: '6d7401c7548f912b338f10d9f32f0c98507de921', class: "flex flex-1 items-stretch justify-start overflow-visible", style: { gap: `${this.segment_gap}px` } }, this.segments, this.hasRemainder && this.renderRemainder())));
    }
};

exports.at_status_bar = AtStatusBar;
