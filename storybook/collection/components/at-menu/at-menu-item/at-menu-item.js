import { h, Host } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variantsConfig = {
    variants: {
        disabled: {
            true: 'pointer-events-none opacity-30 grayscale-[1]',
            false: null,
        },
        active: {
            true: 'text-active-accent bg-active-accent/10',
            false: 'hover:bg-surface-1',
        },
    },
};
/**
 * @category Form Controls
 * @description A menu item component for use within dropdowns, context menus, or navigation lists. Supports icons, active/disabled states, and custom slot content. Emits an event when selected.
 *
 * @slot icon - Carbon icon displayed at the left of the menu item
 * @slot - Use this slot to add custom elements (e.g., icons, badges, actions) after the label section of the menu item. This allows for flexible extension of the menu item content.
 * @slot actions - Use this slot to add custom elements (e.g., icons, badges, actions) at the far right of the menu item.
 */
export class AtMenuitemComponent {
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active = false;
    /**
     * Disables user interaction with the menu-item and updates visual style to appear inactive
     */
    disabled = false;
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    render() {
        // at-menu moves focus onto the first item when it opens, so the focus
        // background must only paint for keyboard focus or a mouse-opened menu
        // looks like its first item is hovered.
        const getClassname = classlist('hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 has-[:focus-visible]:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item py-4 px-8 text-left transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (h(Host, { key: '77711dc88bcbf2df6058f115f9b32fd138e2749e', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, h("div", { key: 'dc01b39934e59c0c53d1256f08dddada62515c69', class: "flex min-w-0 flex-1" }, h("slot", { key: 'a5509e82c1b8832fc9856202d08581dba799a1eb', name: "icon", "data-name": "menu-item-icon" }), this.label && (h("span", { key: '6f1b6cf5eff73b1d5044256a7d5772562a91b89e', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'd8a64559a4c86368421fcd955cdf2a495e9971e6' })), h("slot", { key: 'b4c9a57c481cee9196b70ad8bc96441481eee281', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
    static get is() { return "at-menu-item"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
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
                "reflect": false,
                "attribute": "label"
            },
            "is_active": {
                "type": "boolean",
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
                "attribute": "is_active",
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables user interaction with the menu-item and updates visual style to appear inactive"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiClick",
                "name": "atuiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the button is clicked"
                },
                "complexType": {
                    "original": "AtEvent",
                    "resolved": "AtEvent",
                    "references": {
                        "AtEvent": {
                            "location": "import",
                            "path": "../../../types/events",
                            "id": "src/types/events.ts::AtEvent",
                            "referenceLocation": "AtEvent"
                        }
                    }
                }
            }];
    }
}
