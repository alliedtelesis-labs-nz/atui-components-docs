import { h, Host } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block justify-center',
            vertical: 'flex justify-start',
        },
        active: {
            true: 'z-index-20 text-active-foreground focus:outline-2 focusfocus-visible:ring-active-foreground/30',
            false: 'text-light hover:bg-surface-1 focus-visible:ring-active-foreground/30',
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
        const getClassname = classlist('group/tab text-button relative box-border flex cursor-pointer items-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out p-8 outline-none focus-visible:ring-active-foreground/40 focus-visible:ring-2 focus-visible:z-20', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '390e1b07684e1998037fde33ff0e7658c418c87c', role: "tab", tabfocs: 0, "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}`, class: this.fill ? 'flex-1' : undefined }, h("a", { key: '1aa5d8fb2f02324a85f9ed3a2660762725c552aa', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '8fcbdf33f8e7c8ab8780ba5d782d086a7520e84c' }))));
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
