'use strict';

var index = require('./index-BJDFmEHZ.js');
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
        return (index.h(index.Host, { key: 'dc87ecf21981d27adac26dabc4b3992e947bd788', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, index.h("div", { key: '949719cce7b18bd193de4754aff323875605a9d6', class: "flex items-center gap-8 truncate" }, index.h("slot", { key: 'cce7910563e328a7651855cd0dac29d93e850ed5', name: "menu-item-label" }), this.badge && (index.h("atui-badge", { key: 'd23f9b040f5c75b53366bf60d4be4031cd427be5', "data-name": "menu-badge", role: "presentation", class: "absolute left-[22px] top-[-8px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (index.h("span", { key: '0dae43873d34ed2e95540d0fa3e34c40aa70310a', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (index.h("span", { key: '1393ca53a35dac8aa6ab38545d93395bbda9a4ba', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), index.h("slot", { key: 'faf6d54c00a3997c4cab6eeb32c1270ad89d6a3d', name: "menu-item-actions" }), index.h("div", { key: '87ea20a8e99c182b02ad6b6c6b8217c6095df82b', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

exports.atui_sidebar_menuitem = AtuiSidebarMenuitemComponent;
//# sourceMappingURL=atui-sidebar-menuitem.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menuitem.cjs.entry.js.map