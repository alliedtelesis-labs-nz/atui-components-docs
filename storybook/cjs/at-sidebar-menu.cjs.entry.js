'use strict';

var index = require('./index-hahhWKrj.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9ea99ecc4a37c45cfd297bd20bed2aab293e0d73', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'da1d22d8b68ef07ef485ebfe3387ff99f392b2f3' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
