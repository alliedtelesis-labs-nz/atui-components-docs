'use strict';

var index = require('./index-BRms7T38.js');

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
        return this.chips.map((chip) => (index.h("at-badge", { class: `flex items-center gap-4 text-center`, rounded: true, "data-name": "chip", type: this.disabled ? 'disabled' : 'default', size: this.size, label: chip }, !this.disabled && !this.readonly && (index.h("at-icon", { class: "fill-light hover:fill-med cursor-pointer", name: "cancel", "data-name": "chip-remove", tabIndex: 0, onClick: () => {
                this.removeChipHandler([chip]);
            }, onKeyDown: (event) => this.keyDownHandler(event, [chip]) })))));
    }
    render() {
        return (index.h("div", { key: '3ce463a9af4699a80dff468da8a770a3bd100ebb', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (index.h("at-button", { key: '01ff5b736c2e3a131bfcbbe468db17dc16cdebdd', size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } }, index.h("at-icon", { key: 'd3be2a98fc8e3e3cca1eef31ff98efd3faf9da93', slot: "icon", name: "backspace" }))), index.h("slot", { key: '0e29287cde92446a2c05b5a75c4536348bea8616' })));
    }
};

exports.at_chip_list = AtChipList;
