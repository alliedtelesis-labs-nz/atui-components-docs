'use strict';

var index = require('./index-D6_HFEr-.js');
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
        return (index.h(index.Host, { key: '48c8301fc450adcd7d3c245577ce6f319e086f58', class: "flex h-full items-center" }, index.h("at-signal-strength", { key: 'ac5c51e8fd3c565bc951a19c9f221d66c7cf088c', rssi: this.rssi, thresholds: this.params?.thresholds, variant: this.params?.variant ?? 'status', size: this.params?.size ?? 'md', show_value: this.params?.show_value ?? true })));
    }
};

exports.at_signal_strength_cell = AtSignalStrengthCell;
