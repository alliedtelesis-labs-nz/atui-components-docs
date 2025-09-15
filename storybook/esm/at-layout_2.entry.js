import { r as registerInstance, h, H as Host } from './index-C8uvvL0O.js';
import { c as classlist } from './classlist-Bfa-pAao.js';

const AtLayout = class {
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
                return (h("div", { class: "flex h-full flex-grow overflow-hidden", "data-name": "wrapper-master-detail" }, h("div", { class: "w-sidebar flex flex-col overflow-hidden" }, h("slot", { name: "master" })), h("div", { class: `flex flex-grow flex-col ${this.overflow ? 'overflow-auto' : 'overflow-hidden'}` }, h("slot", { name: "detail" }))));
            case 'tabset':
                return (h("div", { class: "flex w-full flex-col", "data-name": "wrapper-tabset" }, h("slot", { name: "tabset-navigation" }), h("div", { class: "flex w-full flex-col overflow-auto" }, h("slot", { name: "tabset-content" }))));
            case 'content-container':
                return (h("div", { class: "flex flex-grow justify-center py-64", "data-name": "wrapper-content-container" }, h("div", { class: "flex max-w-3xl flex-grow flex-col" }, h("slot", null))));
        }
    }
    render() {
        return h(Host, { key: 'a833b473fc3cfda88b7bb46125fdfdc4bb56dea9' }, this.layoutElement);
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
        const getClassname = classlist('group/tab text-button relative box-border flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out outline-none focus:outline-none', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '8b23a39aadf7647b9c53ec5df3d1d15cd93affc3', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: '1cfe93744a35a96f97f0b7d1ea4bf6308d431d6c', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '2ba439225f03786d6fc91b46b2a450bc319afa34' }))));
    }
};

export { AtLayout as at_layout, AtTab as at_tab };
//# sourceMappingURL=at-layout.at-tab.entry.js.map

//# sourceMappingURL=at-layout_2.entry.js.map