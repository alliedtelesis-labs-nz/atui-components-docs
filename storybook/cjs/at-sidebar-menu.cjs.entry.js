'use strict';

var index = require('./index-CZHE0nPQ.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '47808419643c1d7d6a60777d241cd3747903b1c9', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: 'db0c0cde290c1d71c782ec404dea7711d6ab9540' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
