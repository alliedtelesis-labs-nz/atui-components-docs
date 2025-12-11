'use strict';

var index = require('./index-COiLLAKF.js');

const atSidebarMenuCss = ".sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ede650ac5a46ae0816617d26e780efb06a14e678', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'b158e32ba77ecbbcd39b05636678343a09e5484c' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
