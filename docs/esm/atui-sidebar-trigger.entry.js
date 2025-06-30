import { r as registerInstance, h, g as getElement } from './index-HJO1YDmC.js';

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
        return (h("atui-button", { key: '649737b2866e905d2e4ff22a3247c620cd0f368c', type: "secondary", size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return getElement(this); }
};

export { AtuiSidebarTriggerComponent as atui_sidebar_trigger };
//# sourceMappingURL=atui-sidebar-trigger.entry.js.map

//# sourceMappingURL=atui-sidebar-trigger.entry.js.map