'use strict';

var index = require('./index-COiLLAKF.js');

const atSidePanelCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}dialog.backdrop.sc-at-side-panel::backdrop{margin:0;inset:0;background:rgba(0, 0, 0, 0.2);animation:fadeIn 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop.sc-at-side-panel::backdrop{z-index:var(--z-backdrop, 1000)}.sc-at-side-panel-h{--token-color-white-rgb:255, 255, 255;display:contents}.sc-at-side-panel-h .container.sc-at-side-panel{position:fixed;display:flex;flex-direction:column;z-index:var(--token-z-index-nav);min-width:var(--token-width-panel-xs);background-color:var(--token-color-white);box-shadow:var(--token-shadow-md);overflow-x:hidden;overflow-y:auto;height:100%;opacity:0;transition:all 300ms ease;will-change:transform, opacity}.sc-at-side-panel-h .container.width-xs.sc-at-side-panel{width:var(--token-width-panel-xs)}.sc-at-side-panel-h .container.width-sm.sc-at-side-panel{width:var(--token-width-panel-sm)}.sc-at-side-panel-h .container.width-md.sc-at-side-panel{width:var(--token-width-panel-md)}.sc-at-side-panel-h .container.width-lg.sc-at-side-panel{width:var(--token-width-panel-lg)}.sc-at-side-panel-h .container.width-xl.sc-at-side-panel{width:var(--token-width-panel-xl)}.sc-at-side-panel-h .container.origin-left.sc-at-side-panel{left:0;top:0;transform:translateX(-100%)}.sc-at-side-panel-h .container.origin-right.sc-at-side-panel{right:0;top:0;transform:translateX(100%)}.sc-at-side-panel-h .container.position-absolute.sc-at-side-panel{position:absolute}.sc-at-side-panel-h .container.sc-at-side-panel:not([data-scrollable]){overflow-y:hidden}.sc-at-side-panel-h .container[data-open].sc-at-side-panel{opacity:1;visibility:visible;transform:translateX(0)}.sc-at-side-panel-h .header.sc-at-side-panel{z-index:var(--token-z-index-nav);position:sticky;top:0;padding:12px 8px 12px 16px;display:flex;justify-content:space-between;align-items:flex-start;background-color:rgba(var(--token-color-white-rgb), 0.8);backdrop-filter:blur(10px)}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel{display:flex;flex-direction:column;gap:2px}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .title.sc-at-side-panel{font-size:var(--token-font-size-h4);font-weight:var(--token-font-weight-med);color:var(--token-text-dark);line-height:1}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .subtitle.sc-at-side-panel{font-size:var(--token-font-size-sm);color:var(--token-text-light);line-height:1}.sc-at-side-panel-h .content.sc-at-side-panel{display:flex;flex-direction:column;flex-grow:1;width:100%}";

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
    /**
     * Emits an event when the side panel is toggled, with `event.detail` being true if the panel is now open
     */
    atuiSidepanelChange;
    sidePanelWrapper;
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
    offClickHandler(event) {
        if (!this.close_backdrop || !this.panelDialog?.open)
            return;
        if (!this.sidePanelWrapper?.contains(event.target)) {
            this.handleClose();
        }
    }
    async componentDidLoad() {
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
        return (index.h(index.Host, { key: 'bef4c52400cde533e581baca57dd46b489c150e6', "data-open": this.isOpen }, index.h("dialog", { key: 'ff8bc19a28533382f4f040a94dd65ba6414c66c2', ref: (el) => (this.panelDialog = el), class: `${this.backdrop ? 'backdrop' : ''}`, onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: 'c2fc68acb5f8c5f570e6e454ea54f54b58d09411', "data-scrollable": this.has_scrollbar, "data-open": this.isOpen, class: `container origin-${this.origin} size-${this.size} size-${this.size} position-${this.position}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "container" }, index.h("header", { key: 'ea248aa507584eba410476a6b463bc3d51d7f5d6', class: "header", "data-name": "header" }, index.h("div", { key: '614c315d1c6c832b4d56c63f248c63bc1e690639' }, this.panel_title && (index.h("h3", { key: 'd6651aa875eb61e353901452583878b415304633', class: "title" }, this.panel_title)), this.panel_subtitle && (index.h("p", { key: '8baeaa88f3df2b99350ed14cfa83522d92e4c965', class: "subtitle" }, this.panel_subtitle))), this.has_close_button && (index.h("at-button", { key: '23ff26e5fc0abe446158d9e29012ea2cbdb7bfd2', size: "md", icon: "close", type: "secondaryText", "data-name": "panel-close", onClick: this.handleClose }))), index.h("div", { key: '37a3a694e91ae6a486ad0b53d774054e137d5322', "data-name": "content", class: "content" }, index.h("slot", { key: 'bc70fb716fcae73c8a7577250e6b8d30017ded51' }))))));
    }
};
AtSidePanelComponent.style = atSidePanelCss;

exports.at_side_panel = AtSidePanelComponent;
//# sourceMappingURL=at-side-panel.entry.cjs.js.map
