'use strict';

var index = require('./index-GH7gxrjy.js');
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
        return (index.h(index.Host, { key: '4224dd62df6a30b84578d58c2e90e614fcc21be6', class: "flex h-full items-center" }, index.h("at-signal-strength", { key: '3f0485ed732f8d6b15c66b1d9aea96f1b418ee21', rssi: this.rssi, thresholds: this.params?.thresholds, variant: this.params?.variant ?? 'status', size: this.params?.size ?? 'md', show_value: this.params?.show_value ?? true })));
    }
};

exports.at_signal_strength_cell = AtSignalStrengthCell;
