import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DCAHuMKA.js';

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
        return (h(Host, { key: '6b02cf514b601770071daa884dc35be8fe379cf7', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '85b5acb9ce7a7325bff8108f8a8a1530377d8a38', class: "flex justify-between" }, h("div", { key: '9d5dfc16631b9b0d759ea7a17fc1fc1d2e046817', class: "flex" }, h("slot", { key: 'b48eac78b68b0e0965fff24a400d963ec57e59aa', name: "search" })), h("div", { key: '62411e0c50c6c94eba3ca150d643573f5c058372', class: "flex" }, h("slot", { key: 'c293120f59a84598f4cc9b8e600e5d368f26054e', name: "export-menu" }), h("slot", { key: '051b7448ec2fb614432a4f4ce8634140239097dc', name: "column-manager" }), h("slot", { key: 'a5e2380eda15542adec2f8b0c2295dad0b4bd00e', name: "actions" }))), h("slot", { key: '6215fefadf3e4647d5fc560a57c6a7f7174f8d6e', name: "filters" })));
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
//# sourceMappingURL=p-CwRlK9cp.js.map

//# sourceMappingURL=p-CwRlK9cp.js.map