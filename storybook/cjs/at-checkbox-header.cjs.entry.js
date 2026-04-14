'use strict';

var index = require('./index-BRms7T38.js');

const AtCheckboxHeaderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    params;
    disabled;
    isChecked;
    get el() { return index.getElement(this); }
    init(params) {
        this.params = params;
        this.params.width = 60;
        this.setDisabled();
        const nodes = this.params.api.getRenderedNodes().filter(Boolean);
        const checkedNodes = nodes.filter((rowNode) => {
            return typeof rowNode.data === 'boolean'
                ? rowNode.data
                : rowNode.data[this.params.column.colId];
        });
        this.isChecked = nodes.length && nodes.length === checkedNodes.length;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        this.setDisabled();
        return true;
    }
    setRowsValue(checked) {
        if (checked !== undefined) {
            const nodes = this.params.api.getRenderedNodes().filter(Boolean);
            nodes.forEach((rowNode) => {
                rowNode.setDataValue(this.params.column.colId, checked);
            });
        }
    }
    setDisabled() {
        if (!this.params?.api)
            return;
        const renderedNodes = this.params.api.getRenderedNodes();
        const data = renderedNodes.map((node) => node.data);
        if (this.params.getDisabled !== undefined) {
            this.disabled = this.params.getDisabled(data);
        }
    }
    render() {
        return (index.h("at-checkbox", { key: '77ed66b18b0403427ed5561e70d0c7c94746165a', disabled: this.disabled, checked: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
};

exports.at_checkbox_header = AtCheckboxHeaderComponent;
