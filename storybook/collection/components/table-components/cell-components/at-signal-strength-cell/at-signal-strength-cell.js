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
        return (h(Host, { key: '6fc9fe8a1dcf0338501f74cbab4c4ed2b25bc98d', class: "flex h-full items-center" }, h("at-signal-strength", { key: 'd33373d02e3ef255c98df75877b03cd8c56d71c9', rssi: this.rssi, thresholds: this.params?.thresholds, variant: this.params?.variant ?? 'status', size: this.params?.size ?? 'md', show_value: this.params?.show_value ?? true })));
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
