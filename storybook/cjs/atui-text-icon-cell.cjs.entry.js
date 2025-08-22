'use strict';

var index = require('./index-s6Ut5Yq6.js');

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
        return (index.h(index.Fragment, null, this.params.icons().map((icon) => (index.h("atui-tooltip", { position: "right", disabled: !icon.tooltip }, index.h("div", { slot: "tooltip-trigger" }, index.h("i", { class: `material-icons mt-4 cursor-pointer text-icon-md ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (index.h("span", { slot: "tooltip-content", class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        var _a;
        const iconPosition = ((_a = this.params) === null || _a === void 0 ? void 0 : _a.iconPosition) || 'before';
        return (index.h(index.Host, { key: '25b5acf03bafa4ea7a2b5390a1785d457cc76b47', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), index.h("span", { key: 'e8b6133bae8dee55cf791244f2dccac346a91444', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
    get el() { return index.getElement(this); }
};

exports.atui_text_icon_cell = AtuiTextIconCell;
//# sourceMappingURL=atui-text-icon-cell.entry.cjs.js.map

//# sourceMappingURL=atui-text-icon-cell.cjs.entry.js.map