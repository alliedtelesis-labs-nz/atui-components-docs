'use strict';

var index = require('./index-BzuO8j9_.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9e2f044fb58f09f0176206aa06c90f17411c8314', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '2e507c7c8be7f56f88f2db3b9a03bc7200c68908' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
