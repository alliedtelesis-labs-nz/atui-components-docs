import { r as registerInstance, a as getElement, h, H as Host } from './index-m_dTEvgo.js';

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
        return (h(Host, { key: 'c2db50d24697bc7530833200b56c500821d7cfe3', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'b0900dc49c11a0b9a07187fde978f123c317720d', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '948a094626090bb3881bdef3ba93b228b8ce1843', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '70ba908664d7e824f6dccf30950ea9c5368b7094', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'bcd7e545f667d78dd3696222216c30602c444749', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '8248ca54dfe4660d9bd47033a39d0985e582ddee', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
