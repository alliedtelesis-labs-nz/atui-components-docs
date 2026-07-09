'use strict';

var index = require('./index-DRsFs1GW.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '97e9a7f4c986ed76019f881ab27b2b04b21ae434', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'd070246e6808fade1d306b251a326e39d7ba731f' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
