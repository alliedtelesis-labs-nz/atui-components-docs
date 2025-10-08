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
export class AtLayout {
    /**
     * Template used to display content
     */
    template = 'master-detail';
    /**
     * If overflow is allowed on the detail in master-detail
     */
    overflow = true;
    get layoutElement() {
        switch (this.template) {
            case 'master-detail':
                return (h("div", { class: "flex h-full flex-grow overflow-hidden", "data-name": "wrapper-master-detail" }, h("div", { class: "w-sidebar flex flex-col overflow-hidden" }, h("slot", { name: "master" })), h("div", { class: `flex flex-grow flex-col ${this.overflow ? 'overflow-auto' : 'overflow-hidden'}` }, h("slot", { name: "detail" }))));
            case 'tabset':
                return (h("div", { class: "flex w-full flex-col", "data-name": "wrapper-tabset" }, h("slot", { name: "tabset-navigation" }), h("div", { class: "flex w-full flex-col overflow-auto" }, h("slot", { name: "tabset-content" }))));
            case 'content-container':
                return (h("div", { class: "flex flex-grow justify-center py-64", "data-name": "wrapper-content-container" }, h("div", { class: "flex max-w-3xl flex-grow flex-col" }, h("slot", null))));
        }
    }
    render() {
        return h(Host, { key: '8161e8c489cf9c6510fdf8df3e9184ef3a292369' }, this.layoutElement);
    }
    static get is() { return "at-layout"; }
    static get properties() {
        return {
            "template": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Template",
                    "resolved": "\"content-container\" | \"master-detail\" | \"tabset\"",
                    "references": {
                        "Template": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-layout/at-layout.tsx",
                            "id": "src/components/at-layout/at-layout.tsx::Template"
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
                "attribute": "template",
                "defaultValue": "'master-detail'"
            },
            "overflow": {
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
                    "text": "If overflow is allowed on the detail in master-detail"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "overflow",
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=at-layout.js.map
