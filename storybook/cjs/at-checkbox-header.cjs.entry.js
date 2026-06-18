'use strict';

var index = require('./index-C7y9_-Ob.js');

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
        return (index.h("at-checkbox", { key: 'c8f6bf10d7dc46c8e9ff0f0a1f75d840e2fd6b8c', disabled: this.disabled, checked: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
};

exports.at_checkbox_header = AtCheckboxHeaderComponent;
