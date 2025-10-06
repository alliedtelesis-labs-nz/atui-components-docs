'use strict';

var index = require('./index-w3vomLqM.js');

const atSidePanelCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}dialog.backdrop::backdrop{background:rgba(0, 0, 0, 0.2);transition:opacity 0.3s ease;animation:fadeIn 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop::backdrop{z-index:var(--z-backdrop, 1000)}";

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
     * Puts a scrollbar on the sidepanel if set
     */
    has_scrollbar = true;
    /**
     * Displays a close button if set
     */
    has_close_button = true;
    /**
     * If sidepanel should used fixed positioning (otherwise absolute)
     */
    fixed = true;
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop = false;
    /**
     * Will close the sidepanel if clicked
     */
    close_backdrop = false;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the side panel.
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
            this.isExpanded = true;
            this.isOpen = true;
            this.atuiSidepanelChange.emit(this.isOpen);
            if (this.backdrop) {
                this.panelDialog.classList.add('backdrop');
            }
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
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-side-panel: No elements found with data-id="${this.trigger_id}"`);
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
        return (index.h(index.Host, { key: 'ffa42101a339fd2696b305509ab5babaf6612e8f', class: "contents" }, index.h("dialog", { key: '5b5a5c1ffb2b55e9348b9d6e8c4957ead4519598', ref: (el) => (this.panelDialog = el), class: this.backdrop ? 'backdrop' : 'no-backdrop', onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: 'a72bacc62b0a73d8b694b89f22d63354ba006a90', class: `${this.panelClasses} ${this.sizeClasses}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "panel-wrapper" }, index.h("div", { key: '5b8299fcec698f97426e35e87576c7407c9d1030', class: 'z-nav sticky top-0' }, index.h("at-header", { key: 'f4527db8f06cc4b256f478f66c62b8795aa7141f', header_title: this.panel_title, subtitle: this.panel_subtitle }, this.has_close_button && (index.h("span", { key: '2855e8bf6ae6f125f24aa78630180cbde1d86c57', class: 'rounded-full hover:bg-gray-100', slot: 'actions' }, index.h("i", { key: '7fd2d79ffc711adf38c92da2269346d2cd4947da', class: "material-icons md-16 top-20 right-16 cursor-pointer p-8 !text-[18px]", onClick: this.handleClose, "data-name": "panel-close" }, "close"))))), index.h("div", { key: 'ee0518401ad0ad1f7912e0b81a570ef7d8e40d29', class: 'flex w-full flex-1 flex-col' }, index.h("slot", { key: '4edd22b72660ff6c037adc050a18134426ba56fc' }))))));
    }
    get panelClasses() {
        return `${panelVariants.base} ${panelVariants.origin[this.origin]} ${this.isExpanded ? panelVariants.isExpanded : ''} 
        ${this.fixed ? panelVariants.fixed.true : panelVariants.fixed.false} ${!this.has_scrollbar ? panelVariants.noScrollbar : ''}`;
    }
    get sizeClasses() {
        return `${sizeVariants.base} ${sizeVariants.size[this.size]}`;
    }
};
AtSidePanelComponent.style = atSidePanelCss;

exports.at_side_panel = AtSidePanelComponent;
//# sourceMappingURL=at-side-panel.entry.cjs.js.map
