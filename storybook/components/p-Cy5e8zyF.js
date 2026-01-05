import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';

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
        return (h(Host, { key: 'f061eaad6e86803bb20352a40bf2aa8519c1955e', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '96d7a1c86f3b34856305a5d5f94e0f06d8d25724', class: "flex justify-between" }, h("div", { key: 'a143741ed71069226493ed12d55238eace161473', class: "flex" }, h("slot", { key: '9f893312fb592fbe3ca6fcebbf33bdda6182d86c', name: "search" })), h("div", { key: 'eb2283f6c5a5eceb328590e4df278455386162c9', class: "flex" }, h("slot", { key: 'b44a8f142e469200048d22f7ca590e405714c299', name: "export-menu" }), h("slot", { key: '5d5a747963b6cd556e2495d9ee78b2dc9786c795', name: "column-manager" }), h("slot", { key: '9a5b64c9d61f781ecf2af887a97a858d4566ecbd', name: "actions" }))), h("slot", { key: 'fa56a71d737b52c404c5693f7e27bd7e81803a30', name: "filters" })));
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
//# sourceMappingURL=p-Cy5e8zyF.js.map

//# sourceMappingURL=p-Cy5e8zyF.js.map