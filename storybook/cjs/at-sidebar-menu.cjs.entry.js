'use strict';

var index = require('./index-Bo1AxtqW.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5703f7120ed8310c96dc46e65e88a15462bd6871', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '29ffde7edfebac23bd7aadbb06ccf428907de6f2' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
