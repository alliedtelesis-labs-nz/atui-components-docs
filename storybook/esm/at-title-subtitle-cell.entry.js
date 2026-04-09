import { r as registerInstance, g as getElement, h, H as Host } from './index-CkS36Ijo.js';

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
        return (h(Host, { key: 'f51059478b7fce2bda28043c0827377add59ea80', class: "flex h-full items-center" }, h("at-tooltip", { key: '3675be8cb4cf71c698ec9c58668b05824e4d85e5', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: 'e43b498a1cc6e7535b474c11d03514022e22c6f3', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'a9626eca38853efc9a3d229a2bf366b676a2d2f2', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '15980e44821bd68931f6365a9cca079639b92518', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '014fa54090e31b7c25f372155075e58383e7aa66', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
