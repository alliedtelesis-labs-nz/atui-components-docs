'use strict';

var index = require('./index-COiLLAKF.js');

const atDialogCss = "@keyframes fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n}\ndialog.backdrop.sc-at-dialog::backdrop {\n  margin: 0;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.2);\n  animation: fadeIn 0.3s ease forwards;\n  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;\n}\n\ndialog.backdrop.sc-at-dialog::backdrop {\n  z-index: var(--z-backdrop, 1000);\n}\n\n.sc-at-dialog-h {\n  display: contents;\n}\n.sc-at-dialog-h dialog.sc-at-dialog {\n  position: fixed;\n  inset: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 100vw;\n  min-height: 100vh;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  z-index: var(--token-z-index-modal);\n  transform-origin: center;\n  opacity: 0;\n  box-shadow: var(--token-shadow-3);\n  visibility: hidden;\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;\n}\n.sc-at-dialog-h dialog.backdrop.sc-at-dialog {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n.sc-at-dialog-h dialog[open].sc-at-dialog {\n  translate: 0 0;\n  scale: 1;\n  opacity: 1;\n  visibility: visible;\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear;\n}\n@starting-style {\n  .sc-at-dialog-h dialog[open] {\n    opacity: 0;\n  }\n}\n.sc-at-dialog-h dialog.sc-at-dialog:not([open]) {\n  opacity: 0;\n  visibility: hidden;\n}";

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
        return (index.h(index.Host, { key: 'ead91f965ec95ffded3e64967413cb273c3ad984', "data-open": this.isOpen }, index.h("dialog", { key: 'af5f75b134e7fb225d09d819aece521843f6ad98', ref: (el) => (this.dialog = el), "data-name": "dialog", class: `${this.backdrop ? 'backdrop' : ''}`, role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: 'f2bbe30426232f8c647820382be2ed538359ae76', "data-name": "content", ref: (el) => (this.dialogWrapper = el) }, index.h("slot", { key: '8f41ab0ad45b5ed7643c89892ef04897ae10b03b' })))));
    }
};
AtDialogComponent.style = atDialogCss;

exports.at_dialog = AtDialogComponent;
//# sourceMappingURL=at-dialog.entry.cjs.js.map
