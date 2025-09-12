'use strict';

var index = require('./index-i7hIKTeN.js');
var classlist = require('./classlist-BddvonaD.js');

const AtuiLayout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Template used to display content
         */
        this.template = 'master-detail';
        /**
         * If overflow is allowed on the detail in master-detail
         */
        this.overflow = true;
    }
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
        return index.h(index.Host, { key: '2eb9250f40ae36f137808988eaa1ae3911b575b9' }, this.layoutElement);
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
const AtuiTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Styling based on the layout of the tabs
         */
        this.layout = 'horizontal';
    }
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
        return (index.h(index.Host, { key: '1147d9b8d4d39f45ca13287e9b50a42f83eb3710', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, index.h("a", { key: 'ba5ecc1583c2d7678f202c8fc784dfc0bbf7bb0d', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, index.h("slot", { key: '42a79e350ebfb77946bc3484c22e0bee1cfb66b9' }))));
    }
};

exports.atui_layout = AtuiLayout;
exports.atui_tab = AtuiTab;
//# sourceMappingURL=atui-layout.atui-tab.entry.cjs.js.map

//# sourceMappingURL=atui-layout_2.cjs.entry.js.map