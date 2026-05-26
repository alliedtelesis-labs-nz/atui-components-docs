'use strict';

var index = require('./index--r5sCsiV.js');

const AtChipList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiRemoveChip = index.createEvent(this, "atRemoveChip", 6);
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
        return this.chips.map((chip) => (index.h("at-badge", { class: `flex items-center gap-4 text-center`, rounded: true, "data-name": "chip", type: this.disabled ? 'disabled' : 'default', size: this.size, label: chip }, !this.disabled && !this.readonly && (index.h("button", { type: "button", class: "fill-foreground/40 hover:fill-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[fill] duration-150", "data-name": "chip-remove", "aria-label": `Remove ${chip}`, onClick: (event) => {
                event.stopPropagation();
                this.removeChipHandler([chip]);
            }, onKeyDown: (event) => this.keyDownHandler(event, [chip]) }, index.h("at-icon", { name: "cancel" }))))));
    }
    render() {
        return (index.h("div", { key: 'a25741de1261468b4941507703387a447febadcf', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (index.h("at-button", { key: '30340c5d596075fd0e0eb3cd9ea6b2b339536aff', size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } }, index.h("at-icon", { key: 'a7bba18a21229340f4d35e0674577b3461b7039f', slot: "icon", name: "backspace" }))), index.h("slot", { key: '57216d3dabccfb23f42ac686d558afa80b6671cd' })));
    }
};

exports.at_chip_list = AtChipList;
