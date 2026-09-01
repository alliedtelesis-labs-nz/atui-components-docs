'use strict';

var index = require('./index-BCGHtseN.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '63774b08beca71606571001c00fde792957ae8ee', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '52bf2cf7a255d22b40421eb15a166bfa9d1d0492' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
