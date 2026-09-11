'use strict';

var index = require('./index-DLWZuLsW.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '09148cdaf81764a2774e2984d1f27b8a3def3899', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'a09311f6642c171b7e997d296ff0b29050aa817a' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
