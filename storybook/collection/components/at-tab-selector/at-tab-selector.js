import { h, Host, } from "@stencil/core";
/**
 * ### interface Tab
 * ```
 * {
 *   id: string;
 *   title: string;
 * }
 * ```
 * @category Navigation
 * @description A tab selector component for switching between different content sections. Provides keyboard navigation and accessible tab panel management.
 *
 * @slot nav-content - Content to be placed after the tabs
 */
export class AtTabSelector {
    el;
    /**
     * List of tabs the selector will have
     */
    tabs = [];
    /**
     * Layout of the tabs
     */
    layout = 'horizontal';
    /**
     * hide navigation when you want to provide custom controls
     */
    hide_nav = false;
    /**
     * Sets the current active tab
     */
    active_tab;
    /**
     * Emits the id of the tab when a new active_tab is set
     */
    atuiChange;
    componentDidLoad() {
        this.updateIndicatorPosition();
    }
    componentDidUpdate() {
        this.updateIndicatorPosition();
    }
    handleActiveTabChange(newValue) {
        const activeTab = this.tabs.find((tab) => tab.id === newValue);
        if (activeTab) {
            this.atuiChange.emit(activeTab.id);
            requestAnimationFrame(() => {
                this.updateIndicatorPosition();
            });
        }
    }
    tabsetId = `tabset-${Math.random().toString(36).substring(2, 11)}`;
    get indicatorRef() {
        return this.el.querySelector(`#indicator-${this.tabsetId}`);
    }
    get containerRef() {
        return this.el.querySelector(`#container-${this.tabsetId}`);
    }
    handleTabChange(id) {
        this.active_tab = id;
    }
    /**
     * Gets the current active tab
     * @returns The current active_tab value
     */
    async getActiveTab() {
        return this.active_tab;
    }
    /**
     * Sets the current active tab
     * @param value - The tab id to set as active
     */
    async setActiveTab(value) {
        this.active_tab = value;
    }
    get tabOptions() {
        if (this.tabs) {
            return this.tabs.map((tab) => (h("at-tab", { tab_id: tab.id, tab_title: tab.title, layout: this.layout, is_active: this.active_tab === tab.id, onClick: () => this.handleTabChange(tab.id) })));
        }
    }
    updateIndicatorPosition() {
        if (!this.indicatorRef || !this.containerRef)
            return;
        const activeTab = this.el.querySelector('at-tab[data-active="true"]');
        if (activeTab) {
            const containerRect = this.containerRef.getBoundingClientRect();
            const buttonRect = activeTab.getBoundingClientRect();
            this.indicatorRef.style.width = `${buttonRect.width - 16}px`;
            this.indicatorRef.style.left = `${buttonRect.left - containerRect.left}px`;
            this.indicatorRef.style.opacity = '1';
        }
    }
    checkLayoutAndRender() {
        if (this.layout === 'horizontal') {
            return (h("at-layout", { class: "flex flex-grow", template: "tabset", "data-name": "navigation-top" }, !this.hide_nav && (h("div", { slot: "tabset-navigation" }, h("nav", { role: "tablist", class: "relative flex flex-wrap border-b border-gray-200 text-center text-sm font-medium", id: `container-${this.tabsetId}` }, this.tabOptions, h("slot", { name: "tab-nav" }), h("div", { id: `indicator-${this.tabsetId}`, class: "bg-active-foreground pointer-events-none absolute bottom-0 z-10 mx-8 h-2 rounded-sm transition-[left] duration-150 ease-in-out", style: {
                    left: '0',
                    opacity: '0',
                }, "aria-hidden": "true", role: "presentation" })))), h("div", { role: "tabpanel", slot: "tabset-content" }, h("slot", null))));
        }
        if (this.layout === 'vertical') {
            return (h("at-layout", { class: "flex flex-grow", template: "master-detail", "data-name": "navigation-left" }, h("div", { slot: "master" }, h("nav", { role: "tablist", class: "flex flex-grow flex-col pr-16" }, this.tabOptions, h("slot", { name: "tab-nav" }))), h("div", { role: "tabpanel", slot: "detail", class: "flex flex-grow flex-col" }, h("slot", null))));
        }
    }
    render() {
        return h(Host, { key: '8d6c4ffa425ebc01f51e0ffcc0b445917ecc8100' }, this.checkLayoutAndRender());
    }
    static get is() { return "at-tab-selector"; }
    static get properties() {
        return {
            "tabs": {
                "type": "unknown",
                "attribute": "tabs",
                "mutable": false,
                "complexType": {
                    "original": "Tab[]",
                    "resolved": "Tab[]",
                    "references": {
                        "Tab": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-tab-selector/at-tab-selector.tsx",
                            "id": "src/components/at-tab-selector/at-tab-selector.tsx::Tab"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of tabs the selector will have"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-tab-selector/at-tab-selector.tsx",
                            "id": "src/components/at-tab-selector/at-tab-selector.tsx::Layout"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout of the tabs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'horizontal'"
            },
            "hide_nav": {
                "type": "boolean",
                "attribute": "hide_nav",
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
                    "text": "hide navigation when you want to provide custom controls"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "active_tab": {
                "type": "string",
                "attribute": "active_tab",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the current active tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the id of the tab when a new active_tab is set"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "getActiveTab": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Gets the current active tab",
                    "tags": [{
                            "name": "returns",
                            "text": "The current active_tab value"
                        }]
                }
            },
            "setActiveTab": {
                "complexType": {
                    "signature": "(value: string) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "string",
                            "docs": "- The tab id to set as active"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets the current active tab",
                    "tags": [{
                            "name": "param",
                            "text": "value - The tab id to set as active"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "active_tab",
                "methodName": "handleActiveTabChange"
            }];
    }
}
/**
 * @category Form Controls
 * @description A tab selector component for switching between different content sections. Provides keyboard navigation and accessible tab panel management.
 */
//# sourceMappingURL=at-tab-selector.js.map
