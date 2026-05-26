'use strict';

var index = require('./index--r5sCsiV.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'fe57cb89450e2138db5054a53dbb7cce94e0b9a1', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '850498d0f52471d8e2883a135867b5561e131644' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
