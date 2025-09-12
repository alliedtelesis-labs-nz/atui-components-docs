import { h, Host } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
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
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 */
export class AtuiSidebarMenuitemComponent {
    render() {
        const getClassname = classlist('group text-button focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
        });
        const getFocusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig);
        const focusIndicatorClassname = getFocusIndicatorClassname({
            active: this.is_active,
        });
        return (h(Host, { key: '979148b0723871fcb9bf2a6d091e84d0a21f67c6', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, h("div", { key: 'f5b3603769296a1f11fe13057b8bc290df181f7c', class: "flex items-center gap-8 truncate" }, h("slot", { key: '0e6d3fbac78cd6ed04f97ca51a6ab89e0c0faed2', name: "menu-item-label" }), this.badge && (h("atui-badge", { key: 'ad964e998c350d77ed62a7a5174844efdfa38a66', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute top-[-8px] left-[22px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !leading-[10px] !font-medium", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '9583d93f59208d353d58c14870112096b2844742', class: "material-icons text-icon-xl z-10 flex items-center justify-center p-2" }, this.icon)), this.label && (h("span", { key: '66811fdbc761898a94d8a7845fbd5f28930bcfdd', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: '308e3e9cbc2bb8fa934570378347ebb5bd9d5b78', name: "menu-item-actions" }), h("div", { key: 'd8181f64986c1abc8a8c9dc61d491b8420c7f07a', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
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
                "mutable": true,
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
