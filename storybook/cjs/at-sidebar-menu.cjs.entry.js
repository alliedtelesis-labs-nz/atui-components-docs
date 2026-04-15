'use strict';

var index = require('./index-BRms7T38.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4c8712581dbb94dfcef0e1aec62b505b72d79979', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '911d2f37be4a6589914a92a6e0c1bb8f2168a74c' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
