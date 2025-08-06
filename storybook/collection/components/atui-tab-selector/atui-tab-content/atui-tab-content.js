import { h } from "@stencil/core";
/**
 * @category Navigation
 * @description A tab content component for the tab selector.
 */
export class AtuiTabContent {
    constructor() {
        /**
         * Determines if the tab content is active
         */
        this.is_active = false;
        this.isActive = false;
        this.updateActiveState = (event) => {
            const selectedTabId = event.detail;
            this.isActive = selectedTabId === this.tab_id;
        };
    }
    componentWillLoad() {
        this.isActive = this.is_active;
    }
    async componentDidLoad() {
        this.tabSelector = this.el.closest('atui-tab-selector');
        if (this.tabSelector) {
            const activeTab = await this.tabSelector.getActiveTab();
            this.setIsActive(activeTab);
            this.tabSelector.addEventListener('atuiChange', this.updateActiveState);
        }
    }
    disconnectedCallback() {
        if (this.tabSelector) {
            this.tabSelector.removeEventListener('atuiChangeId', this.updateActiveState);
        }
    }
    setIsActive(id) {
        this.isActive = id === this.tab_id;
    }
    render() {
        return (h("div", { key: '9545c07d798364b96ef11f755123f4bec877afa0', class: `${this.isActive ? 'flex flex-col' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: '27b9a3f768646eee14973554ae23254ebfa30205' })));
    }
    static get is() { return "atui-tab-content"; }
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
                    "text": "Determines if the tab content is active"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isActive": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-tab-content.js.map
