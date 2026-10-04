import { r as registerInstance, a as getElement, h, H as Host } from './index-Baj27LS8.js';

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
        return (h(Host, { key: '5b2912e1dfa33f0282838378209073b7d2833165', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'd4ff43a5d4683e8a6193c7875f12576f181c5667', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '2831e642b359bdee33cd0fc9c3a7b87d9fc131c6', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'ad5ef3eb122fc5f9f590c990a5b53db3fdb364e4', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '1b5118c13fb9d2ee15f05f09f0000bb866f15c08', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '8b42dcf67ca00c93bd159239f5077da522e63347', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
