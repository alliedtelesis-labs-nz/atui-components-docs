import { r as registerInstance, a as getElement, h, H as Host } from './index-DTCxn2cp.js';
import { d as atParseRssi } from './signal-strength-BpZOPn4u.js';

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
        return (h(Host, { key: '4224dd62df6a30b84578d58c2e90e614fcc21be6', class: "flex h-full items-center" }, h("at-signal-strength", { key: '3f0485ed732f8d6b15c66b1d9aea96f1b418ee21', rssi: this.rssi, thresholds: this.params?.thresholds, variant: this.params?.variant ?? 'status', size: this.params?.size ?? 'md', show_value: this.params?.show_value ?? true })));
    }
};

export { AtSignalStrengthCell as at_signal_strength_cell };
