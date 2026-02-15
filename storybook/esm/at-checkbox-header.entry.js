import { r as registerInstance, g as getElement, h } from './index-jvbUuQtg.js';

const AtCheckboxHeaderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    params;
    disabled;
    isChecked;
    get el() { return getElement(this); }
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
        return (h("at-checkbox", { key: '1ea5301d7588344041986ed37623706b8b329101', disabled: this.disabled, value: this.isChecked, onAtuiChange: (event) => this.setRowsValue(event.detail) }));
    }
};

export { AtCheckboxHeaderComponent as at_checkbox_header };
