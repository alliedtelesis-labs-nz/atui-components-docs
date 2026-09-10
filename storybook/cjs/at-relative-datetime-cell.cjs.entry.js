'use strict';

var index = require('./index-zRWHCAJe.js');
var relativeTimeLabel = require('./relative-time-label-Cl44YHvZ.js');

const AtRelativeDateTimeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    relativeLabel = '-';
    dateTimeLabel = '';
    init(params) {
        this.setValues(params);
    }
    refresh(params) {
        this.setValues(params);
        return true;
    }
    getGui() {
        return this.el;
    }
    setValues(params) {
        const sourceDateTime = params.getDateTime
            ? params.getDateTime(params.data)
            : params.value;
        if (!sourceDateTime) {
            this.relativeLabel = '-';
            this.dateTimeLabel = '';
            return;
        }
        const parsedDate = relativeTimeLabel.parseCellDateTime(sourceDateTime);
        if (!parsedDate) {
            this.relativeLabel = '-';
            this.dateTimeLabel = '';
            return;
        }
        this.relativeLabel = relativeTimeLabel.getRelativeTimeLabel(parsedDate);
        this.dateTimeLabel = sourceDateTime;
    }
    render() {
        return (index.h(index.Host, { key: '6f3b1394acf5845b2f034ff67240392c5b8ca33a', class: "flex h-full items-center" }, index.h("div", { key: 'c021c01311ded4d12c24529b28079609219aadaa', class: "flex h-full flex-col justify-center" }, index.h("div", { key: '61d63d741fe3d1916c39c2c64300d8a6d84a49e0', class: "truncate text-sm leading-normal" }, this.relativeLabel), this.dateTimeLabel && (index.h("div", { key: '0974275138a71dbc810d67391c5f242969c5ea0b', class: "text-med truncate text-[10px] leading-normal font-normal" }, "(", this.dateTimeLabel, ")")))));
    }
};

exports.at_relative_datetime_cell = AtRelativeDateTimeCell;
