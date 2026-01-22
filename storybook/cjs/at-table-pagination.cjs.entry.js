'use strict';

var index = require('./index-COiLLAKF.js');

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
        return (index.h(index.Host, { key: 'd69a51f277b6c21abd17a45d08a77664b1ee7db7', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'c2b3814db0f8b214d780f0b2cd39e60d64d857bb' }, "Page Size: "), index.h("at-select", { key: 'b367fd395abd74409d35e93003fbdcf0ce7a1b57', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: 'a47ca1eeca7252cb222492ae87c018fa93d529e3', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: '0920e47aa3be58872c194f362d8e364d4e1a891b', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: '819ed5dc363f195af2099aa6b142b6f6f2add5b4' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '2d2f0d7c0fa614882cc950b65fcf63451f76621e', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: '07d9c8c915388330b84dd7b2a675c91df89055c7', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map
