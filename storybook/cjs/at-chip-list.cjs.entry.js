'use strict';

var index = require('./index-B6UemjpQ.js');

const atChipListCss = () => `at-chip-list at-badge [data-name=badge-label]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;

/**
 * Width reserved for the `+N` counter on the pass that first collapses the
 * list, before the counter itself exists to be measured. Once it renders its
 * real width is used, so this only has to be close enough to avoid a visible
 * correction.
 */
const COUNTER_WIDTH_ESTIMATE = 48;
const AtChipList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiRemoveChip = index.createEvent(this, "atRemoveChip", 6);
    }
    /**
     * Items in the chip list.
     */
    chips;
    /**
     * Disables the list of chips. Prevents removing a chip.
     */
    disabled;
    /**
     * Disables the list of chips but keeps the text readable. Prevents removing a chip.
     */
    readonly;
    /**
     * Shows the 'Clear All' button
     */
    show_clear_all = true;
    /**
     * Size of the chips. Determines padding and font-size. For use in input chip lists.
     */
    size = 'lg';
    /**
     * Keeps the chips on a single line, replacing those that do not fit with a
     * `+N` counter that lists them on hover. Off by default so lists that are
     * meant to grow — a multi-select input, for example — keep wrapping. Use it
     * where the container height is fixed, such as a table cell.
     */
    show_overflow_counter = false;
    get el() { return index.getElement(this); }
    /**
     * How many chips currently fit. `null` means "not measured yet", which
     * renders every chip so their natural widths can be read.
     */
    visibleCount = null;
    /**
     * Emitted when the 'X' on a chip, or 'Clear All' is clicked.
     */
    atuiRemoveChip;
    listEl;
    observer;
    /**
     * Natural width of every chip, measured once while they are all rendered.
     * Cached because a hidden chip has no width of its own to measure, so
     * re-reading the DOM after collapsing would report that everything fits.
     */
    chipWidths = null;
    /** Set while waiting for mid-upgrade badges to become measurable. */
    awaitingChipRender = false;
    /**
     * Room the counter needs, kept clear by the last visible chip. State
     * rather than a plain field: it is read in render for the last chip's
     * maxWidth, so a corrected measurement must trigger a render even when the
     * visible count itself has not changed.
     */
    counterReserve = COUNTER_WIDTH_ESTIMATE;
    componentDidLoad() {
        this.observeResize();
        // Chip widths measured against a fallback font are stale once the web
        // font swaps in, and nothing else re-measures: the row's own width does
        // not change, so the ResizeObserver never fires.
        if (typeof document !== 'undefined' && document.fonts?.ready) {
            document.fonts.ready.then(() => {
                if (this.el?.isConnected) {
                    this.resetMeasurements();
                }
            });
        }
    }
    /**
     * Re-attaches on reconnect. A grid moves cell renderers in and out of the
     * DOM as it scrolls and refreshes, and each detach tears the observer down,
     * so attaching only on first load would leave the list frozen at whatever
     * width it last saw.
     */
    connectedCallback() {
        this.observeResize();
    }
    observeResize() {
        if (this.observer ||
            !this.show_overflow_counter ||
            !this.listEl ||
            typeof ResizeObserver === 'undefined') {
            return;
        }
        // Observe the row itself rather than the host: it is the element whose
        // width the fit is calculated against, and an unstyled host is inline,
        // so its box would not track the available space.
        this.observer = new ResizeObserver(() => this.fitChips());
        this.observer.observe(this.listEl);
    }
    disconnectedCallback() {
        this.observer?.disconnect();
        this.observer = undefined;
    }
    componentDidRender() {
        if (!this.show_overflow_counter) {
            return;
        }
        this.observeResize();
        this.measureIfPossible();
        this.fitChips();
    }
    /**
     * Every chip is on the row whenever visibleCount is null, so that is the
     * only state in which their natural widths can be read. A collapsed row
     * must never re-measure: the hidden chips have no width to report.
     *
     * A badge still upgrading is little more than its padding, and caching
     * those widths concludes that everything fits, permanently — so an
     * incomplete subtree is never measured. Instead the badges' own readiness
     * schedules the retry.
     */
    measureIfPossible() {
        if (this.visibleCount !== null || !this.listEl?.clientWidth) {
            return;
        }
        const chipEls = Array.from(this.listEl.querySelectorAll('[data-name="chip"]'));
        if (chipEls.some((chip) => !chip.classList.contains('hydrated'))) {
            if (!this.awaitingChipRender) {
                this.awaitingChipRender = true;
                Promise.all(chipEls.map((chip) => chip.componentOnReady?.())).then(() => {
                    this.awaitingChipRender = false;
                    index.forceUpdate(this.el);
                });
            }
            return;
        }
        this.chipWidths = chipEls.map((chip) => chip.getBoundingClientRect().width);
    }
    resetMeasurements() {
        this.chipWidths = null;
        this.visibleCount = null;
        this.observeResize();
        // An uncollapsed list nulling an already-null count schedules nothing,
        // yet the stale cache may now hide a real overflow (the font-swap
        // case), so a render pass is forced to re-measure either way.
        index.forceUpdate(this.el);
    }
    /**
     * Works out how many chips fit on one line and stores it in `visibleCount`.
     *
     * Whether the counter is needed is decided before its width is taken into
     * account: if every chip fits there is no counter, and only once one is
     * required is its width subtracted. Deciding it in that order keeps the
     * result stable — reserving counter space up front could hide a chip that
     * would otherwise fit, which would then make the counter unnecessary.
     */
    fitChips() {
        if (!this.show_overflow_counter || !this.listEl) {
            return;
        }
        const total = this.chips?.length ?? 0;
        // A row with no width has not been laid out — it is detached, or the
        // grid has yet to size the cell. Measuring it would fit nothing and
        // strand the list showing only a counter.
        if (!total || !this.listEl.clientWidth) {
            return;
        }
        const widths = this.chipWidths;
        if (!widths || widths.length !== total) {
            // The widths were never read — the list first rendered without
            // layout (a hidden tab, a closed dialog) — or were taken before a
            // re-render added chips. Never measure from here: this also runs
            // from the ResizeObserver, which can fire while the badges are
            // still hydrating, and caching their half-rendered widths makes
            // every chip "fit" for good. Instead force a render, whose
            // componentDidRender measures once the subtree is complete; while
            // that completion is what is being waited on, the wait itself
            // schedules the render, so forcing another here would just spin.
            this.visibleCount = null;
            if (!this.awaitingChipRender) {
                index.forceUpdate(this.el);
            }
            return;
        }
        const gap = parseFloat(getComputedStyle(this.listEl).columnGap) || 0;
        const available = this.listEl.clientWidth - this.trailingWidth(gap);
        // Gaps sit between items only, so `count` chips carry `count - 1`.
        const widthUpTo = (count) => widths.slice(0, count).reduce((sum, width) => sum + width, 0) +
            Math.max(0, count - 1) * gap;
        let fits = total;
        if (widthUpTo(total) > available) {
            const counterEl = this.listEl.querySelector('[data-name="chip-overflow"]');
            const counterWidth = counterEl
                ? counterEl.getBoundingClientRect().width + gap
                : COUNTER_WIDTH_ESTIMATE + gap;
            this.counterReserve = counterWidth;
            fits = 0;
            while (fits < total &&
                widthUpTo(fits + 1) <= available - counterWidth) {
                fits++;
            }
            // A bare "+N" tells the user nothing about what is in the list, so
            // always keep one chip even where it does not strictly fit — it
            // truncates with an ellipsis rather than pushing the counter out.
            fits = Math.max(fits, 1);
        }
        // Guard against a render loop: only a changed count triggers a render,
        // and each render calls back in here.
        if (fits !== this.visibleCount) {
            this.visibleCount = fits;
        }
    }
    /**
     * Width of everything sharing the line that is neither a chip nor the
     * counter — the clear-all button and any slotted content. The counter is
     * excluded because `fitChips` accounts for it separately.
     */
    trailingWidth(gap) {
        return Array.from(this.listEl?.children ?? [])
            .filter((child) => !child.matches('[data-name="chip"]') &&
            !child.matches('[data-name="chip-overflow"]'))
            .reduce((sum, child) => sum + child.getBoundingClientRect().width + gap, 0);
    }
    keyDownHandler(event, chipsToRemove) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.removeChipHandler(chipsToRemove);
        }
    }
    removeChipHandler(chipsToRemove) {
        this.atuiRemoveChip.emit(chipsToRemove);
        if (chipsToRemove.length > 1) {
            this.chips = [];
        }
        else {
            this.chips = this.chips.filter((chip) => chip !== chipsToRemove[0]);
        }
    }
    /**
     * Chips that fit on the line. Everything is rendered until a measurement
     * has been taken, so the natural widths can be read from the DOM.
     */
    get shownChips() {
        if (!this.show_overflow_counter || this.visibleCount === null) {
            return this.chips ?? [];
        }
        return (this.chips ?? []).slice(0, this.visibleCount);
    }
    get overflowChips() {
        return (this.chips ?? []).slice(this.shownChips.length);
    }
    get getChips() {
        if (!this.chips) {
            return '';
        }
        const shown = this.shownChips;
        const hasCounter = this.show_overflow_counter && this.overflowChips.length;
        return shown.map((chip, index$1) => (index.h("at-badge", {
            // The last chip gives up whatever room the counter needs, so a
            // chip too wide for the row ellipsises rather than pushing the
            // counter out of sight. Applied per-chip rather than as a class
            // so the measuring pass, which has no counter, is unaffected.
            style: hasCounter && index$1 === shown.length - 1
                ? {
                    maxWidth: `calc(100% - ${this.counterReserve}px)`,
                }
                : undefined,
            // shrink-0 always, never conditionally: it holds each chip at
            // its natural width, and measuring a chip that has been allowed
            // to compress reports a width small enough that the whole list
            // looks like it fits. The last chip is capped by style instead,
            // which leaves these measurements untouched.
            class: `flex items-center gap-4 text-center ${this.show_overflow_counter
                ? 'max-w-full shrink-0 overflow-hidden'
                : ''}`, rounded: true, "data-name": "chip", type: this.disabled ? 'disabled' : 'default', size: this.size, label: chip
        }, !this.disabled && !this.readonly && (index.h("button", { type: "button", class: "fill-foreground/40 hover:fill-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[fill] duration-150", "data-name": "chip-remove", "aria-label": `Remove ${chip}`, onClick: (event) => {
                event.stopPropagation();
                this.removeChipHandler([chip]);
            }, onKeyDown: (event) => this.keyDownHandler(event, [chip]) }, index.h("at-icon", { name: "cancel" }))))));
    }
    render() {
        const overflow = this.overflowChips;
        return (index.h("div", { key: 'a2c6370112c784ddb4addc6ac03175ae927d94a1', class: `flex h-full items-center gap-4 ${this.show_overflow_counter
                ? 'flex-nowrap overflow-hidden'
                : 'flex-wrap'}`, ref: (el) => (this.listEl = el) }, this.chips && this.getChips, overflow.length > 0 && (index.h("at-tooltip", { key: '37f66c612355c0c36c2be4ef5c4d057801a84cdd',
            // Never shrinks: the counter is the only thing telling
            // the user that chips are missing.
            class: "shrink-0", "data-name": "chip-overflow", position: "top" }, index.h("at-badge", { key: '585c28796c83e3828b867c5fe2b9176679c655bb', slot: "tooltip-trigger", class: "flex items-center text-center", rounded: true, "data-name": "chip-overflow-counter", type: this.disabled ? 'disabled' : 'default', size: this.size, label: `+${overflow.length}` }), overflow.join(', '))), !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (index.h("at-button", { key: '08429aeefb4b3fe919680437221733c13e6b0b7e', size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } }, index.h("at-icon", { key: '057fc4914c9aae3eb49d36d45396dcfce3f3b7fa', slot: "icon", name: "backspace" }))), index.h("slot", { key: 'df306a43da1d92422da8996e5c091f995dc6434d' })));
    }
    static get watchers() { return {
        "chips": [{
                "resetMeasurements": 0
            }],
        "size": [{
                "resetMeasurements": 0
            }],
        "show_overflow_counter": [{
                "resetMeasurements": 0
            }]
    }; }
};
AtChipList.style = atChipListCss();

exports.at_chip_list = AtChipList;
