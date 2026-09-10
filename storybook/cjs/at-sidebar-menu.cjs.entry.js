'use strict';

var index = require('./index-zRWHCAJe.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b1c4a7f37bd9f00df861665abf1a58fdc6f02601', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '38773982e8a6a5c0587e7ddfcd3aa411d5bd36f5' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
