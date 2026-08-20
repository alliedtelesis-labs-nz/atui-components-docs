'use strict';

var index = require('./index-B7bW4GPk.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2a83335429a7ffa6e604d0f13cc25424777336d8', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '21b61f1730c2595f1b8d85b564958e0b9aae23bd' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
