'use strict';

var index = require('./index-DGivrgtr.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('group relative flex w-full cursor-pointer items-center gap-8 overflow-visible rounded-md p-8 text-left text-button transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
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
        return (index.h(index.Host, { key: 'fa61a0dbf5025d76fa20c9e167203c6433876d18', role: "menuitem", class: classname }, this.badge && (index.h("div", { key: 'ffd50c1d6131ce32b3d13fa9d6d9b939fe11dfea', "data-name": "menu-badge", role: "presentation", class: "absolute left-[18px] top-[-4px] z-10" }, index.h("atui-badge", { key: 'db5d533584b75347bec3a53353943918b5a56f53', class: "!rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge }))), this.icon && (index.h("span", { key: '83ccb7181cf51f56597e6713a1d350301c1c8716', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (index.h("span", { key: '33d93d058fe7aa5c7627828984574b2a52e7f20f', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: 'c0a4d662cc09e0de2cedf2506b688ac86a71de29' }), index.h("div", { key: '5d8089bbfc2371698c4b24f517d33e7055001961', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

exports.atui_sidebar_menuitem = AtuiSidebarMenuitemComponent;
//# sourceMappingURL=atui-sidebar-menuitem.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menuitem.cjs.entry.js.map