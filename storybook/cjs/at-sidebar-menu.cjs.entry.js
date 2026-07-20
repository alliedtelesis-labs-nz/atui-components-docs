'use strict';

var index = require('./index-e0g5edej.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c024531b0e88840a171292bed88452a44c96d44c', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'a7b84721c1c33a2058e08d5ab051b267c92733b2' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
