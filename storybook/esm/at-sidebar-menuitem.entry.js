import { r as registerInstance, a as getElement, h, H as Host } from './index-CzNdk2S6.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const atSidebarMenuitemCss = "[data-name=accordion-item-content] at-sidebar-menuitem span[data-name=sidebar-menu-item-label],at-menu at-sidebar-menuitem span[data-name=sidebar-menu-item-label]{font-weight:400}";

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'bg-secondary text-sidebar-foreground',
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
    }
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Icon to be displayed with the label
     */
    icon;
    /**
     * Alert badge for the menu item
     */
    badge;
    /**
     * Will change style to indicate menuitem is active when set
     */
    is_active;
    get el() { return getElement(this); }
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    render() {
        const getClassname = classlist('group text-button focus-visible:ring-active-foreground/30 font-medium relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
        });
        const getFocusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig);
        const focusIndicatorClassname = getFocusIndicatorClassname({
            active: this.is_active,
        });
        return (h(Host, { key: '10a159a33fd1a33e0e1da205787d9708d6db4efb', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname, tabIndex: 0, onKeyDown: this.handleKeyDown }, h("div", { key: '83a54fca2cf9aab6795844f68ee9945ebe11aece', class: "flex items-center gap-8 truncate" }, h("slot", { key: 'c3b35cefa4a484b522b2b698a9f33d1ec9dbf258', name: "menu-item-label" }), this.badge && (h("at-badge", { key: '568c99f805618cde6447a6a842f0e6f9138e41e2', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute top-[-8px] left-[22px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !leading-[10px] !font-medium", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: 'a41521cd5811ed5af0aeccc484cb8a4d1e9abfd0', class: "material-icons !text-icon-xl z-10 flex items-center justify-center p-2" }, this.icon)), this.label && (h("span", { key: 'ac2a2607127404a43a4d170dbcddf9c3ea035b74', "data-name": "sidebar-menu-item-label", class: "label z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: 'be4ca7ed03570d2eb1309c92a9354d0eedc9e166', name: "menu-item-actions" }), h("div", { key: '1268be04cb9d0d060ab3ee758e0c7461dbb0858b', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss;

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
//# sourceMappingURL=at-sidebar-menuitem.entry.js.map
