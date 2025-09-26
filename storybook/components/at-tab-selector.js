import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$3 } from './p-DYG46fqd.js';
import { d as defineCustomElement$2 } from './p-CaOfKwo4.js';

const AtTabSelector$1 = /*@__PURE__*/ proxyCustomElement(class AtTabSelector extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        return h(Host, { key: '2b71eff64cb07d464c7aa0abf9b15ecfdec7915a' }, this.checkLayoutAndRender());
    }
    get el() { return this; }
    static get watchers() { return {
        "active_tab": ["handleActiveTabChange"]
    }; }
}, [260, "at-tab-selector", {
        "tabs": [16],
        "layout": [1],
        "hide_nav": [4],
        "active_tab": [1025],
        "getActiveTab": [64],
        "setActiveTab": [64]
    }, undefined, {
        "active_tab": ["handleActiveTabChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-tab-selector", "at-layout", "at-tab"];
    components.forEach(tagName => { switch (tagName) {
        case "at-tab-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTabSelector$1);
            }
            break;
        case "at-layout":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tab":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtTabSelector = AtTabSelector$1;
const defineCustomElement = defineCustomElement$1;

export { AtTabSelector, defineCustomElement };
//# sourceMappingURL=at-tab-selector.js.map

//# sourceMappingURL=at-tab-selector.js.map