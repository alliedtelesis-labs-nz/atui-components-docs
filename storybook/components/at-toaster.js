import { p as proxyCustomElement, H, h } from './p-89eupKrN.js';
import { d as defineCustomElement$4 } from './p-BGpJJIcC.js';
import { d as defineCustomElement$3 } from './p-bn76tgB4.js';
import { d as defineCustomElement$2 } from './p-BhTUAIy4.js';

const atToasterCss = "@keyframes fadeIn{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}.at-toaster.sc-at-toaster{position:fixed;display:flex;flex-direction:column;z-index:var(--token-z-index-modal);gap:8px;padding:12px}.at-toaster.top-right.sc-at-toaster{top:12px;right:12px;align-items:flex-end}.at-toaster.top-left.sc-at-toaster{top:12px;left:12px;align-items:flex-start}.at-toaster.bottom-right.sc-at-toaster{bottom:12px;right:12px;align-items:flex-end}.at-toaster.bottom-left.sc-at-toaster{bottom:12px;left:12px;align-items:flex-start}.at-toaster.top-center.sc-at-toaster{top:12px;left:50%;transform:translateX(-50%);align-items:center}.at-toaster.bottom-center.sc-at-toaster{bottom:12px;left:50%;transform:translateX(-50%);align-items:center}.at-toast.sc-at-toaster{min-width:var(--token-width-panel-xs);max-width:var(--token-width-panel-sm);box-shadow:var(--token-shadow-1);border-radius:4px;overflow:hidden;display:flex;flex-direction:column;position:relative;cursor:pointer;animation:animInUp 300ms ease-out forwards}.at-toast.undismissible.sc-at-toaster{cursor:default}.at-toast.close.sc-at-toaster{animation:animOut 200ms ease-out forwards}";

const AtToasterComponent = /*@__PURE__*/ proxyCustomElement(class AtToasterComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Position of the toaster on the screen
     */
    position;
    toasts = [];
    /**
     * Adds a new toast to the toaster container
     * This method is called from the ToasterUtil when a new toast is created.
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
        const toastEl = document.querySelector(`.at-toast[data-id="${id}"]`);
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
        return (h("div", { key: '58fa94d1de3b68eae9d962ebb65ee669f56723cc', class: `at-toaster ${this.position}` }, this.toasts.map((toast) => (h("div", { class: this.classSet(toast), key: toast.id, "data-id": toast.id, onClick: () => this.tapToast(toast) }, h("at-message", { type: toast.type, message_title: toast.title, content: toast.message }, toast.closeButton && (h("at-button", { slot: "actions", type: "secondaryText", size: "sm", icon: "close", onClick: (event) => {
                event.stopPropagation();
                this.clickCloseButton(toast);
            } }))))))));
    }
    static get style() { return atToasterCss; }
}, [258, "at-toaster", {
        "position": [1],
        "toasts": [32],
        "addToast": [64],
        "removeToast": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-toaster", "at-button", "at-loading", "at-message"];
    components.forEach(tagName => { switch (tagName) {
        case "at-toaster":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtToasterComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtToaster = AtToasterComponent;
const defineCustomElement = defineCustomElement$1;

export { AtToaster, defineCustomElement };
//# sourceMappingURL=at-toaster.js.map

//# sourceMappingURL=at-toaster.js.map