import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-EP34iaAr.js';

const AtTabSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    get el() { return getElement(this); }
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
        return h(Host, { key: '9d90e08dc90cbb2b5c96f30f0ec8a1e6d861e405' }, this.checkLayoutAndRender());
    }
    static get watchers() { return {
        "active_tab": ["handleActiveTabChange"]
    }; }
};

export { AtTabSelector as at_tab_selector };
//# sourceMappingURL=at-tab-selector.entry.js.map
