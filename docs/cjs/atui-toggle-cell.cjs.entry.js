'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiToggleCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
        return (index.h(index.Host, { key: '13b0c9f5a25e2eff0de5c8e0f6093973a0eb2799', class: "flex h-full items-center leading-[100%]" }, index.h("atui-toggle-switch", { key: '694f5991eba64cdc8c1fc6c2822f8e63179622a2', label: this.params.getLabel(this.params), onChange: () => this.params.onTrigger(this.params), label_position: "after", value: this.params.value })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_toggle_cell = AtuiToggleCell;
//# sourceMappingURL=atui-toggle-cell.entry.cjs.js.map

//# sourceMappingURL=atui-toggle-cell.cjs.entry.js.map