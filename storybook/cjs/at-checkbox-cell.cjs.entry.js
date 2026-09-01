'use strict';

var index = require('./index-BCGHtseN.js');

const AtCheckboxCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    init(params) {
        this.params = params;
        this.params.api.refreshHeader();
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    setValue(checked) {
        if (checked !== undefined && this.params?.setValue) {
            this.params.setValue(checked);
            this.params.api.refreshHeader();
        }
    }
    render() {
        const isChecked = this.params.checked
            ? this.params.checked(this.params.data)
            : false;
        const isDisabled = this.params.getDisabled
            ? this.params.getDisabled(this.params.data)
            : false;
        return (index.h(index.Host, { key: '2de7ef2e72b7d70d2aaf3ad1e765f1be1c51f32b', class: "flex h-full items-center" }, index.h("at-checkbox", { key: '396d78ab144b34d20ce360d311c9a92849df8f81', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

exports.at_checkbox_cell = AtCheckboxCellComponent;
