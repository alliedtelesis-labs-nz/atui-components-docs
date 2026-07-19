import { h, } from "@stencil/core";
/**
 * @category Utilities
 * @description A chip list component for displaying collections of tags, filters, or selectable items. Supports removal, selection, and interactive chip management.
 *
 * @slot - Placed after the chips & the 'clear all' button
 */
export class AtChipList {
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
        return this.chips.map((chip) => (h("at-badge", { class: `flex items-center gap-4 text-center`, rounded: true, "data-name": "chip", type: this.disabled ? 'disabled' : 'default', size: this.size, label: chip }, !this.disabled && !this.readonly && (h("button", { type: "button", class: "fill-foreground/40 hover:fill-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[fill] duration-150", "data-name": "chip-remove", "aria-label": `Remove ${chip}`, onClick: (event) => {
                event.stopPropagation();
                this.removeChipHandler([chip]);
            }, onKeyDown: (event) => this.keyDownHandler(event, [chip]) }, h("at-icon", { name: "cancel" }))))));
    }
    render() {
        return (h("div", { key: '011ab96d045e917b7f0603d312ba19f725ef06e4', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (h("at-button", { key: 'da3bf5315591d6cf9ccc091f12f67b6f2410c795', size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } }, h("at-icon", { key: '6b356c4b6b771a72b4d064b247e9514104b2a355', slot: "icon", name: "backspace" }))), h("slot", { key: 'dd15f3141a370438c644f0214b92189559479f15' })));
    }
    static get is() { return "at-chip-list"; }
    static get properties() {
        return {
            "chips": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Items in the chip list."
                },
                "getter": false,
                "setter": false
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the list of chips. Prevents removing a chip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the list of chips but keeps the text readable. Prevents removing a chip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly"
            },
            "show_clear_all": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows the 'Clear All' button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_clear_all",
                "defaultValue": "true"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtBadgeSize",
                    "resolved": "\"lg\" | \"sm\"",
                    "references": {
                        "AtBadgeSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chip-list/at-chip-list.tsx",
                            "id": "src/components/at-chip-list/at-chip-list.tsx::AtBadgeSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the chips. Determines padding and font-size. For use in input chip lists."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'lg'"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiRemoveChip",
                "name": "atRemoveChip",
                "bubbles": true,
                "cancelable": false,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the 'X' on a chip, or 'Clear All' is clicked."
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }];
    }
}
