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
        return (h(Host, { key: '539a783351b913ef72a1060d4cc33c830d0e9e4d', class: "flex h-full items-center" }, h("at-tooltip", { key: 'ec52df9ba94f081875cec8d69aee567f20656172', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: '01d5afafb2ddc44afa03caea062d581a629290a0', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'e446e5649fb5f2aaa07e0cac312773de4bb08724', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'b8f31b63dbee0702e03eef37ad769aced06b6903', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '79355d90f0a9c071329a4681c73dcf1ebc159ece', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
