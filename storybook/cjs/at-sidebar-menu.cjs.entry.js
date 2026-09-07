'use strict';

var index = require('./index-ByfMXhOa.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1b3be9c9d456b0de9ff278febea4ed147384f864', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'be2664459477a0d11899338e253ac8f795cd5961' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
