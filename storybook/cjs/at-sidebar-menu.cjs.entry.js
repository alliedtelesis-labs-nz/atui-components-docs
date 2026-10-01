'use strict';

var index = require('./index-B73N6Yu9.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7f0519ab8f8be24b00d95a8bd67665ef2387ef13', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '560c9c79ca2db35a9b4ada0f39a6931c089086c9' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
