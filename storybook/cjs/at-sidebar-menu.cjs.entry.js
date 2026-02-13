'use strict';

var index = require('./index-CzDB71Wy.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f44b6aaa6313a502f0084691b93ebfa4cb9ab294', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '47f9531c01f9de086e81ec6ab7905b626fc044e3' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
