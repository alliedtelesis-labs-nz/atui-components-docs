import { r as registerInstance, a as getElement, h, H as Host } from './index-BQ4XN8sR.js';

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
        return (h(Host, { key: 'fb1fdb08437ae54c686741d06cb533b44e45bc6f', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '059599953745df60d6e0ea64e190fb2a37d7f91b', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '4eb2940d5fe0f4b8bb5d355a3ef83fb4d651af14', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '09ee3c25d9cdfd532ba29fc8728febc847ab9aef', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'c4a19fd7d60ef13baf71bf2deca844d444229d9a', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '429f012aa71cce48ba5b6670e7a2cd546eee573f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
