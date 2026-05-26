import { h, Host } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block justify-center',
            vertical: 'flex justify-start',
        },
        active: {
            true: 'z-index-20 text-active-accent',
            false: 'text-muted hover:text-foreground',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-accent/15',
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
    el;
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.el.click();
        }
    }
    render() {
        const getClassname = classlist('group/tab text-button no-underline relative box-border flex cursor-pointer items-center gap-4 overflow-hidden rounded-input border border-solid border-transparent !font-medium capitalize transition-colors duration-150 ease-in-out p-8 outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-active-glow', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '7641dc9d262bff234bf556a6a5e7f2e2972153b8', role: "tab", tabindex: "0", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', "data-name": `tab-${this.tab_id}`, onKeyDown: (event) => this.handleKeyDown(event), class: `${classname} ${this.fill ? 'flex-1' : undefined}` }, this.tab_title, h("slot", { key: '6cee7a37d8d464a003cf22c1ae84d005ed3a1770' })));
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
                    "original": "AtTabTriggerLayout",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "AtTabTriggerLayout": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-tabs/at-tab-trigger/at-tab-trigger.tsx",
                            "id": "src/components/at-tabs/at-tab-trigger/at-tab-trigger.tsx::AtTabTriggerLayout"
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
    static get elementRef() { return "el"; }
}
