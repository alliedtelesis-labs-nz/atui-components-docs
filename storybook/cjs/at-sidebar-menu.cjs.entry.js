'use strict';

var index = require('./index-CA9vC8ae.js');

const atSidebarMenuCss = "at-sidebar-menu{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px;overflow-y:auto;overflow-x:visible}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8e74a756e45113ed7fbe9e1bf5bc06515aefc05e', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '7d7329f05938a8ce3dd5221da014bf8201f8fefc' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
