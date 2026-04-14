'use strict';

var index = require('./index-BRms7T38.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '79796e26e04c9391c1af032cd36e83b32d3e608d', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'a9870bd9647f290ead6051af8fa23bffd993791e' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
