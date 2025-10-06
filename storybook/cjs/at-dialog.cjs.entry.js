'use strict';

var index = require('./index-w3vomLqM.js');

const atDialogCss = "@keyframes fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n}\ndialog.backdrop::backdrop {\n  background: rgba(0, 0, 0, 0.2);\n  transition: opacity 0.3s ease;\n  animation: fadeIn 0.3s ease forwards;\n  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;\n}\n\ndialog.backdrop::backdrop {\n  z-index: var(--z-backdrop, 1000);\n}\n\n:host {\n  display: contents;\n}\n\n#dialog {\n  position: fixed;\n  inset: 0;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: calc(100dvh - 48px);\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  z-index: var(--token-z-index-modal);\n  transform-origin: center;\n  opacity: 0;\n  scale: 0.95;\n  box-shadow: var(--token-shadow-3);\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;\n  visibility: hidden;\n}\n#dialog .backdrop {\n  display: flex;\n  max-height: calc(100dvh - 48px);\n}\n#dialog[open] {\n  translate: 0 0;\n  scale: 1;\n  opacity: 1;\n  visibility: visible;\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear;\n}\n@starting-style {\n  #dialog[open] {\n    opacity: 0;\n    scale: 1.15;\n  }\n}\n#dialog:not([open]) {\n  scale: 0.95;\n  opacity: 0;\n  visibility: hidden;\n}";

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
        const dialog = this.el.querySelector('dialog');
        if (dialog && !this.isOpen) {
            if (this.backdrop === true) {
                dialog.showModal();
            }
            else {
                dialog.show();
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
        const dialog = this.el.querySelector('dialog');
        if (dialog && this.isOpen) {
            dialog.close();
            this.isOpen = false;
            this.atuiDialogChange.emit(this.isOpen);
            dialog.removeAttribute('open');
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
            console.log('asdasd');
            this.handleDialogClose();
        }
    }
    async componentDidLoad() {
        this.dialog = this.el.querySelector('dialog');
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-dialog: No elements found with data-id="${this.trigger_id}"`);
                return;
            }
            this.setupExternalTriggerListeners();
        }
        if (this.backdrop) {
            this.dialog.classList.add('backdrop');
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
        return (index.h(index.Host, { key: '4f36bfbda3e8ee3d0343e831b25d44804fd3412f' }, index.h("dialog", { key: '717cdffc2f07266019a66c4f3aa944a07aa6a044', part: "dialog", id: "dialog", class: `${this.backdrop ? 'backdrop' : ''}`, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: '568e3107f7a9c285c3f3b972b0ff110b2ced0fea', part: "backdrop", id: "backdrop", class: "backdrop-content", ref: (el) => (this.dialogWrapper = el) }, index.h("slot", { key: 'ce160d14d4e683333f3fe4d0806ef98ae810dcbe' })))));
    }
};
AtDialogComponent.style = atDialogCss;

exports.at_dialog = AtDialogComponent;
//# sourceMappingURL=at-dialog.entry.cjs.js.map
