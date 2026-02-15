'use strict';

var index = require('./index-CzDB71Wy.js');

const atToasterCss = () => `@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}.at-toaster.sc-at-toaster{position:fixed;display:flex;flex-direction:column;z-index:var(--token-z-index-modal);gap:8px;padding:12px}.at-toaster.top-right.sc-at-toaster{top:12px;right:12px;align-items:flex-end}.at-toaster.top-left.sc-at-toaster{top:12px;left:12px;align-items:flex-start}.at-toaster.bottom-right.sc-at-toaster{bottom:12px;right:12px;align-items:flex-end}.at-toaster.bottom-left.sc-at-toaster{bottom:12px;left:12px;align-items:flex-start}.at-toaster.top-center.sc-at-toaster{top:12px;left:50%;transform:translateX(-50%);align-items:center}.at-toaster.bottom-center.sc-at-toaster{bottom:12px;left:50%;transform:translateX(-50%);align-items:center}.at-toast.sc-at-toaster{min-width:var(--token-width-panel-xs);max-width:var(--token-width-panel-sm);box-shadow:var(--token-shadow-1);border-radius:4px;overflow:hidden;display:flex;flex-direction:column;position:relative;cursor:pointer;animation:animInUp 300ms ease-out forwards}.at-toast.undismissible.sc-at-toaster{cursor:default}.at-toast.close.sc-at-toaster{animation:animOut 200ms ease-out forwards}`;

const AtToasterComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /**
     * Position of the toaster on the screen
     */
    position = 'bottom-right';
    toasts = [];
    /**
     * Adds a new toast to the toaster container
     * This method is called from the ToasterService when a new toast is created.
     *
     * @param toast The toast to add
     */
    async addToast(toast) {
        this.toasts = [...this.toasts, toast];
        if (toast.dismissible && toast.timeout > 0) {
            setTimeout(() => this.removeToast(toast.id), toast.timeout);
        }
    }
    /**
     * Removes a toast from the toaster container by its ID
     * This method is called by tapToast.
     *
     * @param id The ID of the toast to remove
     */
    async removeToast(id) {
        const toastEl = this.el.querySelector(`.at-toast[data-id="${id}"]`);
        toastEl.classList.add('close');
        toastEl.addEventListener('animationend', () => {
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
        });
    }
    /**
     * Removes a toast from the toaster container by tapping the toast
     *
     * @param toast The toast that was tapped
     */
    tapToast(toast) {
        if (toast.dismissible) {
            this.removeToast(toast.id);
        }
    }
    /**
     * Removes a toast from the toaster container by clicking the close button
     *
     * @param toast The toast to remove
     */
    clickCloseButton(toast) {
        this.removeToast(toast.id);
    }
    classSet(toast) {
        return `at-toast ${toast.dismissible ? '' : 'undismissible'}`;
    }
    /**
     * Renders the toaster container and all active toasts.
     * Each toast is wrapped with <at-message> for UI presentation.
     */
    render() {
        return (index.h("div", { key: '60bad218f81a1d5b3483fb079c1add3a8cc5d588', class: `at-toaster ${this.position}` }, this.toasts.map((toast) => (index.h("div", { class: this.classSet(toast), key: toast.id, "data-id": toast.id, onClick: () => this.tapToast(toast) }, index.h("at-message", { type: toast.type, message_title: toast.title, content: toast.message }, toast.closeButton && (index.h("at-button", { slot: "actions", type: "secondaryText", size: "sm", icon: "close", onClick: (event) => {
                event.stopPropagation();
                this.clickCloseButton(toast);
            } }))))))));
    }
};
AtToasterComponent.style = atToasterCss();

exports.at_toaster = AtToasterComponent;
