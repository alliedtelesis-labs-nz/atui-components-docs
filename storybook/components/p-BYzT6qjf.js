import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { d as defineCustomElement$3 } from './p-BRoK1DxF.js';
import { d as defineCustomElement$2 } from './p-CneQ50Br.js';
import { d as defineCustomElement$1 } from './p-bn76tgB4.js';

const AtChipList = /*@__PURE__*/ proxyCustomElement(class AtChipList extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiRemoveChip = createEvent(this, "atRemoveChip", 6);
    }
    /**
     * Items in the chip list.
     */
    chips;
    /**
     * Disables the list of chips. Prevents removing a chip.
     */
    disabled;
    /**
     * Disables the list of chips but keeps the text readable. Prevents removing a chip.
     */
    readonly;
    /**
     * Shows the 'Clear All' button
     */
    show_clear_all = true;
    /**
     * Size of the chips. Determines padding and font-size. For use in input chip lists.
     */
    size = 'lg';
    /**
     * Emitted when the 'X' on a chip, or 'Clear All' is clicked.
     */
    atuiRemoveChip;
    keyDownHandler(event, chipsToRemove) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.removeChipHandler(chipsToRemove);
        }
    }
    removeChipHandler(chipsToRemove) {
        this.atuiRemoveChip.emit(chipsToRemove);
        if (chipsToRemove.length > 1) {
            this.chips = [];
        }
        else {
            this.chips = this.chips.filter((chip) => chip !== chipsToRemove[0]);
        }
    }
    get getChips() {
        if (!this.chips) {
            return '';
        }
        return this.chips.map((chip) => (h("at-badge", { class: `flex items-center gap-4 text-center`, rounded: true, "data-name": "chip", type: this.disabled ? 'disabled' : 'default', size: this.size, label: chip }, !this.disabled && !this.readonly && (h("i", { class: "material-icons text-icon-md text-light hover:text-med relative flex h-[16px] w-[16px] cursor-pointer items-center justify-center text-center", "data-name": "chip-remove", tabIndex: 0, onClick: () => {
                this.removeChipHandler([chip]);
            }, onKeyDown: (event) => this.keyDownHandler(event, [chip]) }, "cancel")))));
    }
    render() {
        return (h("div", { key: 'e79e8aeed2f9bdf35bdf0aa5605c30d1e7a0c7ba', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (h("at-button", { key: '046ba6acc259db6bc4991a607e703dee8d175120', size: "sm", type: "secondaryText", label: "Clear All", "data-name": "clear-all", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } })), h("slot", { key: '5bfcabd7de237ca2077562faddf2fae94b995d76' })));
    }
}, [260, "at-chip-list", {
        "chips": [1040],
        "disabled": [4],
        "readonly": [4],
        "show_clear_all": [4],
        "size": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-chip-list", "at-badge", "at-button", "at-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "at-chip-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtChipList);
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtChipList as A, defineCustomElement as d };
//# sourceMappingURL=p-BYzT6qjf.js.map

//# sourceMappingURL=p-BYzT6qjf.js.map