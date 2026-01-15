'use strict';

var index = require('./index-ChzPazsa.js');

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
        return (index.h(index.Host, { key: '768f00e4a9a31d362eaf9234ac652ee93f8ac119', class: "flex h-full items-center leading-[100%]" }, index.h("at-toggle-switch", { key: 'af55accdc4cac25a78c0798682e85088f048b3d4', label: this.label, onChange: () => this.params.onTrigger?.(this.params), label_position: this.labelPosition, show_label: !!this.label, value: this.value, disabled: this.disabled })));
    }
};

exports.at_toggle_cell = AtToggleCell;
