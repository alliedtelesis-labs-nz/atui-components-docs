'use strict';

var index = require('./index-Dk6I1ku2.js');

const atDialogCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in.sc-at-dialog{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out.sc-at-dialog{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}dialog.backdrop.sc-at-dialog::backdrop{margin:0;inset:0;background:rgba(0, 0, 0, 0.2);animation:fadeInBackdrop 0.3s ease forwards;transition:opacity var(--token-transition-time) ease-in-out allow-discrete}dialog.backdrop.sc-at-dialog::backdrop{z-index:var(--z-backdrop, 1000)}.sc-at-dialog-h{display:contents}.sc-at-dialog-h dialog.sc-at-dialog{position:fixed;inset:0;margin:0;display:flex;align-items:center;justify-content:center;min-width:100vw;min-height:100vh;overflow:hidden;border:0;padding:0;background:transparent;z-index:var(--token-z-index-modal);transform-origin:center;opacity:0;box-shadow:var(--token-shadow-3);visibility:hidden;transition:translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s}.sc-at-dialog-h dialog.backdrop.sc-at-dialog{display:flex;width:100vw;height:100vh}.sc-at-dialog-h dialog[open].sc-at-dialog{translate:0 0;scale:1;opacity:1;visibility:visible;transition:translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear}@starting-style{.sc-at-dialog-h dialog[open]{opacity:0}}.sc-at-dialog-h dialog.sc-at-dialog:not([open]){opacity:0;visibility:hidden}`;

const AtDialogComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiDialogChange = index.createEvent(this, "atuiDialogChange", 7);
        this.atuiDialogClose = index.createEvent(this, "atuiDialogClose", 7);
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
     * Whether pressing Escape dismisses the dialog. Set to `false` alongside
     * `close_backdrop={false}` for a flow that must confirm before closing, such
     * as an unsaved-changes guard — the host then closes it via `closeDialog()`.
     */
    close_esc = true;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id;
    /**
     * Internal state to track if dialog is open
     */
    isOpen = false;
    /**
     * Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open.
     * Emitted exactly once per open and once per close, whichever path caused it.
     */
    atuiDialogChange;
    /**
     * Emits once each time the dialog closes, with `event.detail.reason` describing
     * which path closed it. Always accompanies an `atuiDialogChange(false)`.
     */
    atuiDialogClose;
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
        this.dismiss('programmatic');
    }
    /**
     * The single path through which the dialog closes.
     *
     * Every caller routes through here, and `isOpen` is cleared *before*
     * `dialog.close()` runs, so the native `close` event — which the browser
     * queues as a task rather than dispatching synchronously — finds the dialog
     * already closed and returns without emitting again. That ordering is what
     * makes the exactly-once guarantee hold rather than depending on the event
     * being asynchronous.
     */
    dismiss(reason) {
        if (!this.dialog || !this.isOpen) {
            return;
        }
        this.isOpen = false;
        this.dialog.close();
        this.dialog.removeAttribute('open');
        this.atuiDialogChange.emit(false);
        this.atuiDialogClose.emit({ reason });
    }
    /**
     * Getter method for the open state of the dialog
     * @returns The current open state of the dialog
     */
    async getIsOpen() {
        return this.isOpen;
    }
    /**
     * The native `close` event. Reached only when something closed the `<dialog>`
     * without going through `dismiss()` — a `<form method="dialog">` submit in the
     * slot, say. Anything this component initiated has already cleared `isOpen`,
     * so `dismiss()` returns immediately and nothing is emitted twice.
     */
    handleDialogClose = () => {
        this.dismiss('close');
    };
    /**
     * Escape is handled here rather than left to the browser so the close carries
     * a reason and can be suppressed. `preventDefault()` runs on both branches:
     * without it the browser would close the dialog itself, which would either
     * bypass `close_esc={false}` or report the close as `'close'`.
     */
    handleKeyDown = (event) => {
        if (event.key !== 'Escape' || !this.isOpen) {
            return;
        }
        event.preventDefault();
        if (this.close_esc) {
            this.dismiss('esc');
        }
    };
    /**
     * The browser's own Escape handling surfaces as `cancel` and can reach the
     * dialog without a keydown this component sees. Suppress it too, so
     * `close_esc={false}` holds however Escape arrives.
     */
    handleCancel = (event) => {
        event.preventDefault();
        if (this.close_esc) {
            this.dismiss('esc');
        }
    };
    offClickHandler(event) {
        if (!this.close_backdrop || !this.dialog?.open)
            return;
        if (!this.dialogWrapper?.contains(event.target)) {
            this.dismiss('backdrop');
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
        return (index.h(index.Host, { key: '4bdab62ca0715b8c8f8240d61e536f51c0c32cd7', "data-open": this.isOpen }, index.h("dialog", { key: '523acc1de36d777d4091d83ea8ded90788b9d847', ref: (el) => (this.dialog = el), "data-name": "dialog", class: `${this.backdrop ? 'backdrop' : ''}`, role: this.role, "aria-modal": "true", onClose: this.handleDialogClose, onCancel: this.handleCancel, onKeyDown: this.handleKeyDown }, index.h("div", { key: '2a1807d70689e734913195ebc92e728dfe453a67', "data-name": "content", ref: (el) => (this.dialogWrapper = el) }, index.h("slot", { key: 'e3efe62bb84c80c4c4cbc2861825764a71a9b419' })))));
    }
};
AtDialogComponent.style = atDialogCss();

exports.at_dialog = AtDialogComponent;
