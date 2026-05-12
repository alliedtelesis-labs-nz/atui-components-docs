import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';

const atSidePanelCss = () => `@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}dialog.backdrop.sc-at-side-panel::backdrop{margin:0;inset:0;background:rgba(0, 0, 0, 0.2);animation:fadeIn 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop.sc-at-side-panel::backdrop{z-index:var(--z-backdrop, 1000)}.sc-at-side-panel-h{--token-color-white-rgb:255, 255, 255;display:contents}.sc-at-side-panel-h .container.sc-at-side-panel{position:fixed;display:flex;flex-direction:column;z-index:var(--token-z-index-nav);min-width:var(--token-width-panel-xs);background-color:var(--token-surface-background);box-shadow:var(--token-shadow-md);overflow-x:hidden;overflow-y:auto;height:100%;opacity:0;transition:all 300ms ease;will-change:transform, opacity}.sc-at-side-panel-h .container.width-xs.sc-at-side-panel{width:var(--token-width-panel-xs)}.sc-at-side-panel-h .container.width-sm.sc-at-side-panel{width:var(--token-width-panel-sm)}.sc-at-side-panel-h .container.width-md.sc-at-side-panel{width:var(--token-width-panel-md)}.sc-at-side-panel-h .container.width-lg.sc-at-side-panel{width:var(--token-width-panel-lg)}.sc-at-side-panel-h .container.width-xl.sc-at-side-panel{width:var(--token-width-panel-xl)}.sc-at-side-panel-h .container.origin-left.sc-at-side-panel{left:0;top:0;transform:translateX(-100%)}.sc-at-side-panel-h .container.origin-right.sc-at-side-panel{right:0;top:0;transform:translateX(100%)}.sc-at-side-panel-h .container.position-absolute.sc-at-side-panel{position:absolute}.sc-at-side-panel-h .container.sc-at-side-panel:not([data-scrollable]){overflow-y:hidden}.sc-at-side-panel-h .container[data-open].sc-at-side-panel{opacity:1;visibility:visible;transform:translateX(0)}.sc-at-side-panel-h .header.sc-at-side-panel{z-index:var(--token-z-index-nav);position:sticky;top:0;padding:12px 8px 12px 16px;display:flex;justify-content:space-between;align-items:flex-start;background-color:rgba(var(--token-surface-background), 0.8);backdrop-filter:blur(10px)}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel{display:flex;flex-direction:column;gap:2px}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .title.sc-at-side-panel{font-size:var(--token-font-size-h4);font-weight:var(--token-font-weight-med);color:var(--token-text-foreground);line-height:1}.sc-at-side-panel-h .header.sc-at-side-panel div.sc-at-side-panel .subtitle.sc-at-side-panel{font-size:var(--token-font-size-sm);color:var(--token-text-foreground);line-height:1}.sc-at-side-panel-h .content.sc-at-side-panel{display:flex;flex-direction:column;flex-grow:1;width:100%}`;

const AtSidePanelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiSidepanelChange = createEvent(this, "atuiSidepanelChange", 7);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '64b4763f5250e2b9b8828ac0f015bb609d20e244', "data-open": this.isOpen }, h("dialog", { key: '2be15eab3ac7a80c7957d307c5b6cfd61f3368b2', ref: (el) => (this.panelDialog = el), class: `${this.backdrop ? 'backdrop' : ''}`, onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: 'af88065476557476649e9e0712d22ec287db9dd3', "data-scrollable": this.has_scrollbar, "data-open": this.isOpen, class: `container origin-${this.origin} width-${this.size} size-${this.size} position-${this.position}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "container" }, h("header", { key: 'b051391c6c0458cbd1b8b438a815a48bb65bf3d8', class: "header", "data-name": "header" }, h("div", { key: 'd61d4216f4510c50495f69338f88500a98eb6de2' }, this.panel_title && (h("h3", { key: 'ba90029c333bfdf355b2e97a743417e3c7523d6a', class: "title" }, this.panel_title)), this.panel_subtitle && (h("p", { key: '6b735d61f4380f3ea118c49f62892dae65ee0c18', class: "subtitle" }, this.panel_subtitle))), this.has_close_button && (h("at-button", { key: '5ceffb7c0f94915cead575b702e9b278d8e38f81', size: "md", type: "secondaryText", "data-name": "panel-close", onClick: this.handleClose }, h("at-icon", { key: '931f49a5c2c998a337aef6d5b585152ab0fd4430', slot: "icon", name: "close" })))), h("div", { key: '84b2044dbd6287a0985ef389b1ab568a0d5929db', "data-name": "content", class: "content" }, h("slot", { key: 'e30ef29dcd29607f5e95f40c1d145fcb74ab3a10' }))))));
    }
};
AtSidePanelComponent.style = atSidePanelCss();

export { AtSidePanelComponent as at_side_panel };
