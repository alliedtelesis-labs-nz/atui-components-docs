'use strict';

var index = require('./index-ByfMXhOa.js');

const AtRadioCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    /**
     * Every cell in the column is refreshed, not just this one: a radio that gains the
     * selection takes it from a row that may be rendered anywhere above or below, and
     * only a re-read of `checked` clears it.
     */
    setValue() {
        if (!this.params?.setValue) {
            return;
        }
        this.params.setValue(true);
        this.params.api.refreshCells({
            columns: [this.columnId()],
            force: true,
        });
        this.params.api.refreshHeader();
    }
    columnId() {
        return this.params.column?.getColId();
    }
    groupName() {
        return this.params.group ?? `at-radio-cell-${this.columnId()}`;
    }
    render() {
        const isChecked = this.params.checked
            ? this.params.checked(this.params.data)
            : false;
        const isDisabled = this.params.getDisabled
            ? this.params.getDisabled(this.params.data)
            : false;
        return (index.h(index.Host, { key: 'd17381c67bcc84329f105c5d89a72bab5f536d10', class: "flex h-full items-center" }, index.h("at-radio", { key: '504140f6669907379780bd02d3fe2e6bfd94e62d', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, group: this.groupName(), value: String(this.params.node?.id ?? ''), onAtuiChange: () => this.setValue() })));
    }
};

exports.at_radio_cell = AtRadioCellComponent;
