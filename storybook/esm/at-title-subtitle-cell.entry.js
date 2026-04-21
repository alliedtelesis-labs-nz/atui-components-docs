import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: 'dd0acfe46ddcfdeaf982150d976a27492c26a1ec', class: "flex h-full items-center" }, h("at-tooltip", { key: '2efaebf53b6e16fb80b96aad6bfee13fe24965e8', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: 'f5c6f67bb215027a0db6c609ca009675585f8c71', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '7567c16626acfe316fb8c94527ff7b121206ce21', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '1d39c485ea98a6a40b707a786e840d668706c336', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: 'b2e2db21abd8e0ffa8c7428188ca3ff2fd260cbe', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
