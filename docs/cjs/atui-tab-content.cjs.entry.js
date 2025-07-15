'use strict';

var index = require('./index-BJDFmEHZ.js');

const AtuiTabContent = class {
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
        return (index.h("div", { key: '06b99722607eee5b9c353d1877e6fd4ef61d4f18', class: `${this.isActive ? 'flex flex-col' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, index.h("slot", { key: '69c26ae7f30121798031bc08fdbc4d54478ff723' })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_tab_content = AtuiTabContent;
//# sourceMappingURL=atui-tab-content.entry.cjs.js.map

//# sourceMappingURL=atui-tab-content.cjs.entry.js.map