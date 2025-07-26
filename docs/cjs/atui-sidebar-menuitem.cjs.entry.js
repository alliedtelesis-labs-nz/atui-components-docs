'use strict';

var index = require('./index-BAt2i-T2.js');
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
        return (index.h(index.Host, { key: '3ee6a7b6060ac812b71bc35f1179af5f8f836e07', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, index.h("div", { key: 'fcba050b6f57b26af6e27321369168fa50000801', class: "flex items-center gap-8 truncate" }, index.h("slot", { key: 'fe71963752ac0f48f1a5b820fc41ce5e135fe47d', name: "menu-item-label" }), this.badge && (index.h("atui-badge", { key: 'be89ba6268b8e5211dc13c92c8a8e635b5bb0d02', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute left-[22px] top-[-8px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (index.h("span", { key: 'f462ddfa547c5c38a14585bbae0a60cffd935ce4', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (index.h("span", { key: '6f72e1b0281b66d1cbf1ce56bc88f4120a955c15', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), index.h("slot", { key: 'd606a3e7c3ee32cd32c5e825bca90623219d30a5', name: "menu-item-actions" }), index.h("div", { key: 'f161abdfcbb78a2bf8a25c6d36e37fd773938f3a', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

exports.atui_sidebar_menuitem = AtuiSidebarMenuitemComponent;
//# sourceMappingURL=atui-sidebar-menuitem.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menuitem.cjs.entry.js.map