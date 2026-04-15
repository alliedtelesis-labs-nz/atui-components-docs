'use strict';

var index = require('./index-BRms7T38.js');

const AtEditTextCell = class {
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
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        if (this.params.onValueChange) {
            this.params.onValueChange(this.params);
        }
    }
    render() {
        return (index.h(index.Host, { key: '3922eddd82a320bad32692fc02460bc4a0aa6b75', class: "flex h-full items-center leading-[100%]" }, index.h("at-input", { key: 'b749cd4037a230f394a26ecd2f35d977faecfa81', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

exports.at_edit_text_cell = AtEditTextCell;
