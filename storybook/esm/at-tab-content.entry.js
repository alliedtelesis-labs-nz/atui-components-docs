import { r as registerInstance, h, g as getElement } from './index-BlNBm0E8.js';

const AtTabContent = class {
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
        this.tabSelector = this.el.closest('at-tab-selector');
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
        return (h("div", { key: '1e0a2a17792af6ffbe54f7807c42ecfd01cded8b', class: `${this.isActive ? 'flex flex-col' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: '590c6637db6743d13a32418f61d9ee6c257625f7' })));
    }
    get el() { return getElement(this); }
};

export { AtTabContent as at_tab_content };
//# sourceMappingURL=at-tab-content.entry.js.map
