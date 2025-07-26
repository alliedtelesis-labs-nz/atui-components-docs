import { r as registerInstance, h, g as getElement } from './index-Cd7WF2gX.js';

const AtuiTabContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};

export { AtuiTabContent as atui_tab_content };
//# sourceMappingURL=atui-tab-content.entry.js.map

//# sourceMappingURL=atui-tab-content.entry.js.map