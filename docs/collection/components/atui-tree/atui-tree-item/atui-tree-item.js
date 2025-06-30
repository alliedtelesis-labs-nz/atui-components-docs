import { Host, h, } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('group relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[0.3rem] bg-transparent text-button font-medium capitalize text-foreground outline-none duration-150 ease-in-out hover:bg-surface-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-focus:bg-slate-200', {
    variants: {
        disabled: {
            false: null,
            true: 'pointer-events-none opacity-30 grayscale-[1]',
        },
        size: {
            sm: 'px-4 py-4',
            md: 'px-8 py-[6px]',
            lg: 'px-8 py-8',
        },
    },
});
/**
 * @slot - Placed after the label, content is positioned at far right.
 */
export class AtuiTreeItemComponent {
    constructor() {
        /**
         * Size of the button
         */
        this.size = 'lg';
        /**
         * Determines whether to add the arrow indicator icon
         */
        this.has_children = false;
        /**
         * Determines the direction of the indicator arrow
         */
        this.selected = false;
        /**
         * When set the button's styling will change and will no longer be interactive
         */
        this.disabled = false;
    }
    handleClick(event) {
        this.atuiClick.emit(event);
    }
    handleKeyDown(event) {
        console.log('KeyDown:', event.key);
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            console.log('dsds');
            this.atuiClick.emit(event);
        }
    }
    render() {
        var _a;
        const classname = variants({
            disabled: this.disabled,
            size: this.size,
        });
        const depth = (_a = this.depth) !== null && _a !== void 0 ? _a : 0;
        const hasChildren = !!this.has_children;
        const indent = hasChildren ? `${depth * 20}px` : `${depth * 20 + 20}px`;
        return (h(Host, { key: '4f3c63fe34700c9a64934b94b620404b0690a3e5', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '17c2277e9ca19824d50ece105c3d7ee94799b9e2', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: '1a786baa7a1301150bf69486cd92aa429ca3ed99', class: "flex gap-4" }, this.has_children && (h("span", { key: '81f7eb051d9a9ffb4d05e44a11009e3cf135eedb', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: 'b91952eeda26c1c72414ec39aec2d62b1485339e', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label))), h("slot", { key: '9e35b0841750860ff370399aa883d0bc136152b0' })), h("div", { key: 'b654e32b0c7c9a980c905d97023aeed958055b45', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute left-0 top-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
    static get is() { return "atui-tree-item"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "TreeItemSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "TreeItemSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-tree/atui-tree-item/atui-tree-item.tsx",
                            "id": "src/components/atui-tree/atui-tree-item/atui-tree-item.tsx::TreeItemSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'lg'"
            },
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label to be displayed within the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "depth": {
                "type": "number",
                "attribute": "depth",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the indent of the tree item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "has_children": {
                "type": "boolean",
                "attribute": "has_children",
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
                    "text": "Determines whether to add the arrow indicator icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
                    "text": "Determines the direction of the indicator arrow"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "When set the button's styling will change and will no longer be interactive"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-tree-item.js.map
