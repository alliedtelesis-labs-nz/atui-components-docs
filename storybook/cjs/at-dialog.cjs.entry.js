'use strict';

var index = require('./index-CzDB71Wy.js');

const atDialogCss = () => `@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}dialog.backdrop.sc-at-dialog::backdrop{margin:0;inset:0;background:rgba(0, 0, 0, 0.2);animation:fadeIn 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop.sc-at-dialog::backdrop{z-index:var(--z-backdrop, 1000)}.sc-at-dialog-h{display:contents}.sc-at-dialog-h dialog.sc-at-dialog{position:fixed;inset:0;margin:0;display:flex;align-items:center;justify-content:center;min-width:100vw;min-height:100vh;overflow:hidden;border:0;padding:0;background:transparent;z-index:var(--token-z-index-modal);transform-origin:center;opacity:0;box-shadow:var(--token-shadow-3);visibility:hidden;transition:translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s}.sc-at-dialog-h dialog.backdrop.sc-at-dialog{display:flex;width:100vw;height:100vh}.sc-at-dialog-h dialog[open].sc-at-dialog{translate:0 0;scale:1;opacity:1;visibility:visible;transition:translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear}@starting-style{.sc-at-dialog-h dialog[open]{opacity:0}}.sc-at-dialog-h dialog.sc-at-dialog:not([open]){opacity:0;visibility:hidden}`;

const AtDialogComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiDialogChange = index.createEvent(this, "atuiDialogChange", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
     */
    role = 'dialog';
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop = true;
    /**
     * Will close the dialog if clicked
     */
    close_backdrop = false;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id;
    /**
     * Internal state to track if dialog is open
     */
    isOpen = false;
    /**
     * Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open
     */
    atuiDialogChange;
    dialog;
    dialogWrapper;
    triggerEls = [];
    externalTriggerListeners = [];
    /**
     * Toggles the dialog modal between open and closed states
     * @returns Promise that resolves when the dialog state is toggled
     */
    async toggleDialog() {
        if (this.isOpen) {
            await this.closeDialog();
        }
        else {
            await this.openDialog();
        }
    }
    /**
     * Opens the dialog modal
     * @returns Promise that resolves when the dialog is opened
     */
    async openDialog() {
        if (this.dialog && !this.isOpen) {
            if (this.backdrop === true) {
                this.dialog.showModal();
            }
            else {
                this.dialog.show();
            }
            this.isOpen = true;
            this.atuiDialogChange.emit(this.isOpen);
        }
    }
    /**
     * Closes the dialog modal
     * @returns Promise that resolves when the dialog is closed
     */
    async closeDialog() {
        if (this.dialog && this.isOpen) {
            this.dialog.close();
            this.isOpen = false;
            this.atuiDialogChange.emit(this.isOpen);
            this.dialog.removeAttribute('open');
        }
    }
    /**
     * Getter method for the open state of the dialog
     * @returns The current open state of the dialog
     */
    async getIsOpen() {
        return this.isOpen;
    }
    handleDialogClose = () => {
        if (this.isOpen) {
            this.closeDialog();
        }
    };
    handleKeyDown = (event) => {
        if (event.key === 'Escape' && this.isOpen) {
            event.preventDefault();
            this.closeDialog();
        }
    };
    offClickHandler(event) {
        if (!this.close_backdrop || !this.dialog?.open)
            return;
        if (!this.dialogWrapper?.contains(event.target)) {
            this.handleDialogClose();
        }
    }
    async componentDidLoad() {
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-dialog="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-dialog: No elements found with data-dialog="${this.trigger_id}"`);
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
            await this.toggleDialog();
        };
        const keydownHandler = async (event) => {
            switch (event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    await this.toggleDialog();
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
        return (index.h(index.Host, { key: '14ab35170fabe37526ab0d63e6df3f656474f586', "data-open": this.isOpen }, index.h("dialog", { key: '0d80d8cabb5bca16702189b0adb05b23599e9188', ref: (el) => (this.dialog = el), "data-name": "dialog", class: `${this.backdrop ? 'backdrop' : ''}`, role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: 'f7a821d9dbfe9f42dc0fb05b9e59392ff3c63d30', "data-name": "content", ref: (el) => (this.dialogWrapper = el) }, index.h("slot", { key: '7d25236427ff067ae1d1f025c421c229129782d4' })))));
    }
};
AtDialogComponent.style = atDialogCss();

exports.at_dialog = AtDialogComponent;
