import { r as registerInstance, c as createEvent, h } from './index-BAAX2Der.js';

const AtChipList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return this.chips.map((chip) => (h("at-badge", { class: `flex items-center gap-4 text-center`, rounded: true, "data-name": "chip", type: this.disabled ? 'disabled' : 'default', size: this.size, label: chip }, !this.disabled && !this.readonly && (h("at-icon", { class: "fill-light hover:fill-med cursor-pointer", name: "cancel", "data-name": "chip-remove", tabIndex: 0, onClick: () => {
                this.removeChipHandler([chip]);
            }, onKeyDown: (event) => this.keyDownHandler(event, [chip]) })))));
    }
    render() {
        return (h("div", { key: '5202cb2f1c9e6bd705ee07da33561c1b01caee7d', class: "flex h-full flex-wrap items-center gap-4" }, this.chips && this.getChips, !this.disabled &&
            this.chips &&
            this.chips.length > 1 &&
            this.show_clear_all && (h("at-button", { key: '14c9a8492eba8188ea27743112047d4c18d7c9fd', size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => {
                this.removeChipHandler(this.chips);
            } }, h("at-icon", { key: 'bf3cbfab3938b7d1b712806b1cce276a59b23ecf', slot: "icon", name: "backspace" }))), h("slot", { key: '0f044434d46b5f41b0ea5c55f5e101a2186bbb6e' })));
    }
};

export { AtChipList as at_chip_list };
