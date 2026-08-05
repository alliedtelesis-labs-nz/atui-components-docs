import { r as registerInstance, a as getElement, h, H as Host } from './index-BQWIFs0G.js';

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
        return (h(Host, { key: 'd79c623790abc9bbf61b649fbc02bf641cd3e5ce', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '3ac2aeb9625c76ac2d9f931600a13d88f78eaa4a', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'c1bb0d3cb781e6ca2beac753baf4ef244469ca88', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '707d5632434af867060c61effd504a349e83eb3c', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'f8a993aa504b0a9cc1b474c61153cd36db8f2179', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '2e4bde8208d86b0b36551e803ae6bf8bd1ab38ab', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
