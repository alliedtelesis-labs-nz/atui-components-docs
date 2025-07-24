import { p as proxyCustomElement, H, h } from './p-kcU6cSzl.js';

const atuiDialogCss = ".c-atui-dialog {\n  margin: auto;\n  display: block;\n  max-height: calc(100dvh - 48px);\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  visibility: hidden;\n  z-index: var(--token-z-index-modal);\n  transform-origin: bottom center;\n  opacity: 0;\n  scale: 0.95;\n  box-shadow: var(--token-shadow-3);\n  transition: translate var(--token-transition-time), scale var(--token-transition-time), filter var(--token-transition-time), opacity var(--token-transition-time), visibility var(--token-transition-time);\n}\n.c-atui-dialog::backdrop {\n  animation: fadeIn 0.3s ease forwards;\n  background: rgba(0, 0, 0, 0.2);\n  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;\n}\n@keyframes fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n.c-atui-dialog > * {\n  max-height: calc(100dvh - 48px);\n}\n.c-atui-dialog[open] {\n  translate: 0 0;\n  scale: 1;\n  opacity: 1;\n  visibility: visible;\n}\n@starting-style {\n  .c-atui-dialog[open] {\n    opacity: 0;\n    scale: 1.15;\n  }\n}\n.c-atui-dialog:not([open]) {\n  scale: 0.95;\n  opacity: 0;\n  visibility: hidden;\n}";

const AtuiDialogComponent = /*@__PURE__*/ proxyCustomElement(class AtuiDialogComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
         */
        this.role = 'dialog';
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
        }
    }
    render() {
        return (h("dialog", { key: '84c80f1f47f2e6c157b60fcdf53ce9af733e6763', class: "c-atui-dialog", id: this.dialog_id, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, h("div", { key: 'ca1d3894f886d338ec97929d034f15d8b697d4f5', class: "backdrop-content" }, h("slot", { key: 'c818707aec856895a92c640170b45bcb0911261a' }))));
    }
    get el() { return this; }
    static get style() { return atuiDialogCss; }
}, [260, "atui-dialog", {
        "dialog_id": [1],
        "role": [1],
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