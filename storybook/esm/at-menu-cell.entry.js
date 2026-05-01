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
        return (h(Host, { key: '77d33d22d1a18f752b44ed00d0053a27c7c5645f', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '470cf21d1dabf15487cb15080f219ff4c730d23a', width: "fit-content", position: "left" }, h("at-button", { key: '469fb05b9eff0dd655a43256a14b9e84398ef29e', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '151e9207d966609161a27bf8a798e9c65a6c68b5', slot: "icon", name: "overflow_menu" }))), h("div", { key: '145c7d4003026227e123177cd298bf4e4ec68380', class: "flex flex-col" }, actions &&
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
