'use strict';

var index = require('./index-CjCsBbN_.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a5e455c07655c22807a85255e79764f16a183f86', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '63a20be259e744e5ccc2c472162fb36f476cebee' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
