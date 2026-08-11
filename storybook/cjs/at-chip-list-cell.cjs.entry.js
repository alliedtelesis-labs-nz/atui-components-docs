'use strict';

var index = require('./index-BDNRUnGS.js');

const AtChipListCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    chips = [];
    /**
     * Width available to the chips, taken from the column rather than from CSS.
     * `undefined` until the column reports one, which leaves the fallback
     * `w-full` in charge.
     */
    contentWidth;
    column;
    handleColumnWidthChanged = () => this.syncWidth();
    init(params) {
        this.params = params;
        this.chips = params.chips(params.data);
        this.bindColumn(params.column);
        this.syncWidth();
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    componentDidLoad() {
        // The cell is in the DOM by now, so its padding can finally be read.
        this.syncWidth();
    }
    /**
     * Rebinds after a detach. A grid moves renderer DOM without re-running
     * `init` — column reorders, pinning, row animations — and every detach runs
     * `disconnectedCallback`, so without this the cell would stop following its
     * column's width from then on.
     */
    connectedCallback() {
        if (this.params) {
            this.bindColumn(this.params.column);
            this.syncWidth();
        }
    }
    disconnectedCallback() {
        this.column?.removeEventListener?.('widthChanged', this.handleColumnWidthChanged);
        this.column = undefined;
    }
    /**
     * Follows the column this cell belongs to, so dragging its edge resizes the
     * chips live. Rebinding is guarded because a grid reuses a renderer across
     * rows and would otherwise stack a listener per refresh.
     */
    bindColumn(column) {
        if (this.column === column) {
            return;
        }
        this.column?.removeEventListener?.('widthChanged', this.handleColumnWidthChanged);
        this.column = column;
        this.column?.addEventListener?.('widthChanged', this.handleColumnWidthChanged);
    }
    /**
     * Takes the width from the column itself instead of inheriting it through
     * CSS. A grid wraps cells in its own markup, and depending on how that
     * markup is laid out a host can end up sized to its content rather than to
     * the column — which would leave the chips measuring themselves against a
     * box far narrower than the space actually on offer.
     */
    syncWidth() {
        const columnWidth = this.column?.getActualWidth?.();
        if (!columnWidth) {
            this.contentWidth = undefined;
            return;
        }
        // The padding belongs to the grid's own cell element, which is not
        // necessarily this host's direct parent — a grid may wrap the content
        // in markup of its own. Missing it leaves the row wider than the column
        // and the counter is clipped at its edge.
        const cell = this.el?.closest('.ag-cell') ??
            this.el?.parentElement;
        const styles = cell ? getComputedStyle(cell) : undefined;
        const inset = styles
            ? parseFloat(styles.paddingLeft) +
                parseFloat(styles.paddingRight) +
                parseFloat(styles.borderLeftWidth) +
                parseFloat(styles.borderRightWidth)
            : 0;
        this.contentWidth = Math.max(0, columnWidth - (inset || 0));
    }
    render() {
        // A grid row is a fixed height by default, so the chips collapse onto
        // one line rather than wrap; grids whose rows grow with their content
        // opt out through the param. The explicit width is what the chip list
        // measures itself against; w-full stays as the fallback for when there
        // is no column to ask, such as in a story.
        const collapse = this.params?.show_overflow_counter ?? true;
        return (index.h(index.Host, { key: '36172823f9632596f531472eed05157d023b046a', class: `flex h-full w-full min-w-0 items-center ${collapse ? 'overflow-hidden' : ''}`, style: this.contentWidth
                ? { width: `${this.contentWidth}px` }
                : undefined }, index.h("at-chip-list", { key: '93a5825353a04c67f8cbcce8177176268d1c145c', class: "w-full min-w-0", chips: this.chips, show_clear_all: false, readonly: true, show_overflow_counter: collapse })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
