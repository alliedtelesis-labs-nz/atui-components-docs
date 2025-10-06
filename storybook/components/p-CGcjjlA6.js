import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-_-xuBOrs.js';

const AtTableActionsComponent = /*@__PURE__*/ proxyCustomElement(class AtTableActionsComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atExportCsv = createEvent(this, "atExportCsv", 7);
        this.atExportPdf = createEvent(this, "atExportPdf", 7);
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * AG Grid Api (provided by at-table createGrid method)
     */
    ag_grid;
    /**
     * Emits an event when 'Export CSV' is pressed on provided at-table-export-menu
     */
    atExportCsv;
    /**
     * Emits an event when 'Export PDF' is pressed on provided at-table-export-menu
     */
    atExportPdf;
    /**
     * Emits an event when filters change
     */
    atChange;
    changeHandler(event) {
        const target = event.target;
        switch (target.slot) {
            case 'column-manager':
                this.ag_grid.setColumnsVisible([event.detail.id], event.detail.checked);
                break;
            case 'search':
                this.ag_grid.setGridOption('quickFilterText', event.detail);
                break;
            case 'export-menu':
                if (event.detail === 'CSV')
                    this.atExportCsv.emit();
                if (event.detail === 'PDF')
                    this.atExportPdf.emit(this.getVisibleColumns());
                break;
            case 'dropdown-filters':
                this.atChange.emit(event.detail);
                break;
        }
    }
    getVisibleColumns() {
        return this.ag_grid.getAllDisplayedColumns().map((column) => {
            const userProvidedColDef = column.getUserProvidedColDef();
            return {
                actualWidth: column.getActualWidth(),
                field: userProvidedColDef?.field || '',
                displayName: this.ag_grid.getDisplayNameForColumn(column, 'header'),
            };
        });
    }
    render() {
        return (h(Host, { key: '70ff96d6fb1f744a9bfbb0d96cb1b55fd3d3ea6f', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '193d138c0bd6027c4796b1d062f4c59e221e38b9', class: "flex justify-between" }, h("div", { key: 'cdcd36c4a488b0d1e4747a56b9ad411f37dc7c75', class: "flex" }, h("slot", { key: '48d8dac00517e04c3a10e6ecd37efabe9398129a', name: "search" })), h("div", { key: 'da31c62734fd140ff6e02831f9a0ba3ede9df1fc', class: "flex" }, h("slot", { key: '2e74cea0a377bc3f935df5bf7416ab77521abad9', name: "export-menu" }), h("slot", { key: '05131f74d3b5ff79d44683d7794d5c019b84af2b', name: "column-manager" }), h("slot", { key: '116be9b43285ff26d419694cafcfaf044f3ff53c', name: "actions" }))), h("slot", { key: '59a458b8c5d212bcfd86703b05a98265f5cb75c3', name: "filters" })));
    }
}, [260, "at-table-actions", {
        "ag_grid": [16]
    }, [[0, "atuiChange", "changeHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-table-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTableActionsComponent);
            }
            break;
    } });
}

export { AtTableActionsComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CGcjjlA6.js.map

//# sourceMappingURL=p-CGcjjlA6.js.map