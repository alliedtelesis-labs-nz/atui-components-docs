import { r as registerInstance, a as getElement, h, H as Host } from './index-Baj27LS8.js';
import { a as atParseRssi } from './signal-strength-CWUvYhTt.js';

const AtSignalStrengthCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    rssi;
    params;
    init(params) {
        this.params = params;
        const value = params.mapValueToRssi
            ? params.mapValueToRssi(params.data)
            : params.value;
        this.rssi = atParseRssi(value);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        return (h(Host, { key: 'a0a576c66d00a68c8ce47ff0229c974e3e1c8528', class: "flex h-full items-center" }, h("at-signal-strength", { key: 'b24ca20dd71a798fa15e73516d8d2e86fb20d336', rssi: this.rssi, thresholds: this.params?.thresholds, variant: this.params?.variant ?? 'status', size: this.params?.size ?? 'md', show_value: this.params?.show_value ?? true })));
    }
};

export { AtSignalStrengthCell as at_signal_strength_cell };
