import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
export class AtTableFilters {
    constructor() {
        /**
         * Currently selected columns and filter values
         */
        this.selected = [];
        this.clearFilters = () => {
            this.selected = [];
            this.atChange.emit([]);
        };
        this.clearSingleFilter = (columnId) => {
            this.selected = this.selected.filter((column) => column.id !== columnId);
            this.atChange.emit(this.selected.length ? this.selected : []);
        };
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    filterChangeHandler(event, columnId) {
        event.stopPropagation();
        this.selected = this.selected.map((column) => {
            if (column.id === columnId)
                return { id: column.id, value: event.detail };
            return column;
        });
        this.atChange.emit(this.selected);
    }
    render() {
        return (this.col_defs && (h(Host, { key: 'ae720bc323423fd279af3171ccea27ba87521942', class: "flex items-start gap-8" }, h("div", { key: 'a5f1785c775656e515fb2ad65d15e8b4b689d95a', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (h("p", { key: '109179ca64b8ccf9c6bc0da28101b18361460a9e', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("at-button", { key: '510f9e9ead96e3da96967c34743a544e875b38e9', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    static get is() { return "at-table-filters"; }
    static get properties() {
        return {
            "col_defs": {
                "type": "unknown",
                "attribute": "col_defs",
                "mutable": false,
                "complexType": {
                    "original": "ColDef[]",
                    "resolved": "ColDef<any, any>[]",
                    "references": {
                        "ColDef": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::ColDef"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions used in your at-table"
                },
                "getter": false,
                "setter": false
            },
            "selected": {
                "type": "unknown",
                "attribute": "selected",
                "mutable": true,
                "complexType": {
                    "original": "{ id: string; value: string }[]",
                    "resolved": "{ id: string; value: string; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currently selected columns and filter values"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atChange",
                "name": "atChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits id of column and filter value on change."
                },
                "complexType": {
                    "original": "FilterEvent[]",
                    "resolved": "FilterEvent[]",
                    "references": {
                        "FilterEvent": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/table-components/at-table-filters/at-table-filters.tsx",
                            "id": "src/components/table-components/at-table-filters/at-table-filters.tsx::FilterEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-table-filters.js.map
