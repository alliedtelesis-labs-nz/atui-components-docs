'use strict';

var index = require('./index-COiLLAKF.js');

const atSidebarMenuCss = ".sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9715570f767e3bbba1c01b3caf768fb01ca5f0ab', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'f65c399fa0ac7ec2303a1331ff4ad7b391370368' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
