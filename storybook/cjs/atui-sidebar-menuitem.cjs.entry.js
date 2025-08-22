'use strict';

var index = require('./index-s6Ut5Yq6.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('group relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left text-button transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'text-sidebar-foreground',
        },
    },
});
const focusIndicatorVariants = index$1.cva('pointer-events-none absolute left-0 top-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', {
    variants: {
        active: {
            true: 'group-hover:bg-blue-900/30 group-active:bg-blue-900/70',
            false: 'group-hover:bg-surface-4/10 group-active:bg-surface-4/20',
        },
    },
});
const AtuiSidebarMenuitemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const classname = variants({
            active: this.is_active,
        });
        const focusIndicatorClassname = focusIndicatorVariants({
            active: this.is_active,
        });
        return (index.h(index.Host, { key: 'f8b46ab6a733c41cd5d6a5810435ee87cf375902', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, index.h("div", { key: 'ea373058c5a36026f1387c09bd11b73c515876b6', class: "flex items-center gap-8 truncate" }, index.h("slot", { key: 'e8dd2d3bcad30bf2e81a082c959cf6e38c168446', name: "menu-item-label" }), this.badge && (index.h("atui-badge", { key: 'dbc5a004e69971d8f254b10beb398d099cd30913', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute left-[22px] top-[-8px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (index.h("span", { key: '4e7d1bc6227de4132f768b5132fc101a8768b585', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (index.h("span", { key: 'a1554e9f4bd22b26c02badbda932798fb22c109e', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), index.h("slot", { key: 'f22bb9022cc6aeb0bac0746ce254573d23bb31f2', name: "menu-item-actions" }), index.h("div", { key: '8a9fa3ea981085a560a7fcc92f5a896936990816', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

exports.atui_sidebar_menuitem = AtuiSidebarMenuitemComponent;
//# sourceMappingURL=atui-sidebar-menuitem.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menuitem.cjs.entry.js.map