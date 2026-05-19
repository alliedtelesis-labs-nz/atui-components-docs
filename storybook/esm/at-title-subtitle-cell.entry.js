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
        return (h(Host, { key: '5f9da270b7d1562b6e18fa8c9b03bc7006615d77', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '5a8b8e35d8b52f744c324b30c2ed78ac7c3372ff', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'db7d2873ccdd216f40898391bd98980e6c9cf509', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '583ac21231e324b03b06158edf875c29ebd9de2c', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '3843f87af1055c56b66210031b7f0a0362877722', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '7277bf14c2151ba72c445e5a51a1130fd6bd7bf8', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
