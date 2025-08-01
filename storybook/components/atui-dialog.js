import { p as proxyCustomElement, H, h } from './p-CIJrXZgf.js';

const atuiDialogCss = "dialog.backdrop::backdrop {\n  background: rgba(0, 0, 0, 0.2);\n  transition: opacity 0.3s ease;\n  animation: fadeIn 0.3s ease forwards;\n  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;\n}\n\ndialog.backdrop::backdrop {\n  z-index: var(--z-backdrop, 1000);\n}\n\n@keyframes fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n}\n.c-atui-dialog {\n  position: fixed;\n  inset: 0;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: calc(100dvh - 48px);\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  z-index: var(--token-z-index-modal);\n  transform-origin: center;\n  opacity: 0;\n  scale: 0.95;\n  box-shadow: var(--token-shadow-3);\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;\n  visibility: hidden;\n}\n.c-atui-dialog::backdrop {\n  background: none;\n}\n.c-atui-dialog .backdrop-content {\n  display: flex;\n  max-height: calc(100dvh - 48px);\n}\n.c-atui-dialog[open] {\n  translate: 0 0;\n  scale: 1;\n  opacity: 1;\n  visibility: visible;\n  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear;\n}\n@starting-style {\n  .c-atui-dialog[open] {\n    opacity: 0;\n    scale: 1.15;\n  }\n}\n.c-atui-dialog:not([open]) {\n  scale: 0.95;\n  opacity: 0;\n  visibility: hidden;\n}";

const AtuiDialogComponent = /*@__PURE__*/ proxyCustomElement(class AtuiDialogComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
         */
        this.role = 'dialog';
        /**
         * Whether to show a backdrop behind the dialog
         */
        this.backdrop = false;
        /**
         * Internal state to track if dialog is open
         */
        this.isOpen = false;
        this.handleDialogClose = (event) => {
            event.preventDefault();
            if (this.isOpen) {
                this.closeDialog();
            }
        };
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape' && this.isOpen) {
                event.preventDefault();
                this.closeDialog();
            }
        };
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
    render() {
        return (h("dialog", { key: 'a7cf76492afd7f55bbadc23b360f0fccb41457c9', class: `c-atui-dialog ${this.backdrop ? 'backdrop' : ''}`, id: this.dialog_id, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: '07a3552e9e0adc62e8f7cd301c89337c4763e1a3', class: "backdrop-content" }, h("slot", { key: '7466c89b5b53865fd8a3c69243ce6e8a32980960' }))));
    }
    get el() { return this; }
    static get style() { return atuiDialogCss; }
}, [260, "atui-dialog", {
        "dialog_id": [1],
        "role": [1],
        "backdrop": [4],
        "isOpen": [32],
        "openDialog": [64],
        "closeDialog": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiDialogComponent);
            }
            break;
    } });
}

const AtuiDialog = AtuiDialogComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiDialog, defineCustomElement };
//# sourceMappingURL=atui-dialog.js.map

//# sourceMappingURL=atui-dialog.js.map