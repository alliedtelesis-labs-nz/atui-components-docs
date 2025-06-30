'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiSidebarMenuSubComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7694db3e9bd93e5fe52d3c49eba485e16f554979', class: "sidebar-border mb-16 ml-16 mt-8 flex w-[calc(100%-16px)] flex-col gap-2 border-l border-solid border-sidebar-border/20 pl-8 group-data-[state=collapsed]/sidebar-wrapper:hidden", role: "menu", "data-name": "sidebar-sub-menu" }, index.h("slot", { key: '2e7c8945f9f7a7e7dabfcf0fb5c60825db144f64' })));
    }
};

exports.atui_sidebar_menu_sub = AtuiSidebarMenuSubComponent;
//# sourceMappingURL=atui-sidebar-menu-sub.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menu-sub.cjs.entry.js.map