'use strict';

var index = require('./index-zRWHCAJe.js');

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
        return (index.h("div", { key: 'e7fc3a9e97bd4739b18bd32030c34daaacae0bfc', class: `${this.isActive ? 'flex flex-col focus-visible:outline-none' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, index.h("slot", { key: '66336e51b793213106f8fa4221b6cf779d9de2d8' })));
    }
};

exports.at_tab_content = AtTabContent;
