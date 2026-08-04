'use strict';

var index = require('./index-EXiXggWw.js');

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
        return (index.h("div", { key: '48be1454de6b15933cca780458d0d9b9a6fa9d96', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (index.h("at-button", { key: 'e025c98bfbaabf45528320b37663b36d70b7c7b7', size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } }, index.h("at-icon", { key: '9eb23fc5ded498ff7bcd4d6b0e5b73e763fe1c87', slot: "icon", name: "backspace" }))), index.h("slot", { key: 'd3db7b8442ed63bcac0c603ccd8a192e46e08425' })));
    }
};

exports.at_chip_list = AtChipList;
