'use strict';

var index = require('./index-COiLLAKF.js');

const atSidebarMenuCss = ".sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'adeeda8671d768928e398998700a6344f3b1ff17', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '8bed64c1ca239573c06f5f91c86d8c0e037c23c0' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
