import { r as registerInstance, h, H as Host } from './index-DV1DLMEm.js';
import { c as cva } from './index-CVoOBWGd.js';

const AtuiLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
                return (h("div", { class: "flex h-full flex-grow overflow-hidden", "data-name": "wrapper-master-detail" }, h("div", { class: "flex w-sidebar flex-col overflow-hidden" }, h("slot", { name: "master" })), h("div", { class: `flex flex-grow flex-col ${this.overflow ? 'overflow-auto' : 'overflow-hidden'}` }, h("slot", { name: "detail" }))));
            case 'tabset':
                return (h("div", { class: "flex w-full flex-col", "data-name": "wrapper-tabset" }, h("slot", { name: "tabset-navigation" }), h("div", { class: "flex w-full flex-col overflow-auto" }, h("slot", { name: "tabset-content" }))));
            case 'content-container':
                return (h("div", { class: "flex flex-grow justify-center py-64", "data-name": "wrapper-content-container" }, h("div", { class: "flex max-w-3xl flex-grow flex-col" }, h("slot", null))));
        }
    }
    render() {
        return h(Host, { key: '2eb9250f40ae36f137808988eaa1ae3911b575b9' }, this.layoutElement);
    }
};

const variants = cva('transition[background-color,color,box-shadow] relative flex h-[40px] w-full cursor-pointer items-center gap-8 overflow-visible truncate rounded-md p-8 px-16 py-8 text-left text-body font-normal leading-[24px] duration-300 ease-in-out hover:bg-surface-1 focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-active-foreground/40', {
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
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '730c054bb654024e3fcf3c3495ea0ddfb03f7a5d', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: '7ed1ee6ceaefc7c62dff6d1a42345475afac3c7c', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: 'e8d0cb997a7aa94bf03d02706ad5822489bf1066' }))));
    }
};

export { AtuiLayout as atui_layout, AtuiTab as atui_tab };
//# sourceMappingURL=atui-layout.atui-tab.entry.js.map

//# sourceMappingURL=atui-layout_2.entry.js.map