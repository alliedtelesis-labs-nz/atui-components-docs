import { r as registerInstance, a as getElement, h, H as Host } from './index-DNWYfDmW.js';

const AtTitleSubtitleCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    params;
    title = '';
    subtitle = '';
    init(params) {
        this.setParams(params);
    }
    refresh(params) {
        this.setParams(params);
        return true;
    }
    getGui() {
        return this.el;
    }
    setParams(params) {
        this.params = params;
        if (params.title) {
            this.title = params.title(params.data);
        }
        else {
            this.title = params.data?.titleSubtitleCell?.title || '';
        }
        if (params.subtitle) {
            this.subtitle = params.subtitle(params.data);
        }
        else {
            this.subtitle = params.data?.titleSubtitleCell?.subtitle || '';
        }
    }
    render() {
        return (h(Host, { key: '02e7865ccd5ee5d800837fd211cb0ab86fcbd7a3', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'db7d67296237bc98a9c089c63aa5a7d32ca7dd37', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '65a3c1d7e1bbaad1cccdab0ea81f52eb5c84fcf6', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '1096304e447d2f24e79ba819b8d0112a69e22746', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '461d1062afc29b9ddcb6a71e22fb2bb54624793b', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '5f653ce8dbf4417adde5e23df1638e6aa342fe8b', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
