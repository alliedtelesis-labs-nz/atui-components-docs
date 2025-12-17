import { h, Host } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block ',
            vertical: 'flex',
        },
        active: {
            true: 'z-index-20 text-active-foreground',
            false: 'text-light hover:bg-surface-1',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-foreground/10',
        },
    ],
};
/**
 * @category Navigation
 * @description A tab trigger component for the tab selector.
 * @slot - Use this slot to add custom elements after the tab title.
 */
export class AtTabTrigger {
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Title to be displayed in the tab
     */
    tab_title;
    /**
     * Styling based on the layout of the tabs
     */
    layout = 'horizontal';
    /**
     * Applies styling when active
     */
    is_active;
    /**
     * If true, the tab will fill the parent container's width.
     * Set by parent <at-tabs> to control layout.
     */
    fill = false;
    tabEl;
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.tabEl.click();
        }
    }
    render() {
        const getClassname = classlist('group/tab text-button relative box-border flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out outline-none focus:outline-none p-8 ', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '2504abc0d76b0b7b112039275dc424e8e65bd3e2', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}`, class: this.fill ? 'flex-1' : undefined }, h("a", { key: '3e096c20b1aef3884f941f0be99ff44d960ee9fd', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: 'fbaf82507d01c1de2a177b35e55d823bff3ca6d4' }))));
    }
    static get is() { return "at-tab-trigger"; }
    static get properties() {
        return {
            "tab_id": {
                "type": "string",
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
                "reflect": false,
                "attribute": "tab_id"
            },
            "tab_title": {
                "type": "string",
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
                "reflect": false,
                "attribute": "tab_title"
            },
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Layout",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "Layout": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-tabs/at-tab-trigger/at-tab-trigger.tsx",
                            "id": "src/components/at-tabs/at-tab-trigger/at-tab-trigger.tsx::Layout"
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
                "attribute": "layout",
                "defaultValue": "'horizontal'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Applies styling when active"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_active"
            },
            "fill": {
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
                    "text": "If true, the tab will fill the parent container's width.\nSet by parent <at-tabs> to control layout."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "fill",
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=at-tab-trigger.js.map
