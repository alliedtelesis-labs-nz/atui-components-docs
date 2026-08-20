'use strict';

var index = require('./index-B7bW4GPk.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2c5678b968c5258a58ef37af08b147d099054a83', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'ae32fc81c27ae8856f4bbd95490796ad5215615b' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
