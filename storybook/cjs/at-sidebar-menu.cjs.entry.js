'use strict';

var index = require('./index-COiLLAKF.js');

const atSidebarMenuCss = ".sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '32e978734eb7da443094ee8740c919547b2de8bd', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'f0c77c4f9ebcf988e298c7e889a1ad418480f545' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
