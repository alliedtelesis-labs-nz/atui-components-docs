import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '204082fe9c8bffe4467d2e58d2604ec44df0af33', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '7bc007cd944027fba24bc0285036997019d0c168', width: "fit-content", position: "left" }, h("at-button", { key: 'be369a6182a814d8e8ecccdec64a447ca215f538', type: "secondaryText", icon: this.params.icon, slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '60468304447e5c73e1967d5600c5fdd3505ddce6', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'f51bfafdf6d3ce23d943361f38e9c0cb939ef789', class: "flex flex-col" }, actions &&
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
