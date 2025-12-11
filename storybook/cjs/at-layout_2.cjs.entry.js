'use strict';

var index = require('./index-COiLLAKF.js');
var classlist = require('./classlist-BPb95vgj.js');

const AtLayout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Template used to display content
     */
    template = 'master-detail';
    /**
     * If overflow is allowed on the detail in master-detail
     */
    overflow = true;
    get layoutElement() {
        switch (this.template) {
            case 'master-detail':
                return (index.h("div", { class: "flex h-full flex-grow overflow-hidden", "data-name": "wrapper-master-detail" }, index.h("div", { class: "w-sidebar flex flex-col overflow-hidden" }, index.h("slot", { name: "master" })), index.h("div", { class: `flex flex-grow flex-col ${this.overflow ? 'overflow-auto' : 'overflow-hidden'}` }, index.h("slot", { name: "detail" }))));
            case 'tabset':
                return (index.h("div", { class: "flex w-full flex-col", "data-name": "wrapper-tabset" }, index.h("slot", { name: "tabset-navigation" }), index.h("div", { class: "flex w-full flex-col overflow-auto" }, index.h("slot", { name: "tabset-content" }))));
            case 'content-container':
                return (index.h("div", { class: "flex flex-grow justify-center py-64", "data-name": "wrapper-content-container" }, index.h("div", { class: "flex max-w-3xl flex-grow flex-col" }, index.h("slot", null))));
        }
    }
    render() {
        return index.h(index.Host, { key: '0b72794eb7d3ca3c380d865bed2dfa241681a0b5' }, this.layoutElement);
    }
};

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block',
            vertical: 'flex',
        },
        active: {
            true: 'z-index-20 text-active-foreground',
            false: 'text-light',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-foreground/10',
        },
    ],
};
const AtTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Title to be displayed in the tab
     */
    tab_title;
    /**
     * Styling based on the layout of the tabs
     */
    layout = 'horizontal';
    /**
     * Applies styling when active
     */
    is_active;
    tabEl;
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.tabEl.click();
        }
    }
    render() {
        const getClassname = classlist.classlist('group/tab text-button relative box-border flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out outline-none focus:outline-none', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (index.h(index.Host, { key: '74c002f1ba2c4b5d2265b74f87f2cfbf6342e8f1', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, index.h("a", { key: '0a8abdc07fed97c03430b52b86f64a09b998bd8e', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, index.h("slot", { key: 'efb7a678da989b5f5265e2b3d36cc873dddcab23' }))));
    }
};

exports.at_layout = AtLayout;
exports.at_tab = AtTab;
//# sourceMappingURL=at-layout.at-tab.entry.cjs.js.map
