'use strict';

var index = require('./index-DK-3iCCu.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '08e3dd333ff5a782c127ecb054e364a7691f10d8', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '86b0ff490e4daefa6584383fad7cf333d756586d' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
