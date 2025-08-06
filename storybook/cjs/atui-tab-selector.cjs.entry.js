'use strict';

var index = require('./index-43B6Ydvl.js');

const AtuiTabSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        /**
         * List of tabs the selector will have
         */
        this.tabs = [];
        /**
         * Layout of the tabs
         */
        this.layout = 'horizontal';
        /**
         * hide navigation when you want to provide custom controls
         */
        this.hide_nav = false;
        this.tabsetId = `tabset-${Math.random().toString(36).substring(2, 11)}`;
    }
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
            return this.tabs.map((tab) => (index.h("atui-tab", { tab_id: tab.id, tab_title: tab.title, layout: this.layout, is_active: this.active_tab === tab.id, onClick: () => this.handleTabChange(tab.id) })));
        }
    }
    updateIndicatorPosition() {
        if (!this.indicatorRef || !this.containerRef)
            return;
        const activeTab = this.el.querySelector('atui-tab[data-active="true"]');
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
            return (index.h("atui-layout", { class: "flex flex-grow", template: "tabset", "data-name": "navigation-top" }, !this.hide_nav && (index.h("div", { slot: "tabset-navigation" }, index.h("nav", { role: "tablist", class: "relative flex flex-wrap border-b border-gray-200 text-center text-sm font-medium", id: `container-${this.tabsetId}` }, this.tabOptions, index.h("slot", { name: "tab-nav" }), index.h("div", { id: `indicator-${this.tabsetId}`, class: "pointer-events-none absolute bottom-0 z-10 mx-8 h-2 rounded-sm bg-active-foreground transition-[left] duration-150 ease-in-out", style: {
                    left: '0',
                    opacity: '0',
                }, "aria-hidden": "true", role: "presentation" })))), index.h("div", { role: "tabpanel", slot: "tabset-content" }, index.h("slot", null))));
        }
        if (this.layout === 'vertical') {
            return (index.h("atui-layout", { class: "flex flex-grow", template: "master-detail", "data-name": "navigation-left" }, index.h("div", { slot: "master" }, index.h("nav", { role: "tablist", class: "flex flex-grow flex-col pr-16" }, this.tabOptions, index.h("slot", { name: "tab-nav" }))), index.h("div", { role: "tabpanel", slot: "detail", class: "flex flex-grow flex-col" }, index.h("slot", null))));
        }
    }
    render() {
        return index.h(index.Host, { key: '7a0f19c2f3f74ff8d65fd458fba8add47308a61f' }, this.checkLayoutAndRender());
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "active_tab": ["handleActiveTabChange"]
    }; }
};

exports.atui_tab_selector = AtuiTabSelector;
//# sourceMappingURL=atui-tab-selector.entry.cjs.js.map

//# sourceMappingURL=atui-tab-selector.cjs.entry.js.map