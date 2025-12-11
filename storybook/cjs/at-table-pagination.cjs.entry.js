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
        return (index.h(index.Host, { key: '9acafab5661a980e2a91fdf02cd297b8fbc47e4c', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '5f79338b8b8012aa38d92440d965ee3ca21603c2' }, "Page Size: "), index.h("at-select", { key: '6698c6dde17f23244f860fe0a7ac2634594246be', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '9fdfb3f8fe59951cb31ef3bc283b5c1ee8cc3535', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: 'ceac86e6bb0e840549d24d954484f2368a8f9b45', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: 'e02c0e6beff3d6a2af777aacb341f22433aa93a2' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '76c94e4ea8abec1fadf850a98fc738cea3f541d5', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: '9e99bfc681e4299bf661e78453950019d7dc2218', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map
