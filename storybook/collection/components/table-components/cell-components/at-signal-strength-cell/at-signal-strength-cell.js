import { h, Host } from "@stencil/core";
import { atParseRssi } from "../../../../utils/signal-strength";
/**
 * @category Data Tables
 * @description A cell component that renders an RSSI value in dBm as signal-strength bars, followed by the dBm value by default.
 */
export class AtSignalStrengthCell {
    el;
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
    static get is() { return "at-signal-strength-cell"; }
    static get states() {
        return {
            "rssi": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
