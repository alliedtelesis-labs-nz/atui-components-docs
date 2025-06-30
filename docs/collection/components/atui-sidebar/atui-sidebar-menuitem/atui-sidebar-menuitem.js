import { h, Host } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('group relative flex w-full cursor-pointer items-center gap-8 overflow-visible rounded-md p-8 text-left text-button transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
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
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 */
export class AtuiSidebarMenuitemComponent {
    render() {
        const classname = variants({
            active: this.is_active,
        });
        const focusIndicatorClassname = focusIndicatorVariants({
            active: this.is_active,
        });
        return (h(Host, { key: '45be74b5cb680a9d39f354404ab0732bd8daba28', role: "menuitem", class: classname }, this.badge && (h("div", { key: 'b5a74942ef89e4793284ae58847037bb00ea7c41', "data-name": "menu-badge", role: "presentation", class: "absolute left-[18px] top-[-4px] z-10" }, h("atui-badge", { key: 'dec2e8760c29b4c24cc2356c6acc693221ec936c', class: "!rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge }))), this.icon && (h("span", { key: '01316c57697ecd4e8966bc320ac9165d88c73357', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (h("span", { key: '549bfe0fe5cf2ae518ca79b63defdd8df101c7d1', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'edbb50244f8cd5038e5c8e1b53408895fff4ede7' }), h("div", { key: 'f17c11883053792f330a94e0a2903723c3acd33f', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    static get is() { return "atui-sidebar-menuitem"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label to be displayed for the menu item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Icon to be displayed with the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "badge": {
                "type": "string",
                "attribute": "badge",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Alert badge for the menu item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "is_active": {
                "type": "boolean",
                "attribute": "is_active",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Will change the styling of the menuitem when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=atui-sidebar-menuitem.js.map
