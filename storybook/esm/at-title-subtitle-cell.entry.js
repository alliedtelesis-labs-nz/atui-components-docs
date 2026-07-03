import { r as registerInstance, a as getElement, h, H as Host } from './index-BMlRrrhK.js';

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
        return (h(Host, { key: '519fdd188f551e2ca32df769da78e97f844339f5', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '6852895c855931d9f1ddac1d2fdd5ac9ea8f4ab9', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '584c90b415916a81d0e5e2eacd9b00b912aa242f', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '228083a23f4c45106be6175304125d3ff5888f13', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'ddb4540659d53a6a53771c5e22b1f386746c60ce', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '109748072795b5506d9d9a34a0961d241ebc97e4', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
