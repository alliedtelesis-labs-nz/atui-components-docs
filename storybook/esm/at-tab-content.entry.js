import { r as registerInstance, a as getElement, h } from './index-HD-uhvb8.js';

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
            this.tabSelector.removeEventListener('atuiTabChange', this.updateActiveState);
        }
    }
    setIsActive(id) {
        this.isActive = id === this.tab_id;
    }
    updateActiveState = (event) => {
        if (event.target !== this.tabSelector) {
            return;
        }
        const selectedTabId = event.detail;
        this.isActive = selectedTabId === this.tab_id;
    };
    render() {
        return (h("div", { key: '78cf68346fb9a96c9b84ca3db9aa974530c33668', class: `${this.isActive ? 'flex flex-col focus-visible:outline-none' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: 'c85722ffd12888e3dca95f94579c874ac3c17185' })));
    }
};

export { AtTabContent as at_tab_content };
