'use strict';

var index = require('./index-i7hIKTeN.js');

const AtuiTextIconCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.text = '';
    }
    update(params) {
        var _a;
        this.params = params;
        if (params.text) {
            this.text = params.text(params.data);
        }
        else {
            this.text = ((_a = params.value) === null || _a === void 0 ? void 0 : _a.toString()) || '';
        }
    }
    init(params) {
        this.update(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.update(params);
        return true;
    }
    renderIcons() {
        return (index.h(index.Fragment, null, this.params.icons().map((icon) => (index.h("atui-tooltip", { position: "right", disabled: !icon.tooltip }, index.h("div", { slot: "tooltip-trigger" }, index.h("i", { class: `material-icons text-icon-md mt-4 cursor-pointer ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (index.h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        var _a;
        const iconPosition = ((_a = this.params) === null || _a === void 0 ? void 0 : _a.iconPosition) || 'before';
        return (index.h(index.Host, { key: '5a8d2b4356cc6da0b6b9238dfde40e455eec4f1f', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), index.h("span", { key: '9c26e4d069d0d3d72e7d7b932a64975212ce26ad', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_icon_cell = AtuiTextIconCell;
//# sourceMappingURL=atui-text-icon-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-icon-cell.cjs.entry.js.map