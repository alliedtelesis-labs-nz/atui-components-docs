'use strict';

var index = require('./index-C7y9_-Ob.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '69ef99cd32f3bf947f0858df8be7a45450c7e828', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'ee2b4b21ad2f5733db0f1621dd27871a4cda54d7' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
