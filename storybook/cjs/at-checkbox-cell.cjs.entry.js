'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '70264125ab88c55f0c05384d26c1047f9371cb0a', class: "flex h-full items-center" }, index.h("at-checkbox", { key: '54e46f1a08b338beed7261863f27efb6f94624b8', class: "w-auto self-center", disabled: isDisabled, value: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

exports.at_checkbox_cell = AtCheckboxCellComponent;
