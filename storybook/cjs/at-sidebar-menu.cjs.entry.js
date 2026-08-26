'use strict';

var index = require('./index-ToR1OkrH.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '641cc48c0e76088dccde0976a41c296441f144f7', role: "menu", "data-name": "sidebar-menu" }, index.h("slot", { key: '68c1249f94d43fa1e44c5a58c0a8c5b95b509232' })));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
