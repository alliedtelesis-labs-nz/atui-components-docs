import { r as registerInstance, a as getElement, h, H as Host } from './index-BEGRcYEc.js';

const AtMenuCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    params;
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return false;
    }
    render() {
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'ec063635408108cddb7b602f39b81f84bbe96601', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '46251f45b7065e409b08f253f122c8508ca93360', width: "fit-content", position: "left" }, h("at-button", { key: 'e7189618584727e839de7d243a8cd4a63a6a5259', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '51d66c5af4df0a4136d6dcef4d120de5150a366c', slot: "icon", name: "overflow_menu" }))), h("div", { key: '094eac32c7cb51844f40f0d1f358f4e119c5ebe0', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("at-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("at-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", null, action.disabledTooltip))) : (h("at-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
};

export { AtMenuCell as at_menu_cell };
