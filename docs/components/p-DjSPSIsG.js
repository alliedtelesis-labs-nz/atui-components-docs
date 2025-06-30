import { p as proxyCustomElement, H, d as createEvent, h } from './p-DJD-7SVX.js';
import { d as defineCustomElement$3 } from './p-DIGwH9iS.js';
import { d as defineCustomElement$2 } from './p-CNIPth1r.js';
import { d as defineCustomElement$1 } from './p-ByK4-pDJ.js';

const AtuiChipList = /*@__PURE__*/ proxyCustomElement(class AtuiChipList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiRemoveChip = createEvent(this, "atuiRemoveChip", 6);
        /**
         * Shows the 'Clear All' button
         */
        this.show_clear_all = true;
        /**
         * Size of the chips. Determines padding and font-size. For use in input chip lists.
         */
        this.size = 'lg';
    }
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
        return this.chips.map((chip) => (h("atui-badge", { class: `flex items-center gap-4 text-center`, rounded: true, "data-name": "chip", type: this.disabled ? 'disabled' : 'default', size: this.size, label: chip }, !this.disabled && !this.readonly && (h("i", { class: "material-icons relative flex h-[16px] w-[16px] cursor-pointer items-center justify-center text-center text-icon-md text-light hover:text-med", "data-name": "chip-remove", tabIndex: 0, onClick: () => {
                this.removeChipHandler([chip]);
            }, onKeyDown: (event) => this.keyDownHandler(event, [chip]) }, "cancel")))));
    }
    render() {
        return (h("div", { key: '52f1c7390a1253897f840361e47c245b9138ef3c', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (h("atui-button", { key: '858370671bc16bcddf12785ada522f5c1c0ca119', size: "sm", type: "secondaryText", label: "Clear All", "data-name": "clear-all", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } })), h("slot", { key: '9a0d55d07e482de95ee03d7e858478f7754b32d5' })));
    }
}, [4, "atui-chip-list", {
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
    const components = ["atui-chip-list", "atui-badge", "atui-button", "atui-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-chip-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiChipList);
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiChipList as A, defineCustomElement as d };
//# sourceMappingURL=p-DjSPSIsG.js.map

//# sourceMappingURL=p-DjSPSIsG.js.map