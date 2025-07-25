import { r as registerInstance, h, g as getElement } from './index-Cd7WF2gX.js';

const AtuiSidebarTriggerComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isOpen = false;
        /**
         * Size of the button
         */
        this.size = 'md';
    }
    async updateIsOpen() {
        if (this.provider && typeof this.provider.getIsOpen === 'function') {
            this.isOpen = await this.provider.getIsOpen();
        }
    }
    async toggleSidebar() {
        if (this.provider &&
            typeof this.provider.toggleSidebar === 'function') {
            await this.provider.toggleSidebar();
            await this.updateIsOpen();
        }
    }
    async componentDidLoad() {
        this.provider = this.el.closest('atui-sidebar');
        await this.updateIsOpen();
    }
    render() {
        return (h("atui-button", { key: '3aed72a8137c647e422e5290b0dcc3347569687f', type: "secondary", size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return getElement(this); }
};

export { AtuiSidebarTriggerComponent as atui_sidebar_trigger };
//# sourceMappingURL=atui-sidebar-trigger.entry.js.map

//# sourceMappingURL=atui-sidebar-trigger.entry.js.map