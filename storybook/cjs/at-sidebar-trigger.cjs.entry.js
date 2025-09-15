'use strict';

var index = require('./index-i7hIKTeN.js');

const AtSidebarTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("at-button", { key: 'd6ceb638cd355e7c996b88e959d949473617bfae', type: "secondary", size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return index.getElement(this); }
};

exports.at_sidebar_trigger = AtSidebarTriggerComponent;
//# sourceMappingURL=at-sidebar-trigger.entry.cjs.js.map

//# sourceMappingURL=at-sidebar-trigger.cjs.entry.js.map