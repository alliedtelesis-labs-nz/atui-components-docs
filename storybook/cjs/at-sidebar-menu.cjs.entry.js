'use strict';

var index = require('./index-CA9vC8ae.js');

const atSidebarMenuCss = "at-sidebar-menu{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px;overflow-y:auto;overflow-x:visible}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b75cd861fa8082e9767ce9e85a279d2d4c5aaefd', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'b7b8042413149e880558b066fb29402d5246e94b' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
