'use strict';

var index = require('./index-CA9vC8ae.js');

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
        return (index.h(index.Host, { key: '7f969b7856e46f1bd06d7b1da8bf04edd6efee96', class: "flex h-full items-center" }, index.h("at-checkbox", { key: '049f6caf21a62932e4f2d1802e27babac8c6c423', class: "w-auto self-center", disabled: isDisabled, value: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

exports.at_checkbox_cell = AtCheckboxCellComponent;
//# sourceMappingURL=at-checkbox-cell.entry.cjs.js.map
