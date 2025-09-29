'use strict';

var index = require('./index-i7hIKTeN.js');

const AtTabContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'eedbb8e6c3c8e30dc42356056663c98194ea8162', class: `${this.isActive ? 'flex flex-col' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, index.h("slot", { key: 'eba946c75b68e5bc7fafdcf55e07faf86a35cf49' })));
    }
    get el() { return index.getElement(this); }
};

exports.at_tab_content = AtTabContent;
//# sourceMappingURL=at-tab-content.entry.cjs.js.map

//# sourceMappingURL=at-tab-content.cjs.entry.js.map