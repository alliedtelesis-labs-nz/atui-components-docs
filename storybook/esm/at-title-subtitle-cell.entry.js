import { r as registerInstance, g as getElement, h, H as Host } from './index-jvbUuQtg.js';

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
        return (h(Host, { key: 'b1ef7cd7bb54affdc4b412046fbd46ef040366a1', class: "flex h-full items-center" }, h("at-tooltip", { key: '4f0332c4b2a2ae0e7f056c36577edaba4c7f4a08', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: '76f2876c71f2c4863d131f885f7952070f19d915', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'cc9d8cfa14c454be99c6828d9bc9a379883ca1ab', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '40401acd1073e7a52c4a95346b7076f97bddb4ee', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '0417e348d819b148ebaae6383fb80a5660acb32e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
