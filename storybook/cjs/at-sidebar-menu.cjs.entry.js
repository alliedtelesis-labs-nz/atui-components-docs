'use strict';

var index = require('./index-BRms7T38.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '50978e0ec34c4b5cc3ed42bc958143e65a7bf73c', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '5e5687fd2994b585af0d853a8703e172e2b30db2' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
