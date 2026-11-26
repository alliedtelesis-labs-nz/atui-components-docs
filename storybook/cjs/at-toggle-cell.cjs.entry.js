'use strict';

var index = require('./index-GH7gxrjy.js');

const AtToggleCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    label;
    labelPosition;
    disabled;
    value;
    timer;
    init(params) {
        this.params = params;
        if (this.params.toggleValue) {
            this.value = this.params.toggleValue(params.data);
        }
        else {
            this.value = params.data?.toggleCell?.value || false;
        }
        if (this.params.label) {
            this.label = this.params.label(params.data);
        }
        else {
            this.label = params.data?.toggleCell?.label || '';
        }
        this.labelPosition = params.data?.toggleCell?.labelPosition || 'after';
        this.disabled = params.data?.toggleCell?.disabled || false;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.data);
        return true;
    }
    toggleHandler(change) {
        clearTimeout(this.timer);
        this.params.value = change.detail;
        this.timer = setTimeout(() => { }, 2000);
    }
    updateCell(newValue) {
        clearTimeout(this.timer);
        this.params.value = newValue;
        this.timer = setTimeout(() => { }, 2000);
    }
    render() {
        return (index.h(index.Host, { key: '7c833567ea32aaedfd22e5011ef9cc0a9fa71c6b', class: "flex h-full items-center leading-[100%]" }, index.h("at-toggle-switch", { key: 'ff4b5c91dd9a71ac6b68374566293679e1fc9d8b', label: this.label, onChange: () => this.params.onTrigger?.(this.params), label_position: this.labelPosition, show_label: !!this.label, value: this.value, disabled: this.disabled })));
    }
};

exports.at_toggle_cell = AtToggleCell;
