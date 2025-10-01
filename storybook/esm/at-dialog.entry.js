import { r as registerInstance, a as getElement, h } from './index-B5bw8iR3.js';

const atDialogCss = "@keyframes fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n}\ndialog.no-backdrop::backdrop {\n  display: none;\n}\n\ndialog.backdrop::backdrop {\n  background: rgba(0, 0, 0, 0.2);\n  transition: opacity 0.3s ease;\n  animation: fadeIn 0.3s ease forwards;\n  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;\n}\n\ndialog.backdrop::backdrop {\n  z-index: var(--z-backdrop, 1000);\n}\n\n.c-atui-dialog {\n  position: fixed;\n  inset: 0;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: calc(100dvh - 48px);\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  z-index: var(--token-z-index-modal);\n  transform-origin: center;\n  opacity: 0;\n  scale: 0.95;\n  box-shadow: var(--token-shadow-3);\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;\n  visibility: hidden;\n}\n.c-atui-dialog::backdrop {\n  background: none;\n}\n.c-atui-dialog .backdrop-content {\n  display: flex;\n  max-height: calc(100dvh - 48px);\n}\n.c-atui-dialog[open] {\n  translate: 0 0;\n  scale: 1;\n  opacity: 1;\n  visibility: visible;\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear;\n}\n@starting-style {\n  .c-atui-dialog[open] {\n    opacity: 0;\n    scale: 1.15;\n  }\n}\n.c-atui-dialog:not([open]) {\n  scale: 0.95;\n  opacity: 0;\n  visibility: hidden;\n}";

const AtDialogComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /**
     * ID of the dialog element (used to open and close the modal)
     */
    dialog_id;
    /**
     * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
     */
    role = 'dialog';
    /**
     * Whether to show a backdrop behind the dialog
     */
    backdrop = false;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id;
    /**
     * Internal state to track if dialog is open
     */
    isOpen = false;
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
            dialog.showModal();
            this.isOpen = true;
            if (this.backdrop) {
                dialog.classList.add('backdrop');
            }
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
            dialog.removeAttribute('open');
            dialog.classList.remove('backdrop');
        }
    }
    handleDialogClose = (event) => {
        event.preventDefault();
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
    async componentDidLoad() {
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-dialog: No elements found with data-id="${this.trigger_id}"`);
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
        return (h("dialog", { key: 'e799c0a20d3cacb8ba28254bd3d893d34c86a7d3', class: `c-atui-dialog ${this.backdrop ? 'backdrop' : ''}`, id: this.dialog_id, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: 'a04f3e29394f69e4764718dbd4658af3bf60188b', class: "backdrop-content" }, h("slot", { key: '592be5b5d21f4eeacde5a604699a901e735033b9' }))));
    }
};
AtDialogComponent.style = atDialogCss;

export { AtDialogComponent as at_dialog };
//# sourceMappingURL=at-dialog.entry.js.map
