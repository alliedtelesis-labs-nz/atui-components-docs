import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';

const AtuiTableActionsComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTableActionsComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiExportCsv = createEvent(this, "atuiExportCsv", 7);
        this.atuiExportPdf = createEvent(this, "atuiExportPdf", 7);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
                    this.atuiExportCsv.emit();
                if (event.detail === 'PDF')
                    this.atuiExportPdf.emit(this.getVisibleColumns());
                break;
            case 'dropdown-filters':
                this.atuiChange.emit(event.detail);
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
        return (h(Host, { key: '5c424ecea9b024c4087166af8a3cf24f35837e84', class: "relative flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: '24ffd4a853c672b6d6a72924083cce62002bc720', class: "flex justify-between" }, h("div", { key: 'b52bea64a2489bd2d170ade435eb22d954f0b050', class: "flex" }, h("slot", { key: 'cd53d79cdffd7536aa3fe9c215fe033e3548a878', name: "search" })), h("div", { key: '6090746e2b50328b2099615180ffb53dddd96dcc', class: "flex" }, h("slot", { key: 'c017b99719daf9ecd0f7bbc3ffffa6f369f7f521', name: "export-menu" }), h("slot", { key: '14cc791576358f08f334843150bf4ec7fcfec5f4', name: "column-manager" }), h("slot", { key: 'dbf7f5a762f1d7f2232fbf753498d3d2b79ff1d1', name: "actions" }))), h("slot", { key: '3eabf1bc5161af5d95f1270f6ae8bb24e09dfc72', name: "filters" })));
    }
}, [260, "atui-table-actions", {
        "ag_grid": [16]
    }, [[0, "atuiChange", "changeHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-table-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-table-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTableActionsComponent);
            }
            break;
    } });
}

export { AtuiTableActionsComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BIUedxwY.js.map

//# sourceMappingURL=p-BIUedxwY.js.map