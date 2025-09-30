import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Bx9nFool.js';

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
                field: (userProvidedColDef === null || userProvidedColDef === void 0 ? void 0 : userProvidedColDef.field) || '',
                displayName: this.ag_grid.getDisplayNameForColumn(column, 'header'),
            };
        });
    }
    render() {
        return (h(Host, { key: '06710eb89b8eea90acba9ce23a247223edcd5fbc', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: 'af3cca4959fec2e5f88907be41c6aa660ba9bea2', class: "flex justify-between" }, h("div", { key: 'bb1d473cae7001aa6239a4f9f8efec8598d45d8e', class: "flex" }, h("slot", { key: 'c2f214fb30e2817fa567e4394797638aac6b4fd1', name: "search" })), h("div", { key: '319fd7e4af1713f131e6b9aea8f64e090956200e', class: "flex" }, h("slot", { key: '4ea99633cafbed4209d465554d805a1ba4101a24', name: "export-menu" }), h("slot", { key: 'f508743b600ee42e2b5f06fb941a592742291ebd', name: "column-manager" }), h("slot", { key: '670ccb70d8cc2613f225899c25c25f71d4542aac', name: "actions" }))), h("slot", { key: '083bacf6a8b031bfb245b8dc37ba6962a5bb5390', name: "filters" })));
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
//# sourceMappingURL=p-O62CIuYM.js.map

//# sourceMappingURL=p-O62CIuYM.js.map