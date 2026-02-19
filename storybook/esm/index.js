export { A as AtPromptResponseScore } from './prompt-CQKUaTzD.js';
export { A as AtChartColorPalette } from './chart-color-Ckr-udZ5.js';

const DEFAULT_TOAST_OPTIONS = {
    position: 'bottom-right',
    timeout: 5000,
    dismissible: true,
    closeButton: false,
};

class ToasterService {
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
        this.getToaster(toastOptions.position).addToast(toast);
    }
    /**
     * Get or create at-toaster component
     * Stores the toaster container with position in the Map
     */
    static getToaster(position) {
        if (this.containers.has(position)) {
            return this.containers.get(position);
        }
        const el = document.createElement('at-toaster');
        el.setAttribute('position', position);
        document.body.appendChild(el);
        const toasterEl = el;
        this.containers.set(position, toasterEl);
        return toasterEl;
    }
}

export { ToasterService };
