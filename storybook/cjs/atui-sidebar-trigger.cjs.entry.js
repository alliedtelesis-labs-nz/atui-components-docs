'use strict';

var index = require('./index-DSZ-ppzm.js');

const AtuiSidebarTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("atui-button", { key: 'bfa564d04411dbdc045942592a66cb715cbf880a', type: "secondary", size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    get el() { return index.getElement(this); }
};

exports.atui_sidebar_trigger = AtuiSidebarTriggerComponent;
//# sourceMappingURL=atui-sidebar-trigger.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-trigger.cjs.entry.js.map