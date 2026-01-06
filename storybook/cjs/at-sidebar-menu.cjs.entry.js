'use strict';

var index = require('./index-COiLLAKF.js');

const atSidebarMenuCss = ".sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}";

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8cf5b7aa5d0b902850127d0732f77ccf97ff9026', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'b76016f901ca8348b95f9e1d5038c4d0fa9a7c4c' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss;

exports.at_sidebar_menu = AtSidebarMenuComponent;
//# sourceMappingURL=at-sidebar-menu.entry.cjs.js.map
