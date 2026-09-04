'use strict';

var index = require('./index-DnmjgnzG.js');

const AtCheckboxHeaderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    params;
    disabled;
    get el() { return index.getElement(this); }
    init(params) {
        this.params = params;
        this.params.width = 60;
        this.setDisabled();
    }
    /**
     * Resolved while rendering rather than in `init()`: ag-grid builds the header
     * component before the grid is ready to be asked about its rows, and anything thrown
     * in `init()` leaves the component without a GUI for ag-grid to attach.
     *
     * A caller that owns the selection itself supplies `checked`/`setValue` and keeps the
     * state; without them the checkbox reads and writes a boolean field on each row, which
     * is the original contract and the only one that works when nobody else is tracking.
     */
    checkedState() {
        const nodes = this.pageNodes();
        if (this.params?.checked) {
            return this.params.checked(nodes);
        }
        const checkedNodes = nodes.filter((rowNode) => {
            return typeof rowNode.data === 'boolean'
                ? rowNode.data
                : rowNode.data[this.params.column.colId];
        });
        return !!nodes.length && nodes.length === checkedNodes.length;
    }
    /**
     * The rows on the current page, which is what the header checkbox acts on.
     * Not `getRenderedNodes()`: that returns the nodes the viewport has drawn, so
     * with virtualization on a tall page it silently means "the rows you happen
     * to have scrolled past" - the checkbox would tick a different number of rows
     * depending on scroll position.
     */
    pageNodes() {
        const api = this.params?.api;
        if (!api)
            return [];
        const nodes = [];
        api.forEachNodeAfterFilterAndSort((node) => {
            if (node)
                nodes.push(node);
        });
        if (!api.paginationGetPageSize)
            return nodes;
        const pageSize = api.paginationGetPageSize();
        if (!pageSize)
            return nodes;
        const page = api.paginationGetCurrentPage();
        return nodes.slice(page * pageSize, (page + 1) * pageSize);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = { ...params };
        this.setDisabled();
        return true;
    }
    setRowsValue(checked) {
        if (checked === undefined)
            return;
        const nodes = this.pageNodes();
        if (this.params?.setValue) {
            this.params.setValue(checked, nodes);
        }
        else {
            nodes.forEach((rowNode) => {
                rowNode.setDataValue(this.params.column.colId, checked);
            });
        }
        this.params = { ...this.params };
    }
    setDisabled() {
        if (!this.params?.api)
            return;
        const data = this.pageNodes().map((node) => node.data);
        if (this.params.getDisabled !== undefined) {
            this.disabled = this.params.getDisabled(data);
        }
    }
    render() {
        const state = this.checkedState();
        return (index.h("at-checkbox", { key: '5b5f1b2220feb4688f70510ee4bc092de8825c48', disabled: this.disabled, checked: state === true, indeterminate: state === 'indeterminate', onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
};

exports.at_checkbox_header = AtCheckboxHeaderComponent;
