import { r as registerInstance, h, H as Host } from './index-CIq6mZ3i.js';
import { c as cva } from './index-CVoOBWGd.js';

const variants = cva('group relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left text-button transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'text-sidebar-foreground',
        },
    },
});
const focusIndicatorVariants = cva('pointer-events-none absolute left-0 top-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', {
    variants: {
        active: {
            true: 'group-hover:bg-blue-900/30 group-active:bg-blue-900/70',
            false: 'group-hover:bg-surface-4/10 group-active:bg-surface-4/20',
        },
    },
});
const AtuiSidebarMenuitemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classname = variants({
            active: this.is_active,
        });
        const focusIndicatorClassname = focusIndicatorVariants({
            active: this.is_active,
        });
        return (h(Host, { key: 'f8b46ab6a733c41cd5d6a5810435ee87cf375902', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, h("div", { key: 'ea373058c5a36026f1387c09bd11b73c515876b6', class: "flex items-center gap-8 truncate" }, h("slot", { key: 'e8dd2d3bcad30bf2e81a082c959cf6e38c168446', name: "menu-item-label" }), this.badge && (h("atui-badge", { key: 'dbc5a004e69971d8f254b10beb398d099cd30913', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute left-[22px] top-[-8px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '4e7d1bc6227de4132f768b5132fc101a8768b585', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (h("span", { key: 'a1554e9f4bd22b26c02badbda932798fb22c109e', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: 'f22bb9022cc6aeb0bac0746ce254573d23bb31f2', name: "menu-item-actions" }), h("div", { key: '8a9fa3ea981085a560a7fcc92f5a896936990816', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

export { AtuiSidebarMenuitemComponent as atui_sidebar_menuitem };
//# sourceMappingURL=atui-sidebar-menuitem.entry.js.map

//# sourceMappingURL=atui-sidebar-menuitem.entry.js.map