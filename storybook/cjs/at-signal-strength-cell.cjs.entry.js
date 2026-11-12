'use strict';

var index = require('./index-DGi-f7lA.js');
var signalStrength = require('./signal-strength-CunZSyq8.js');

const AtSignalStrengthCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    rssi;
    params;
    init(params) {
        this.params = params;
        const value = params.mapValueToRssi
            ? params.mapValueToRssi(params.data)
            : params.value;
        this.rssi = signalStrength.atParseRssi(value);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        return (index.h(index.Host, { key: '6fc9fe8a1dcf0338501f74cbab4c4ed2b25bc98d', class: "flex h-full items-center" }, index.h("at-signal-strength", { key: 'd33373d02e3ef255c98df75877b03cd8c56d71c9', rssi: this.rssi, thresholds: this.params?.thresholds, variant: this.params?.variant ?? 'status', size: this.params?.size ?? 'md', show_value: this.params?.show_value ?? true })));
    }
};

exports.at_signal_strength_cell = AtSignalStrengthCell;
