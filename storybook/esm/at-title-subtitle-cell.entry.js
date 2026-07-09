import { r as registerInstance, a as getElement, h, H as Host } from './index-8e2OpwTu.js';

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
        return (h(Host, { key: '1b6d77e095e94e343084b60f64661a677ec303c4', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'b42c956c594afe9c279c565abf46bc1ab395ea5a', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'c15f97f1bd7e644bb2660db5b773ea8832f341d9', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '76e0806a25bcdb579bafc935472c4ac4fc750fd3', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '0599d6ae4ef764e85a06eb1ae30391836cd17ee3', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: 'ebf9556a461c653d93e3ffca614ffd4a1981d956', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
