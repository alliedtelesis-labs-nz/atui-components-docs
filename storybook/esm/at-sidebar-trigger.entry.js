import { r as registerInstance, h, g as getElement } from './index-C8uvvL0O.js';

const AtSidebarTriggerComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isOpen = false;
        /**
         * Size of the button
         */
        this.size = 'lg';
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
        this.provider = this.el.closest('at-sidebar');
        await this.updateIsOpen();
    }
    render() {
        return (h("at-button", { key: 'd6ceb638cd355e7c996b88e959d949473617bfae', type: "secondary", size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return getElement(this); }
};

export { AtSidebarTriggerComponent as at_sidebar_trigger };
//# sourceMappingURL=at-sidebar-trigger.entry.js.map

//# sourceMappingURL=at-sidebar-trigger.entry.js.map