'use strict';

var index = require('./index-Dzqi4iVM.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'af8ebb428164ac3222f2dda6e33e2362acc8cebb', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '66db9a1bf59591ede2233fcb75bc6dda70d4127b' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
