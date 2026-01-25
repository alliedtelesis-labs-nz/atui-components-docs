'use strict';

var index = require('./index-CzDB71Wy.js');

const AtTablePagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        this.atPageSizeChange = index.createEvent(this, "atPageSizeChange", 7);
    }
    /**
     * Current page number
     */
    current_page = 1;
    /**
     * Total number of pages
     */
    num_pages = 1;
    /**
     * Options provided in dropdown for page sizes.
     */
    page_size_options = [
        { value: '5' },
        { value: '10' },
        { value: '20' },
        { value: '50' },
        { value: '100' },
    ];
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (index.h(index.Host, { key: '802bef6b9aab790da31ec268552b8ccec8c3096a', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '1b73ac13040e0dd7c866959afb99983aaef5a846' }, "Page Size: "), index.h("at-select", { key: '99ba6a024247cd673d93daf43cdd25abf5ad1ccc', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '1fe499b606f33411dd4bc5e33a9a9d3620d19c3b', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: '8939d3bbe0d48811ce59200807e10cd486f5e160', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: '0c80089ce6261a888a3a674fbd94b9413a4df41f' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '4ff51314000dc65ebb20e4981ce63cfc19acc69b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: '27a6751d090a3cfe5e1191265caa4550bc04f130', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
