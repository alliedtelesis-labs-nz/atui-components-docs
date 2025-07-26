'use strict';

var index = require('./index-BAt2i-T2.js');

const atuiDialogCss = ".c-atui-dialog {\n  margin: auto;\n  display: block;\n  max-height: calc(100dvh - 48px);\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  visibility: hidden;\n  z-index: var(--token-z-index-modal);\n  transform-origin: bottom center;\n  opacity: 0;\n  scale: 0.95;\n  box-shadow: var(--token-shadow-3);\n  transition: translate var(--token-transition-time), scale var(--token-transition-time), filter var(--token-transition-time), opacity var(--token-transition-time), visibility var(--token-transition-time);\n}\n.c-atui-dialog::backdrop {\n  animation: fadeIn 0.3s ease forwards;\n  background: rgba(0, 0, 0, 0.2);\n  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;\n}\n@keyframes fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n.c-atui-dialog > * {\n  max-height: calc(100dvh - 48px);\n}\n.c-atui-dialog[open] {\n  translate: 0 0;\n  scale: 1;\n  opacity: 1;\n  visibility: visible;\n}\n@starting-style {\n  .c-atui-dialog[open] {\n    opacity: 0;\n    scale: 1.15;\n  }\n}\n.c-atui-dialog:not([open]) {\n  scale: 0.95;\n  opacity: 0;\n  visibility: hidden;\n}";

const AtuiDialogComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("dialog", { key: '6ce9fdf4ad7a3f9d6f330d8918503c7c8b974844', class: "c-atui-dialog", id: this.dialog_id, "data-name": "dialog", role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onKeyDown: this.handleKeyDown }, index.h("div", { key: '0e371596f239f495a2b773183c53b57bb5adc5fc', class: "backdrop-content" }, index.h("slot", { key: 'd5f069f499caae7eedfd830f798e767f49fa4792' }))));
    }
    get el() { return index.getElement(this); }
};
AtuiDialogComponent.style = atuiDialogCss;

exports.atui_dialog = AtuiDialogComponent;
//# sourceMappingURL=atui-dialog.entry.cjs.js.map

//# sourceMappingURL=atui-dialog.cjs.entry.js.map