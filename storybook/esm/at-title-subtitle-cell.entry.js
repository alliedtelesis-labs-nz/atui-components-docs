import { r as registerInstance, a as getElement, h, H as Host } from './index-CFoMekA-.js';

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
        return (h(Host, { key: 'e87822234b08baf560082e9b365a91b3593ffc66', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '0e63b497e68a4388bba6a36b92f3d45ca9769bed', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'ef61d2758b2b619d4562ba42839bf29f2e2a4294', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '9cc5add5f4679e67c720c9eec457f906442a4e71', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '384f502a370c6a6e8bb00004650b1c8845412543', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '1601695f6e48173fdc8a2852dfdf0ccf59dd55fb', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
