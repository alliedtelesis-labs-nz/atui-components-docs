'use strict';

var index = require('./index-DVvGgFNV.js');

const atSidebarMenuCss = ".sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5b09b31644a717a79c5abd418ae34a180227b61a', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '2de7091b6d224897bd0d55fc54b8158c40e381a1' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
