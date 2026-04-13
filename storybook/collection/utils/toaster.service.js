import { DEFAULT_TOAST_OPTIONS, } from "../types/toast";
export class ToasterService {
    static id = 0;
    static containers = new Map();
    /**
     * Show a toast message
     *
     * @param type The type of the toast
     * @param message The message to display in the toast
     * @param options Additional options for the toast (title, position, timeout, dismissible)
     */
    static async show(type, message, options = {}) {
        const id = this.id++;
        const toastOptions = {
            ...DEFAULT_TOAST_OPTIONS,
            ...options,
        };
        const toast = { id, type, message, ...toastOptions };
        const toaster = await this.getToaster(toastOptions.position);
        toaster.addToast(toast);
    }
    /**
     * Get or create at-toaster component
     * Waits for the element to be upgraded and hydrated before returning.
     * Stores the toaster container with position in the Map
     */
    static async getToaster(position) {
        if (this.containers.has(position)) {
            const existing = this.containers.get(position);
            if (existing &&
                document.body.contains(existing)) {
                return existing;
            }
            this.containers.delete(position);
        }
        const el = document.createElement('at-toaster');
        el.setAttribute('position', position);
        document.body.appendChild(el);
        await customElements.whenDefined('at-toaster');
        const stencilEl = el;
        if (typeof stencilEl.componentOnReady === 'function') {
            await stencilEl.componentOnReady();
        }
        const toasterEl = el;
        this.containers.set(position, toasterEl);
        return toasterEl;
    }
}
