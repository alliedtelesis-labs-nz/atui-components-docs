'use strict';

var index = require('./index-D6_HFEr-.js');

const atSidebarMenuCss = () => `.sc-at-sidebar-menu-h{display:flex;min-width:0;flex:1;flex-direction:column}`;

const AtSidebarMenuComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        // No <slot />: Stencil relocates a scoped host's slotted children on every ancestor
        // render, and that moves items a framework inserts after load to the top of the menu.
        return (index.h(index.Host, { key: 'cc9bd60a15438a543f796e011a3597b4c4e0da3a', role: "menu", "data-name": "sidebar-menu" }));
    }
};
AtSidebarMenuComponent.style = atSidebarMenuCss();

exports.at_sidebar_menu = AtSidebarMenuComponent;
