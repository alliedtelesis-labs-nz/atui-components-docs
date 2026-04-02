import { r as registerInstance, h, H as Host } from './index-C8uvvL0O.js';
import { c as classlist } from './classlist-Bfa-pAao.js';

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'text-sidebar-foreground',
        },
    },
};
const focusIndicatorVariantsConfig = {
    variants: {
        active: {
            true: 'group-hover:bg-blue-900/30 group-active:bg-blue-900/70',
            false: 'group-active:bg-surface-4/20 group-hover:bg-surface-4/10',
        },
    },
};
const AtSidebarMenuitemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const getClassname = classlist('group text-button focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
        });
        const getFocusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig);
        const focusIndicatorClassname = getFocusIndicatorClassname({
            active: this.is_active,
        });
        return (h(Host, { key: 'dfcdaa0f4dac1f49300324d53a4aa19cbde0b6bc', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, h("div", { key: 'e27686ec6c35b35b08bc30751975fb8fcb3e514f', class: "flex items-center gap-8 truncate" }, h("slot", { key: 'ca533ec09b00da17a677fbeba87262e8bc4ce051', name: "menu-item-label" }), this.badge && (h("at-badge", { key: '071b4190bcc92cc81b2683468ac73fce54960d4e', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute top-[-8px] left-[22px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !leading-[10px] !font-medium", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '89e4b93c849215e5eb0bc27baef6f07d913b6dfe', class: "material-icons text-icon-xl z-10 flex items-center justify-center p-2" }, this.icon)), this.label && (h("span", { key: '43e7f1e1acdffea38e7811f5dd85520601cf4c87', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: '7569fb35c16ef003ae505a514913116768a27e5a', name: "menu-item-actions" }), h("div", { key: '0ce4a8ab63d68170440253d397d9427e7d928d56', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
//# sourceMappingURL=at-sidebar-menuitem.entry.js.map

//# sourceMappingURL=at-sidebar-menuitem.entry.js.map