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
 * @description A tabs component for switching between different content sections. Provides keyboard navigation and accessible tab panel management. It acts as a controller.
 *
 * @slot nav-content - Content to be placed after the tabs
 * @slot tab-list - Used to place your own at-tab components instead of using the 'tabs' prop
 * @slot tab-content - Used to place your own at-tab-content component
 */
export class AtTabs {
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
     * If true, tabs will fill the width of the container
     * @default false
     */
    fill = false;
    /**
     * Emits the id of the tab when a new active_tab is set
     */
    atuiTabChange;
    tabEls = [];
    tabManualAdded = [];
    componentDidRender() {
        this.tabEls = this.getTabsElements();
        requestAnimationFrame(() => {
            this.initializeTabs();
            this.addEventListenersToTabs();
            requestAnimationFrame(() => {
                this.updateIndicatorPosition();
            });
        });
    }
    initializeTabs() {
        this.tabEls.forEach((tabEl) => {
            this.tabManualAdded.push({
                id: tabEl.tab_id,
                title: tabEl.tab_title,
            });
            tabEl.layout = this.layout;
            if (!this.active_tab && tabEl.is_active) {
                this.active_tab = tabEl.tab_id;
            }
            tabEl.is_active =
                !!this.active_tab && tabEl.tab_id === this.active_tab;
            tabEl.fill = this.fill;
        });
    }
    addEventListenersToTabs() {
        this.tabEls.forEach((tabEl) => {
            tabEl.addEventListener('click', () => {
                this.handleTabChange(tabEl.tab_id);
            });
        });
    }
    getTabsElements() {
        const navContainer = this.el.querySelector(`#container-${this.tabsetId}`);
        if (!navContainer)
            return [];
        return Array.from(navContainer.querySelectorAll('at-tab-trigger'));
    }
    componentDidUpdate() {
        this.updateIndicatorPosition();
    }
    handleActiveTabChange(newValue) {
        const activeTab = this.tabs.find((tab) => tab.id === newValue);
        const activeManualtab = this.tabManualAdded.find((tab) => tab.id === newValue);
        if (activeTab) {
            this.atuiTabChange.emit(activeTab.id);
            this.updateTabActiveStates(newValue);
            requestAnimationFrame(() => {
                this.updateIndicatorPosition();
            });
        }
        else if (activeManualtab) {
            this.atuiTabChange.emit(activeManualtab.id);
            this.updateTabActiveStates(newValue);
            requestAnimationFrame(() => {
                this.updateIndicatorPosition();
            });
        }
    }
    updateTabActiveStates(newValue) {
        this.tabEls.forEach((tab) => {
            tab.is_active = tab.tab_id === newValue;
        });
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
            return this.tabs.map((tab) => (h("at-tab-trigger", { tab_id: tab.id, tab_title: tab.title, layout: this.layout, is_active: this.active_tab === tab.id, fill: this.fill, onClick: () => this.handleTabChange(tab.id) })));
        }
    }
    updateIndicatorPosition() {
        if (!this.indicatorRef || !this.containerRef)
            return;
        const activeTab = this.el.querySelector('at-tab-trigger[data-active="true"]');
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
            return (h("at-layout", { class: "flex flex-grow", template: "tabset", "data-name": "navigation-top" }, !this.hide_nav && (h("div", { slot: "tabset-navigation" }, h("nav", { role: "tablist", class: "relative flex flex-wrap gap-2 border-b border-gray-200 px-2 text-center text-sm font-medium", id: `container-${this.tabsetId}` }, this.tabOptions, h("slot", { name: "tab-list" }), h("slot", { name: "tab-nav" }), h("div", { id: `indicator-${this.tabsetId}`, class: "bg-active-foreground pointer-events-none absolute bottom-0 z-10 mx-8 h-2 rounded-sm transition-[left] duration-150 ease-in-out", style: {
                    left: '0',
                    opacity: '0',
                }, "aria-hidden": "true", role: "presentation" })))), h("div", { role: "tabpanel", slot: "tabset-content" }, h("slot", { name: "tab-content" }))));
        }
        if (this.layout === 'vertical') {
            return (h("at-layout", { class: "flex flex-grow", template: "master-detail", "data-name": "navigation-left" }, h("div", { slot: "master" }, h("nav", { role: "tablist", class: "flex flex-grow flex-col p-[2px] p-[16px]", id: `container-${this.tabsetId}` }, this.tabOptions, h("slot", { name: "tab-list" }), h("slot", { name: "tab-nav" }))), h("div", { role: "tabpanel", slot: "detail", class: "flex-col] flex flex-grow" }, h("slot", { name: "tab-content" }))));
        }
    }
    render() {
        return h(Host, { key: 'b4146ba12fa7fd905d29b3391bd20e36a93d1e9c' }, this.checkLayoutAndRender());
    }
    static get is() { return "at-tabs"; }
    static get properties() {
        return {
            "tabs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtITab[]",
                    "resolved": "AtITab[]",
                    "references": {
                        "AtITab": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-tabs/at-tabs.tsx",
                            "id": "src/components/at-tabs/at-tabs.tsx::AtITab"
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
                "mutable": false,
                "complexType": {
                    "original": "AtTabsLayout",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "AtTabsLayout": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-tabs/at-tabs.tsx",
                            "id": "src/components/at-tabs/at-tabs.tsx::AtTabsLayout"
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
                "attribute": "layout",
                "defaultValue": "'horizontal'"
            },
            "hide_nav": {
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
                    "text": "hide navigation when you want to provide custom controls"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide_nav",
                "defaultValue": "false"
            },
            "active_tab": {
                "type": "string",
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
                "reflect": false,
                "attribute": "active_tab"
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
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "default",
                            "text": "false"
                        }],
                    "text": "If true, tabs will fill the width of the container"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "fill",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiTabChange",
                "name": "atuiTabChange",
                "bubbles": false,
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
