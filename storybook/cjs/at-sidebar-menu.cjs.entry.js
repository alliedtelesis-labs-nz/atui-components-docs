'use strict';

var index = require('./index--r5sCsiV.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '19f18d8a0da736812ab6872ff7b37e0eefff7992', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '9deeeff3cc25d71cb77d4d658aa91141eda8a858' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
