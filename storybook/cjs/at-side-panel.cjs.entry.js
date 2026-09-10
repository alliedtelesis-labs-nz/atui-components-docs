'use strict';

var index = require('./index-zRWHCAJe.js');

const atSidePanelCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in.sc-at-side-panel{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out.sc-at-side-panel{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}dialog.backdrop.sc-at-side-panel::backdrop{margin:0;inset:0;background:rgba(0, 0, 0, 0.2);animation:fadeInBackdrop 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop.sc-at-side-panel::backdrop{z-index:var(--z-backdrop, 1000)}.sc-at-side-panel-h{display:contents}.sc-at-side-panel-h dialog.sc-at-side-panel{position:static}.sc-at-side-panel-h .container.sc-at-side-panel{position:fixed;display:flex;flex-direction:column;z-index:var(--token-z-index-nav);min-width:var(--token-width-panel-xs);max-width:100%;background-color:var(--token-surface-foreground);box-shadow:var(--token-shadow-md);overflow-x:hidden;overflow-y:auto;height:100%;opacity:0;transition:all 300ms ease;will-change:transform, opacity}.sc-at-side-panel-h .container.width-xs.sc-at-side-panel{width:var(--token-width-panel-xs)}.sc-at-side-panel-h .container.width-sm.sc-at-side-panel{width:var(--token-width-panel-sm)}.sc-at-side-panel-h .container.width-md.sc-at-side-panel{width:var(--token-width-panel-md)}.sc-at-side-panel-h .container.width-lg.sc-at-side-panel{width:var(--token-width-panel-lg)}.sc-at-side-panel-h .container.width-xl.sc-at-side-panel{width:var(--token-width-panel-xl)}.sc-at-side-panel-h .container.origin-left.sc-at-side-panel{left:0;top:0;transform:translateX(-100%)}.sc-at-side-panel-h .container.origin-right.sc-at-side-panel{right:0;top:0;transform:translateX(100%)}.sc-at-side-panel-h .container.position-absolute.sc-at-side-panel{position:absolute;bottom:0;height:auto}.sc-at-side-panel-h .container.sc-at-side-panel:not([data-scrollable]){overflow-y:hidden}.sc-at-side-panel-h .container[data-open].sc-at-side-panel{opacity:1;visibility:visible;transform:translateX(0)}.sc-at-side-panel-h .header.sc-at-side-panel{z-index:var(--token-z-index-nav);position:sticky;top:0;padding:12px 8px 12px 16px;display:flex;justify-content:space-between;align-items:center;background-color:rgba(var(--token-surface-background), 0.8);backdrop-filter:blur(10px)}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel{display:flex;flex-direction:column;gap:2px}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .title.sc-at-side-panel{font-size:var(--token-font-size-h4);font-weight:var(--token-font-weight-med);color:var(--token-text-foreground);line-height:1}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .subtitle.sc-at-side-panel{font-size:var(--token-font-size-sm);color:var(--token-text-foreground);line-height:1}.sc-at-side-panel-h .content.sc-at-side-panel{display:flex;flex-direction:column;flex-grow:1;width:100%}.sc-at-side-panel-h .content.padded.sc-at-side-panel{padding:16px}.sc-at-side-panel-h .footer.sc-at-side-panel{z-index:var(--token-z-index-nav);position:sticky;bottom:0;display:none;width:100%;padding:12px 16px;background-color:rgba(var(--token-surface-background), 0.8);backdrop-filter:blur(10px)}.sc-at-side-panel-h .footer.sc-at-side-panel>*.sc-at-side-panel{width:100%}.sc-at-side-panel-h .container[data-has-footer].sc-at-side-panel .footer.sc-at-side-panel{display:block}.sc-at-side-panel-h .container[data-has-footer].sc-at-side-panel .content.sc-at-side-panel{flex-grow:0}`;

const AtSidePanelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiSidepanelChange = index.createEvent(this, "atuiSidepanelChange", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * Size of the size panel
     */
    size = 'xs';
    /**
     * Title displayed in the side panel
     */
    panel_title;
    /**
     * Subtitle displayed in the side panel
     */
    panel_subtitle;
    /**
     *  Position of the side panel
     */
    origin = 'right';
    /**
     * Enables scroll overflow on the sidepanel container
     */
    has_scrollbar = true;
    /**
     * Apply or remove padding from the panel content area. Remove it when the
     * slotted content owns its own spacing -- a peek view rendering a page
     * summary usually pads at the page component, and would otherwise be
     * indented twice.
     */
    padding = true;
    /**
     * Displays a close button if set
     */
    has_close_button = true;
    /**
     * If sidepanel should use fixed positioning (will fallback to absolute)
     */
    position = 'fixed';
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop = false;
    /**
     * Will close the sidepanel if clicked
     */
    close_backdrop = false;
    /**
     * Target an external element to use as the trigger. When provided, clicking an element wia matching data-sidepanel attribute value will toggle the side panel.
     */
    trigger_id;
    isExpanded = false;
    isOpen = false;
    hasFooter = false;
    /**
     * Emits an event when the side panel is toggled, with `event.detail` being true if the panel is now open
     */
    atuiSidepanelChange;
    sidePanelWrapper;
    footerObserver;
    panelDialog;
    triggerEls = [];
    externalTriggerListeners = [];
    /**
     * Toggles the side panel between open and closed states
     * @returns Promise that resolves when the panel state is toggled
     */
    async toggleSidePanel() {
        if (this.isExpanded) {
            await this.closeSidePanel();
        }
        else {
            await this.openSidePanel();
        }
    }
    /**
     * Opens the side panel
     * @returns Promise that resolves when the panel is opened
     */
    async openSidePanel() {
        if (this.panelDialog && !this.panelDialog.open) {
            if (this.backdrop === true) {
                this.panelDialog.showModal();
            }
            else {
                this.panelDialog.show();
            }
            if (this.backdrop) {
                this.panelDialog.classList.add('backdrop');
            }
            // Use requestAnimationFrame to delay the state change and apply css
            requestAnimationFrame(() => {
                this.isExpanded = true;
                this.isOpen = true;
                this.atuiSidepanelChange.emit(this.isOpen);
            });
        }
    }
    /**
     * Closes the side panel
     * @returns Promise that resolves when the panel is closed
     */
    async closeSidePanel() {
        if (this.panelDialog && this.panelDialog.open) {
            this.panelDialog.close();
            this.isExpanded = false;
            this.isOpen = false;
            this.atuiSidepanelChange.emit(this.isOpen);
            this.panelDialog.classList.remove('backdrop');
        }
    }
    /**
     * Getter method for the open state of the side panel
     * @returns The current open state of the side panel
     */
    async getIsOpen() {
        return this.isOpen;
    }
    handleClose = () => {
        this.closeSidePanel();
    };
    handleDialogClose = (event) => {
        event.preventDefault();
        if (this.isExpanded) {
            this.closeSidePanel();
        }
    };
    handleKeyDown = (event) => {
        if (event.key === 'Escape' && this.isExpanded) {
            event.preventDefault();
            this.closeSidePanel();
        }
    };
    /**
     * position:fixed's containing block is the viewport, which is what a
     * panel opened outside a multi-sidebar layout wants. Nested inside
     * at-sidebar-inset, the panel is meant to stay confined to that content
     * region instead — at-sidebar-inset is position:relative specifically so
     * an absolute-positioned container here is contained by it. Only
     * overridden when the consumer left position at its 'fixed' default.
     */
    insideSidebarInset = false;
    componentWillLoad() {
        this.insideSidebarInset = !!this.el.closest('at-sidebar-inset');
    }
    get effectivePosition() {
        return this.position === 'fixed' && this.insideSidebarInset
            ? 'absolute'
            : this.position;
    }
    offClickHandler(event) {
        if (!this.close_backdrop || !this.panelDialog?.open)
            return;
        if (!this.sidePanelWrapper?.contains(event.target)) {
            this.handleClose();
        }
    }
    async componentDidLoad() {
        this.syncHasFooter();
        this.footerObserver = new MutationObserver(() => this.syncHasFooter());
        this.footerObserver.observe(this.el, {
            childList: true,
            subtree: true,
        });
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-sidepanel="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`at-side-panel: No elements found with data-sidepanel="${this.trigger_id}"`);
                return;
            }
            this.setupExternalTriggerListeners();
        }
    }
    disconnectedCallback() {
        this.cleanupExternalTriggerListeners();
        this.footerObserver?.disconnect();
    }
    /**
     * The footer drives layout (the content stops stretching once there is a
     * footer to sit under it), and `:has()` cannot see the slot reliably once
     * Stencil has relocated slotted nodes - so the state is resolved here.
     */
    syncHasFooter() {
        this.hasFooter = !!this.el.querySelector('[slot="footer"]');
    }
    cleanupExternalTriggerListeners() {
        this.externalTriggerListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.externalTriggerListeners = [];
    }
    setupExternalTriggerListeners() {
        if (!this.triggerEls || this.triggerEls.length === 0)
            return;
        const clickHandler = async (event) => {
            event.preventDefault();
            event.stopPropagation();
            await this.toggleSidePanel();
        };
        const keydownHandler = async (event) => {
            switch (event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    await this.toggleSidePanel();
                    break;
            }
        };
        this.triggerEls.forEach((el) => {
            el.addEventListener('click', clickHandler);
            el.addEventListener('keydown', keydownHandler);
            this.externalTriggerListeners.push({ element: el, event: 'click', handler: clickHandler }, { element: el, event: 'keydown', handler: keydownHandler });
        });
    }
    render() {
        return (index.h(index.Host, { key: '7f35f49a2a4a54f2045cdc59a2a95a1ad93542c3', "data-open": this.isOpen }, index.h("dialog", { key: 'd6f93fbf22f4b382869482e3125b4e25ec5ffd67', ref: (el) => (this.panelDialog = el), class: `${this.backdrop ? 'backdrop' : ''}`, onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: '4c163f0dd93439f29e20fdf718a91802a4664979', "data-scrollable": this.has_scrollbar, "data-open": this.isOpen, "data-has-footer": this.hasFooter ? 'true' : null, class: `container origin-${this.origin} width-${this.size} size-${this.size} position-${this.effectivePosition}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "container" }, index.h("header", { key: 'f0d6080136a6c792be06c299d60e664017871a3d', class: "header", "data-name": "header" }, index.h("div", { key: '9073c040e06ea4c727761acacf94f9386a24982c' }, index.h("slot", { key: '5d9b7ce1a824b9293f29c45077d145aa529bc74b', name: "title" }), this.panel_title && (index.h("h3", { key: '67bf326b1aef3407e87c17afdf6caf16fa084e2b', class: "title" }, this.panel_title)), this.panel_subtitle && (index.h("p", { key: 'f6101553c952cb35285f9480fde1397c0e11c118', class: "subtitle" }, this.panel_subtitle))), index.h("div", { key: 'b4f80d82df9b34fd00fc6d047b1d3a1ff164e39a' }, index.h("slot", { key: '3a9c14433531404630b3454266f2beaadae5a94b', name: "actions" }), this.has_close_button && (index.h("at-button", { key: 'b47236362633bf45da34596cde8cff2e7e68b432', size: "md", type: "secondaryText", "data-name": "panel-close", onClick: this.handleClose }, index.h("at-icon", { key: 'c4c49b794fd95aa57a3e46f0c2774970c3f7b13c', slot: "icon", name: "close" }))))), index.h("div", { key: '7bb1c489ed612397028636821616e7f539e6e4ac', "data-name": "content", class: `content ${this.padding ? 'padded' : ''}` }, index.h("slot", { key: 'ffa7fb73c4a5e3f52c3f348fc9f16ac10ca9c0a3' })), index.h("div", { key: 'a28bf7ccb4297e5a04571645b70e916957e15e58', "data-name": "footer", class: "footer" }, index.h("slot", { key: 'c23fdf8ef8c150154a9d41d185426d9313b7fabf', name: "footer" }))))));
    }
};
AtSidePanelComponent.style = atSidePanelCss();

exports.at_side_panel = AtSidePanelComponent;
