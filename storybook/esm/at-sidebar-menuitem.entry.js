import { r as registerInstance, h, H as Host, g as getElement } from './index-C8uvvL0O.js';
import { c as classlist } from './classlist-Bfa-pAao.js';

const atSidebarMenuitemCss = "[data-name=accordion-item-content] at-sidebar-menuitem span[data-name=sidebar-menu-item-label],at-menu at-sidebar-menuitem span[data-name=sidebar-menu-item-label]{font-weight:400}";

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
            true: 'group-hover:bg-blue-900/30 ',
            false: 'group-hover:bg-slate-400/10',
        },
    },
};
const AtSidebarMenuitemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.el.click();
            }
        };
    }
    render() {
        const getClassname = classlist('group text-button focus-visible:ring-active-foreground/30 font-medium relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
        });
        const getFocusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig);
        const focusIndicatorClassname = getFocusIndicatorClassname({
            active: this.is_active,
        });
        return (h(Host, { key: '31315a80a6bf804f5682f42a0c9bc27de2018289', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname, tabIndex: 0, onKeyDown: this.handleKeyDown }, h("div", { key: 'd38fd0b4b2c822b493f8fd9545ee8386a15480b1', class: "flex items-center gap-8 truncate" }, h("slot", { key: '3f532f4394c633e2b4909447168196c6b8af62bc', name: "menu-item-label" }), this.badge && (h("at-badge", { key: 'f0b24c851ef88fe130efe25b9b86053c52bcb453', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute top-[-8px] left-[22px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !leading-[10px] !font-medium", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: 'e90fe3cb4c50e8bd4beb2f0d90a628b90d7f557f', class: "material-icons text-icon-xl z-10 flex items-center justify-center p-2" }, this.icon)), this.label && (h("span", { key: 'bb9e139562f75e0eb03025268758a75a2a12e2d8', "data-name": "sidebar-menu-item-label", class: "label z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: 'd482ff0c96b759a3c9ed12de75a552c2e627d799', name: "menu-item-actions" }), h("div", { key: '8f24d324c54492c0866a3161af03665109d566ca', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    get el() { return getElement(this); }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss;

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
//# sourceMappingURL=at-sidebar-menuitem.entry.js.map

//# sourceMappingURL=at-sidebar-menuitem.entry.js.map