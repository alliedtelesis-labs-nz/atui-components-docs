import { EventEmitter } from '../../stencil-public-runtime';
export type AtBadgeSize = 'lg' | 'sm';
/**
 * @category Utilities
 * @description A chip list component for displaying collections of tags, filters, or selectable items. Supports removal, selection, and interactive chip management.
 *
 * @slot - Placed after the chips & the 'clear all' button
 */
export declare class AtChipList {
    /**
     * Items in the chip list.
     */
    chips: string[];
    /**
     * Disables the list of chips. Prevents removing a chip.
     */
    disabled: boolean;
    /**
     * Disables the list of chips but keeps the text readable. Prevents removing a chip.
     */
    readonly: boolean;
    /**
     * Shows the 'Clear All' button
     */
    show_clear_all: boolean;
    /**
     * Size of the chips. Determines padding and font-size. For use in input chip lists.
     */
    size: AtBadgeSize;
    /**
     * Keeps the chips on a single line, replacing those that do not fit with a
     * `+N` counter that lists them on hover. Off by default so lists that are
     * meant to grow — a multi-select input, for example — keep wrapping. Use it
     * where the container height is fixed, such as a table cell.
     */
    show_overflow_counter: boolean;
    el: HTMLElement;
    /**
     * How many chips currently fit. `null` means "not measured yet", which
     * renders every chip so their natural widths can be read.
     */
    visibleCount: number | null;
    /**
     * Emitted when the 'X' on a chip, or 'Clear All' is clicked.
     */
    atuiRemoveChip: EventEmitter<string[]>;
    private listEl?;
    private observer?;
    /**
     * Natural width of every chip, measured once while they are all rendered.
     * Cached because a hidden chip has no width of its own to measure, so
     * re-reading the DOM after collapsing would report that everything fits.
     */
    private chipWidths;
    /** Set while waiting for mid-upgrade badges to become measurable. */
    private awaitingChipRender;
    /**
     * Room the counter needs, kept clear by the last visible chip. State
     * rather than a plain field: it is read in render for the last chip's
     * maxWidth, so a corrected measurement must trigger a render even when the
     * visible count itself has not changed.
     */
    counterReserve: number;
    componentDidLoad(): void;
    /**
     * Re-attaches on reconnect. A grid moves cell renderers in and out of the
     * DOM as it scrolls and refreshes, and each detach tears the observer down,
     * so attaching only on first load would leave the list frozen at whatever
     * width it last saw.
     */
    connectedCallback(): void;
    private observeResize;
    disconnectedCallback(): void;
    componentDidRender(): void;
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
    private measureIfPossible;
    resetMeasurements(): void;
    /**
     * Works out how many chips fit on one line and stores it in `visibleCount`.
     *
     * Whether the counter is needed is decided before its width is taken into
     * account: if every chip fits there is no counter, and only once one is
     * required is its width subtracted. Deciding it in that order keeps the
     * result stable — reserving counter space up front could hide a chip that
     * would otherwise fit, which would then make the counter unnecessary.
     */
    private fitChips;
    /**
     * Width of everything sharing the line that is neither a chip nor the
     * counter — the clear-all button and any slotted content. The counter is
     * excluded because `fitChips` accounts for it separately.
     */
    private trailingWidth;
    keyDownHandler(event: KeyboardEvent, chipsToRemove: string[]): void;
    removeChipHandler(chipsToRemove: string[]): void;
    /**
     * Chips that fit on the line. Everything is rendered until a measurement
     * has been taken, so the natural widths can be read from the DOM.
     */
    private get shownChips();
    private get overflowChips();
    get getChips(): any;
    render(): any;
}
