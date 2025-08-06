import { r as registerInstance, h } from './index-HJO1YDmC.js';

const panelVariants = {
    base: 'z-nav !fixed h-full min-w-panel-xs bg-white transition-transform shadow-md',
    origin: {
        left: 'left-0 top-0',
        right: 'right-0 top-0',
    },
    isExpanded: 'border-l-med border-l-2 transition-transform duration-[300ms] ease-[cubic-bezier(0.455,0.03,0.515,0.955)]',
    fixed: {
        true: 'fixed h-full top-0',
        false: 'absolute h-full',
    },
    noScrollbar: 'overflow-y-hidden',
};
const sizeVariants = {
    base: 'overflow-x-hidden overflow-y-auto h-full flex flex-col',
    size: {
        xs: 'w-panel-xs',
        sm: 'w-panel-sm',
        md: 'w-panel-md',
        lg: 'w-panel-lg',
        xl: 'w-panel-xl',
    },
};
const AtuiDialogComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Size of the size panel
         */
        this.size = 'xs';
        /**
         *  Position of the side panel
         */
        this.origin = 'right';
        /**
         * Puts a scrollbar on the sidepanel if set
         */
        this.has_scrollbar = true;
        /**
         * Displays a close button if set
         */
        this.has_close_button = true;
        /**
         * Will close the sidepanel if clicked off when set
         */
        this.close_backdrop = false;
        /**
         * If sidepanel should used fixed positioning (otherwise absolute)
         */
        this.fixed = true;
        this.isExpanded = false;
    }
    handleClose() {
        this.panelDialog.close();
        this.isExpanded = false;
    }
    get panelClasses() {
        return `${panelVariants.base} ${panelVariants.origin[this.origin]} ${this.isExpanded ? panelVariants.isExpanded : ''} 
        ${this.fixed ? panelVariants.fixed.true : panelVariants.fixed.false} ${!this.has_scrollbar ? panelVariants.noScrollbar : ''}`;
    }
    get sizeClasses() {
        return `${sizeVariants.base} ${sizeVariants.size[this.size]}`;
    }
    offClickHandler(event) {
        if (!this.close_backdrop || !this.panelDialog.open)
            return;
        if (!this.sidePanelWrapper.contains(event.target)) {
            this.handleClose();
        }
    }
    render() {
        return (h("div", { key: 'a75539d485edf9558cf437a4394327835e08fe8e' }, h("dialog", { key: '31f9f751d8a14fafadb16870d852372bce492049', id: this.panel_id, ref: (el) => (this.panelDialog = el) }, h("div", { key: '28fa97384358ffaa1e400b6352baece7ead52f34', class: `${this.panelClasses} ${this.sizeClasses}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "panel-wrapper" }, h("div", { key: '5eebcaf0bd924b67aad83545f185da277a5301ea', class: 'sticky top-0 z-nav' }, h("atui-header", { key: '648655b29a858e4977fc4bbc3fc8b225dc519c34', header_title: this.panel_title, subtitle: this.panel_subtitle }, this.has_close_button && (h("span", { key: '76dc622b0d6ef598b192a5aeed718351391871ff', class: 'rounded-full hover:bg-gray-100', slot: 'actions' }, h("i", { key: '2e9550ede86946a9d0a78770cd617a48187be637', class: "material-icons md-16 right-16 top-20 cursor-pointer p-8 !text-[18px]", onClick: () => this.handleClose(), "data-name": "panel-close" }, "close"))))), h("div", { key: 'c3fe4506e5897ea200de6b1f60fb39c4bb30e591', class: 'flex w-full flex-1 flex-col' }, h("slot", { key: '7a425052671ee8e60f15607c0fbddbe68c7953fb', name: 'content' }))))));
    }
};

export { AtuiDialogComponent as atui_side_panel };
//# sourceMappingURL=atui-side-panel.entry.js.map

//# sourceMappingURL=atui-side-panel.entry.js.map