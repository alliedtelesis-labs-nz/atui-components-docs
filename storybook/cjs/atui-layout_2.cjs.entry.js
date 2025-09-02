'use strict';

var index = require('./index-43B6Ydvl.js');
var index$1 = require('./index-palgSxc9.js');

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

const variants = index$1.cva('transition[background-color,color,box-shadow] text-body hover:bg-surface-1 focus-visible:ring-active-foreground/40 relative flex h-[40px] w-full cursor-pointer items-center gap-8 truncate overflow-visible rounded-md p-8 px-16 py-8 text-left leading-[24px] font-normal duration-300 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset', {
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
});
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
        const classname = variants({
            layout: this.layout,
            active: this.is_active,
        });
        return (index.h(index.Host, { key: '4935a769aaba8d0bbd2cd3374d931d7338546e14', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, index.h("a", { key: '1fe0e278045bbb6f96661d83417e20ff2302fb61', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, index.h("slot", { key: '2c30b2689b206cd2b1c8cfaf83c00aea4a15960b' }))));
    }
};

exports.atui_layout = AtuiLayout;
exports.atui_tab = AtuiTab;
//# sourceMappingURL=atui-layout.atui-tab.entry.cjs.js.map

//# sourceMappingURL=atui-layout_2.cjs.entry.js.map