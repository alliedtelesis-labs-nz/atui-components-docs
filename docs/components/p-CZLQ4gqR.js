import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { d as defineCustomElement$3 } from './p-BVyEJE0-.js';
import { d as defineCustomElement$2 } from './p-DpoOUufO.js';
import { d as defineCustomElement$1 } from './p-CHkT-iof.js';

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
        return (h("div", { key: 'deb1ec01aacac3f1db8e1761da1c7f5179426016', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (h("atui-button", { key: '2cc73f67b6bddcff607213f12f8c5d9b9fa4ddf7', size: "sm", type: "secondaryText", label: "Clear All", "data-name": "clear-all", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } })), h("slot", { key: 'e120a5bc552fb7db0ba79ec341690b7c1d9d281f' })));
    }
}, [260, "atui-chip-list", {
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
//# sourceMappingURL=p-CZLQ4gqR.js.map

//# sourceMappingURL=p-CZLQ4gqR.js.map