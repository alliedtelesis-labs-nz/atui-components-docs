'use strict';

var index = require('./index-nKeTsW5N.js');

const AtuiToggleCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.params = params;
        if (this.params.toggleValue) {
            this.value = this.params.toggleValue(params.data);
        }
        else {
            this.value = ((_b = (_a = params.data) === null || _a === void 0 ? void 0 : _a.toggleCell) === null || _b === void 0 ? void 0 : _b.value) || false;
        }
        if (this.params.label) {
            this.label = this.params.label(params.data);
        }
        else {
            this.label = ((_d = (_c = params.data) === null || _c === void 0 ? void 0 : _c.toggleCell) === null || _d === void 0 ? void 0 : _d.label) || '';
        }
        this.labelPosition = ((_f = (_e = params.data) === null || _e === void 0 ? void 0 : _e.toggleCell) === null || _f === void 0 ? void 0 : _f.labelPosition) || 'after';
        this.disabled = ((_h = (_g = params.data) === null || _g === void 0 ? void 0 : _g.toggleCell) === null || _h === void 0 ? void 0 : _h.disabled) || false;
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
        return (index.h(index.Host, { key: 'db94f84c179f5d92f3cd805729d1b19e14c1a90b', class: "flex h-full items-center leading-[100%]" }, index.h("atui-toggle-switch", { key: 'eb7f44a8136d6162021d594b7a316dbcd87a1e31', label: this.label, onChange: () => { var _a, _b; return (_b = (_a = this.params).onTrigger) === null || _b === void 0 ? void 0 : _b.call(_a, this.params); }, label_position: this.labelPosition, show_label: !!this.label, value: this.value, disabled: this.disabled })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_toggle_cell = AtuiToggleCell;
//# sourceMappingURL=atui-toggle-cell.entry.cjs.js.map

//# sourceMappingURL=atui-toggle-cell.cjs.entry.js.map