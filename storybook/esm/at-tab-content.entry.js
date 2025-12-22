import { r as registerInstance, g as getElement, h } from './index-EP34iaAr.js';

const AtTabContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Determines if the tab content is active
     */
    is_active = false;
    isActive = false;
    tabSelector;
    componentWillLoad() {
        this.isActive = this.is_active;
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
            this.tabSelector.removeEventListener('atuiChangeId', this.updateActiveState);
        }
    }
    setIsActive(id) {
        this.isActive = id === this.tab_id;
    }
    updateActiveState = (event) => {
        const selectedTabId = event.detail;
        this.isActive = selectedTabId === this.tab_id;
    };
    render() {
        return (h("div", { key: '8d2b1cf26bd893c6b06d07ff9869f6ca3c68ee4f', class: `${this.isActive ? 'flex flex-col focus-visible:outline-none' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: 'fde98724d744209c7bfda4d7afa447b58d7db70f' })));
    }
};

export { AtTabContent as at_tab_content };
//# sourceMappingURL=at-tab-content.entry.js.map
