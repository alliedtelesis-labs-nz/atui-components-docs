import { h, Host } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('transition[background-color,color,box-shadow] relative flex h-[40px] w-full cursor-pointer items-center gap-8 overflow-visible truncate rounded-md p-8 px-16 py-8 text-left text-body font-normal leading-[24px] duration-300 ease-in-out hover:bg-surface-1 focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-active-foreground/40', {
    variants: {
        layout: {
            horizontal: 'inline-block',
            vertical: 'flex',
        },
        active: {
            true: 'z-index-20 text-active-foreground',
            false: 'text-light',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-foreground/10',
        },
    ],
});
/**
 * @category Navigation
 * @description A tab component for the tab selector.
 */
export class AtuiTab {
    constructor() {
        /**
         * Styling based on the layout of the tabs
         */
        this.layout = 'horizontal';
    }
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.tabEl.click();
        }
    }
    render() {
        const classname = variants({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '309422c8e1a593f40ea593f54f9f1e09583276cf', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: 'cc2e003b86c95e530d04c93cbae271c5845b4aab', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: 'ac8690295c5b0c3aa49d76624af9224a388c5045' }))));
    }
    static get is() { return "atui-tab"; }
    static get properties() {
        return {
            "tab_id": {
                "type": "string",
                "attribute": "tab_id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ID of the tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tab_title": {
                "type": "string",
                "attribute": "tab_title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title to be displayed in the tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "Layout",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "Layout": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-tab-selector/atui-tab/atui-tab.tsx",
                            "id": "src/components/atui-tab-selector/atui-tab/atui-tab.tsx::Layout"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Styling based on the layout of the tabs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'horizontal'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Applies styling when active"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=atui-tab.js.map
