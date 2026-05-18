'use strict';

var index = require('./index--r5sCsiV.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b8fd4d9641c99fad6ea1d075bea5a44441beb477', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '9c6b1d2872c712a97ec223d3218507cdf71157c8' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
