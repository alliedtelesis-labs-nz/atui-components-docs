'use strict';

var index = require('./index-43B6Ydvl.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('group text-button focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none', {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'text-sidebar-foreground',
        },
    },
});
const focusIndicatorVariants = index$1.cva('pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', {
    variants: {
        active: {
            true: 'group-hover:bg-blue-900/30 group-active:bg-blue-900/70',
            false: 'group-active:bg-surface-4/20 group-hover:bg-surface-4/10',
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
        return (index.h(index.Host, { key: '3ee6a7b6060ac812b71bc35f1179af5f8f836e07', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, index.h("div", { key: 'fcba050b6f57b26af6e27321369168fa50000801', class: "flex items-center gap-8 truncate" }, index.h("slot", { key: 'fe71963752ac0f48f1a5b820fc41ce5e135fe47d', name: "menu-item-label" }), this.badge && (index.h("atui-badge", { key: 'be89ba6268b8e5211dc13c92c8a8e635b5bb0d02', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute top-[-8px] left-[22px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !leading-[10px] !font-medium", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (index.h("span", { key: '1a1e3fe67bab172498ea190032f6f13ba886726e', class: "material-icons text-icon-xl z-10 flex items-center justify-center p-2" }, this.icon)), this.label && (index.h("span", { key: '4cdb62b000410645f473ff5aa7277566c556a74d', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), index.h("slot", { key: 'd7e5a87f8fc6717482a1120418643d5a061d2124', name: "menu-item-actions" }), index.h("div", { key: '66f0e9929bea92a370d40c5b47fd52de75e0f733', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

exports.atui_sidebar_menuitem = AtuiSidebarMenuitemComponent;
//# sourceMappingURL=atui-sidebar-menuitem.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menuitem.cjs.entry.js.map