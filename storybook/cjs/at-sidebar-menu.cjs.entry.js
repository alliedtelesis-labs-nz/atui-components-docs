'use strict';

var index = require('./index-BVOcg3sk.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '86a0992f801ed902bf69d4d7550c2f7113dee704', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '0964020ff95a9d23710eb0dbb97a633c8bb9f8ee' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
