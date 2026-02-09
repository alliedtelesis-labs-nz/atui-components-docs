'use strict';

var index = require('./index-CzDB71Wy.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4184bb5d0c4bcaa5ca8c9cd106a0762ac957c6b4', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '6fc92d718d28522a7a18c5f1184cf6db6ba0aeb4' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
