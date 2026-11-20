'use strict';

var index = require('./index-CWfGEe1_.js');

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
        return (index.h(index.Fragment, null, this.params.icons(this.params.data).map((icon) => (index.h("at-tooltip", { position: "right", disabled: !icon.tooltip }, index.h("div", { slot: "tooltip-trigger" }, index.h("at-icon", { name: icon.iconName, size: "16px", class: icon.iconClass })), icon.tooltip && (index.h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        const iconPosition = this.params?.iconPosition || 'before';
        return (index.h(index.Host, { key: '0bc3dbc5a551247d0e2c468469329658986f6f1e', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), index.h("span", { key: '9af7c229ac237b4f9e8ded4d9a2a8cf3be13ee28', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
};

exports.at_text_icon_cell = AtTextIconCell;
