'use strict';

var index = require('./index-CzDB71Wy.js');

const AtTabContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h("div", { key: 'c1071cb11508e5e5113acb95670580d8db00908e', class: `${this.isActive ? 'flex flex-col focus-visible:outline-none' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, index.h("slot", { key: 'd2773e53453e571129011179c7fa5f79ea4d9921' })));
    }
};

exports.at_tab_content = AtTabContent;
