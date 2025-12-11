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
        return (h(Host, { key: '86b4b8727a0a668a3cd5a6e41337852b409f2974', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: 'cd0bf4654e6ebb198e806b5d46a2b69adfbc0fdc', class: "flex justify-between" }, h("div", { key: 'f4af6e09b077cef1b4032d023b4a8203fe8e9cd6', class: "flex" }, h("slot", { key: '7fa7d196e11fc7a628fc39adccdfeb989767ed78', name: "search" })), h("div", { key: '48d44b4e30c58efb70255485671cec13348346fa', class: "flex" }, h("slot", { key: '1dd64e61f69fad9a6a61228289e7155779a3a85a', name: "export-menu" }), h("slot", { key: 'fad26c3a90013cadc0f7cdb72bceda1669540991', name: "column-manager" }), h("slot", { key: 'f2548f5b05836ee586d2baaac7aa01079cc555c2', name: "actions" }))), h("slot", { key: 'e80821be18ea36df9c15529b12509966a503972e', name: "filters" })));
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
//# sourceMappingURL=p-D3MCKtPw.js.map

//# sourceMappingURL=p-D3MCKtPw.js.map