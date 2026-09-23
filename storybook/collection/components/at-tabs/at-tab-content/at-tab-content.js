import { h, } from "@stencil/core";
/**
 * @category Navigation
 * @description A tab content component for the tab selector.
 * @event atuiActivate - Emitted the first time this panel's tab is selected, carrying its tab_id.
 * @slot - Use this slot to add custom elements within the tab content area.
 */
export class AtTabContent {
    el;
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Determines if the tab content is active
     */
    is_active = false;
    /**
     * True once this panel's tab has been selected at least once. Reflected, and
     * set before at-tabs emits atuiTabChange, so a consumer can defer building
     * expensive panel content until the tab is first opened.
     */
    has_activated = false;
    isActive = false;
    /**
     * Emits this panel's tab_id the first time its tab is selected
     */
    atuiActivate;
    tabSelector;
    componentWillLoad() {
        this.isActive = this.is_active;
        this.has_activated = this.has_activated || this.is_active;
    }
    async componentDidLoad() {
        this.tabSelector = this.el.closest('at-tabs');
        if (this.tabSelector) {
            const activeTab = await this.tabSelector.getActiveTab();
            this.setIsActive(activeTab);
            this.tabSelector.addEventListener('atuiTabChange', this.updateActiveState);
        }
    }
    disconnectedCallback() {
        if (this.tabSelector) {
            this.tabSelector.removeEventListener('atuiTabChange', this.updateActiveState);
        }
    }
    handleActivated(isActivated, wasActivated) {
        if (isActivated && !wasActivated) {
            this.atuiActivate.emit(this.tab_id);
        }
    }
    setIsActive(id) {
        this.isActive = id === this.tab_id;
        if (this.isActive) {
            this.has_activated = true;
        }
    }
    updateActiveState = (event) => {
        if (event.target !== this.tabSelector) {
            return;
        }
        this.setIsActive(event.detail);
    };
    render() {
        return (h("div", { key: 'ea4b0c87fd67c75afa91e60c7151f43e31a9fb8f', class: `${this.isActive ? 'flex flex-col focus-visible:outline-none' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: '1bee134ba3e13ff32e29feaed042697bb7e1bf2b' })));
    }
    static get is() { return "at-tab-content"; }
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
                    "text": "Determines if the tab content is active"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "is_active",
                "defaultValue": "false"
            },
            "has_activated": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "True once this panel's tab has been selected at least once. Reflected, and\nset before at-tabs emits atuiTabChange, so a consumer can defer building\nexpensive panel content until the tab is first opened."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "has_activated",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isActive": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiActivate",
                "name": "atuiActivate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits this panel's tab_id the first time its tab is selected"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "has_activated",
                "methodName": "handleActivated"
            }];
    }
}
