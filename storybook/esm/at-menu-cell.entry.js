import { r as registerInstance, g as getElement, h, H as Host } from './index-jvbUuQtg.js';

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
        return (h(Host, { key: '7da17d568e9131f2761d58b49def0237ed3baa29', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'aef6943ce5dd177c491113728e066de56e0b3f16', width: "fit-content", position: "left" }, h("at-button", { key: '39afbc6dafc10ee30fbf9a1c8a9f813e3fc5936b', type: "secondaryText", icon: this.params.icon ?? 'more_vert', slot: "menu-trigger" }), h("div", { key: '36db5d1621dc3631d3a29bb20732f1c9f9f87e6b', class: "flex flex-col" }, actions &&
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
