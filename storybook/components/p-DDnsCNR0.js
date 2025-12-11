import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$7 } from './p-CneQ50Br.js';
import { d as defineCustomElement$6 } from './p-DF-2ncG7.js';
import { d as defineCustomElement$5 } from './p-CWPWF70m.js';
import { d as defineCustomElement$4 } from './p-CGXPhA5w.js';
import { d as defineCustomElement$3 } from './p-bn76tgB4.js';
import { d as defineCustomElement$2 } from './p-5w0YDcHW.js';
import { d as defineCustomElement$1 } from './p-GavH1i81.js';

const AtColumnManagerComponent = /*@__PURE__*/ proxyCustomElement(class AtColumnManagerComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    get el() { return this; }
    translations;
    checkedColumns = [];
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        this.initializeCheckedColumns();
    }
    colDefsChanged() {
        this.initializeCheckedColumns();
    }
    initializeCheckedColumns() {
        if (this.col_defs) {
            this.checkedColumns = this.col_defs
                .filter((colDef) => colDef.hide !== true)
                .map((colDef) => colDef.field);
        }
    }
    /**
     * Custom event used by at-table-actions to perform ag-grid logic
     *
     * Emitted when checkbox is clicked
     */
    atChange;
    changeHandler(event) {
        const selectedColumns = event.detail || [];
        const previousColumns = new Set(this.checkedColumns);
        const currentColumns = new Set(selectedColumns);
        selectedColumns.forEach((columnId) => {
            if (!previousColumns.has(columnId)) {
                this.atChange.emit({
                    id: columnId,
                    checked: true,
                });
            }
        });
        Array.from(previousColumns).forEach((columnId) => {
            if (!currentColumns.has(columnId)) {
                this.atChange.emit({
                    id: columnId,
                    checked: false,
                });
            }
        });
        this.checkedColumns = selectedColumns;
    }
    render() {
        return (h("at-menu", { key: '5fa9156c6d8fe6b51564e4929720debcb3017080', autoclose: false, width: "fit-content", align: "start" }, h("div", { key: '8f9282bd098197a8163bfac4c3ce443115117a20', slot: "menu-trigger" }, h("at-tooltip", { key: 'e74659ac2c4c05033e4ffc90b584aec59da7a85c', position: "top" }, h("at-button", { key: 'af41b59219778f6631d00f59fe1fc70e5905eb71', slot: "tooltip-trigger", type: "secondaryText", icon: "graphic_eq" }), h("span", { key: '739c7645b6205827f21a670297e96ec2ceede111' }, this.translations.ATUI.TABLE.MANAGE_COLUMNS))), h("at-checkbox-group", { key: 'c8b627df5031538b0c5942302feacbd71811d7a0', class: "w-fit", options: this.col_defs
                ? this.col_defs.map((colDef) => {
                    return {
                        option_id: colDef.field,
                        label: colDef.field,
                    };
                })
                : [], value: this.checkedColumns, onAtuiChange: (event) => this.changeHandler(event) })));
    }
    static get watchers() { return {
        "col_defs": ["colDefsChanged"]
    }; }
}, [256, "at-column-manager", {
        "col_defs": [16],
        "translations": [32],
        "checkedColumns": [32]
    }, undefined, {
        "col_defs": ["colDefsChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-column-manager", "at-button", "at-checkbox", "at-checkbox-group", "at-form-label", "at-loading", "at-menu", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-column-manager":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtColumnManagerComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-checkbox-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtColumnManagerComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-DDnsCNR0.js.map

//# sourceMappingURL=p-DDnsCNR0.js.map