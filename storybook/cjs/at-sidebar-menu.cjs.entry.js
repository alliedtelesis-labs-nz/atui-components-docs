'use strict';

var index = require('./index-Bc1nzv_X.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4845438dd8a8bf83874659c163837f4c45584224', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'ddc18b1df86ede31e4be7c576c3b252466151e6e' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
