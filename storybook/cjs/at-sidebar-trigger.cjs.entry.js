'use strict';

var index = require('./index-LVEefvKk.js');

const AtSidebarTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isOpen = false;
        /**
         * Size of the button
         */
        this.size = 'lg';
        /**
         * Theme of the button. Default secondary
         */
        this.type = 'secondary';
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
        return (index.h("at-button", { key: 'bb0f5a2001355e3fad0fdbed2a6a5630255f5d85', type: this.type, size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return index.getElement(this); }
};

exports.at_sidebar_trigger = AtSidebarTriggerComponent;
//# sourceMappingURL=at-sidebar-trigger.entry.cjs.js.map
