'use strict';

var index = require('./index-B7C6g-lb.js');
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
        return index.h(index.Host, { key: 'cb8647c8071179e0c1d9b30dc8ea543bc854e5e5' }, this.layoutElement);
    }
};

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block justify-center',
            vertical: 'flex justify-start',
        },
        active: {
            true: 'z-index-20 text-active-foreground',
            false: 'text-muted hover:text-foreground',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-background',
        },
    ],
};
const AtTabTrigger = class {
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
    /**
     * If true, the tab will fill the parent container's width.
     * Set by parent <at-tabs> to control layout.
     */
    fill = false;
    get el() { return index.getElement(this); }
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.el.click();
        }
    }
    render() {
        const getClassname = classlist.classlist('group/tab text-button no-underline relative box-border flex cursor-pointer items-center gap-4 overflow-hidden rounded-input border border-solid border-transparent !font-medium capitalize transition-colors duration-150 ease-in-out p-8 outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-active-glow', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (index.h(index.Host, { key: '492ab4814886f4279bb22af4d6e6debae814e8fd', role: "tab", tabindex: "0", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', "data-name": `tab-${this.tab_id}`, onKeyDown: (event) => this.handleKeyDown(event), class: `${classname} ${this.fill ? 'flex-1' : undefined}` }, this.tab_title, index.h("slot", { key: 'fbcad7fd7dab0016ace2031f59feed5d059080d8' })));
    }
};

exports.at_layout = AtLayout;
exports.at_tab_trigger = AtTabTrigger;
