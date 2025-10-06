import { r as registerInstance, c as createEvent, h, H as Host } from './index-B5bw8iR3.js';

const AtTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atPageSizeChange = createEvent(this, "atPageSizeChange", 7);
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
        return (h(Host, { key: 'e10c8b8de30d40e855ed3381379bc1ed47f2d9bd', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '97b2f806ddf2c66794e215ebe969b13ae6807da0' }, "Page Size: "), h("at-select", { key: '3b1106265694402b4b5b8a511a9e14d15e576eaa', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'c9b7c828194eb4f7cc9d0d1afc0afdebd23ab63e', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '1e1d27ae66e8bc160570e35b1f1587b587551115', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: 'c524b35b6e7cc3bed626117dbc73daa1e680f3f4' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '371a481ebd90b7092966fb507642008781a19514', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '1b90e4039259155b8fd6aa9ccc50c0bab7adb2a1', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtTablePagination as at_table_pagination };
//# sourceMappingURL=at-table-pagination.entry.js.map
