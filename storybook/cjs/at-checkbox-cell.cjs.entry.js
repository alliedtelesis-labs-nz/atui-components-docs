'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: 'df75d94ce8f6a7a57c0eef6a5502e4992f12cde8', class: "flex h-full items-center" }, index.h("at-checkbox", { key: 'abe7c54e967b6a9d0e122aa6986b1e8aa35f519e', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

exports.at_checkbox_cell = AtCheckboxCellComponent;
