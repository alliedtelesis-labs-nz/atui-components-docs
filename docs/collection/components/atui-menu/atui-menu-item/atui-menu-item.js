import { h, Host } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('relative flex w-full cursor-pointer items-center gap-8 overflow-hidden truncate rounded-md p-8 text-left text-body font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-active-foreground/40', {
    variants: {
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'hover:bg-surface-1',
        },
    },
});
export class AtuiMenuitemComponent {
    constructor() {
        /**
         * Will change the styling of the menuitem when set
         */
        this.is_active = false;
    }
    render() {
        const classname = variants({
            active: this.is_active,
        });
        return (h(Host, { key: '1f69713d4fd0b434ef0f278a763e5edb6ee0ae5b', role: "menuitem", tabindex: "0", class: classname }, this.icon && (h("span", { key: '626f46a5aa575e042b6f4dede4fae5f6aae3a54c', "data-name": "menu-item-icon", class: "material-icons flex items-center justify-center text-icon-lg" }, this.icon)), this.label && (h("span", { key: '4e0f88af9411d935cee55c83eab190f0bbfdd81e', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'a2fb3787e398d9a23ab24da8dc2ba40a34f1f7d1' })));
    }
    static get is() { return "atui-menu-item"; }
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
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=atui-menu-item.js.map
