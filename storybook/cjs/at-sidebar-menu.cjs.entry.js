'use strict';

var index = require('./index--r5sCsiV.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'de8bd42d50559a284dbe6a459cd968c487e06727', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'ef35ac8bfe2a0be0efbbf532beb7a635643a31b9' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
