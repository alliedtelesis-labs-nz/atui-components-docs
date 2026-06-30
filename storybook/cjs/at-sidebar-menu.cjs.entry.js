'use strict';

var index = require('./index-l94cJki_.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7a07ca2993533474e7e5dc4f91522140e42c8ce1', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '4524a4d0fd85d078a67b228166c1bf606127b070' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
