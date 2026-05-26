'use strict';

var index = require('./index--r5sCsiV.js');

const AtTextIconCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    text = '';
    params;
    update(params) {
        this.params = params;
        if (params.text) {
            this.text = params.text(params.data);
        }
        else {
            this.text = params.value?.toString() || '';
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
        return (index.h(index.Fragment, null, this.params.icons().map((icon) => (index.h("at-tooltip", { position: "right", disabled: !icon.tooltip }, index.h("div", { slot: "tooltip-trigger" }, index.h("i", { class: `material-icons text-icon-md mt-4 cursor-pointer ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (index.h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        const iconPosition = this.params?.iconPosition || 'before';
        return (index.h(index.Host, { key: '1ecc83424f7481a9a2d2b6efe19e99e30092bdf5', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), index.h("span", { key: '153e98f20dc6a4c904e1941ef31268e6b4c6ee03', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
};

exports.at_text_icon_cell = AtTextIconCell;
