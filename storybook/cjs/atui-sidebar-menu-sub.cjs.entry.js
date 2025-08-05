'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiSidebarMenuSubComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4279ab2c88d751b6e58762f455491c6914b75c8b', class: "sidebar-border mb-16 ml-16 mt-8 flex w-[calc(100%-16px)] flex-col gap-2 border-l border-solid border-sidebar-border/20 pl-8 group-data-[state=collapsed]/sidebar-wrapper:hidden", role: "menu", "data-name": "sidebar-sub-menu" }, index.h("slot", { key: '8956cacfab38a44c25935ed9936736439a8719c1' })));
    }
};

exports.atui_sidebar_menu_sub = AtuiSidebarMenuSubComponent;
//# sourceMappingURL=atui-sidebar-menu-sub.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menu-sub.cjs.entry.js.map