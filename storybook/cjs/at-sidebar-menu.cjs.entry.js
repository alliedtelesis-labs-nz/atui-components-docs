'use strict';

var index = require('./index-CzDB71Wy.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '23fee99189b98c52680401dba2df40504ee9979f', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '0c4a177339913c07477b6aefd71a1d78091ebb37' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
