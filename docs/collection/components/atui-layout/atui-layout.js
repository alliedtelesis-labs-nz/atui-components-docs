import { h, Host } from "@stencil/core";
/**
 * @category Layout
 * @description A base layout component for structuring page content with flexible sections and responsive behavior. Provides foundation for consistent page layouts.
 *
 * @slot master - Used as the master element when template is master-detail
 * @slot detail - Used as the detail element when template is master-detail
 * @slot tabset-navigation - Used as the navigation element when template is tabset
 * @slot tabset-content - Used as the content element when template is tabset
 * @slot - Content when template is content-container
 */
export class AtuiLayout {
    constructor() {
        /**
         * Template used to display content
         */
        this.template = 'master-detail';
        /**
         * If overflow is allowed on the detail in master-detail
         */
        this.overflow = true;
    }
    get layoutElement() {
        switch (this.template) {
            case 'master-detail':
                return (h("div", { class: "flex h-full flex-grow overflow-hidden", "data-name": "wrapper-master-detail" }, h("div", { class: "flex w-sidebar flex-col overflow-hidden" }, h("slot", { name: "master" })), h("div", { class: `flex flex-grow flex-col ${this.overflow ? 'overflow-auto' : 'overflow-hidden'}` }, h("slot", { name: "detail" }))));
            case 'tabset':
                return (h("div", { class: "flex w-full flex-col", "data-name": "wrapper-tabset" }, h("slot", { name: "tabset-navigation" }), h("div", { class: "flex w-full flex-col overflow-auto" }, h("slot", { name: "tabset-content" }))));
            case 'content-container':
                return (h("div", { class: "flex flex-grow justify-center py-64", "data-name": "wrapper-content-container" }, h("div", { class: "flex max-w-3xl flex-grow flex-col" }, h("slot", null))));
        }
    }
    render() {
        return h(Host, { key: '2eb9250f40ae36f137808988eaa1ae3911b575b9' }, this.layoutElement);
    }
    static get is() { return "atui-layout"; }
    static get properties() {
        return {
            "template": {
                "type": "string",
                "attribute": "template",
                "mutable": false,
                "complexType": {
                    "original": "Template",
                    "resolved": "\"content-container\" | \"master-detail\" | \"tabset\"",
                    "references": {
                        "Template": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-layout/atui-layout.tsx",
                            "id": "src/components/atui-layout/atui-layout.tsx::Template"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Template used to display content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'master-detail'"
            },
            "overflow": {
                "type": "boolean",
                "attribute": "overflow",
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
                    "text": "If overflow is allowed on the detail in master-detail"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=atui-layout.js.map
