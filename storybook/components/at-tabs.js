import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$3 } from './p-DbvFmY1f.js';
import { d as defineCustomElement$2 } from './p-Cw-cuNLd.js';

const AtTabs$1 = /*@__PURE__*/ proxyCustomElement(class AtTabs extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiTabChange = createEvent(this, "atuiTabChange", 3);
    }
    get el() { return this; }
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
        return h(Host, { key: 'af1f0efa1ac5fe6e21ca48b910a5de79abb37daf' }, this.checkLayoutAndRender());
    }
    static get watchers() { return {
        "active_tab": ["handleActiveTabChange"]
    }; }
}, [260, "at-tabs", {
        "tabs": [16],
        "layout": [1],
        "hide_nav": [4],
        "active_tab": [1025],
        "fill": [4],
        "getActiveTab": [64],
        "setActiveTab": [64]
    }, undefined, {
        "active_tab": ["handleActiveTabChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-tabs", "at-layout", "at-tab-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "at-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTabs$1);
            }
            break;
        case "at-layout":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tab-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtTabs = AtTabs$1;
const defineCustomElement = defineCustomElement$1;

export { AtTabs, defineCustomElement };
//# sourceMappingURL=at-tabs.js.map

//# sourceMappingURL=at-tabs.js.map