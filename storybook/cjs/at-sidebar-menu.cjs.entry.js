'use strict';

var index = require('./index-Dzqi4iVM.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '06b59000fdac2900450433b07221b554bb783917', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '52f0e5fedd206f1b67106a4cfc12c47fb0451487' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
