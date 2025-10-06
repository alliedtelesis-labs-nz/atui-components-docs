'use strict';

var index = require('./index-w3vomLqM.js');

const atSidebarMenuCss = "at-sidebar-menu{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px;overflow-y:auto;overflow-x:visible}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3cf12f22e99ddbc07dc2ecbfb1227b3e3644662a', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'c6d8725c9923c8911a4afd45967f9e1026827929' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
