'use strict';

var index = require('./index-DK-3iCCu.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8d00c4dc36eab27454257375f1bf05a04ab269be', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '98487cfbae6dd0fee9e073ba58685a82074ee54c' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
