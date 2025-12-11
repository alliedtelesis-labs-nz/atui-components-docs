import { r as registerInstance, c as createEvent, h, H as Host } from './index-EP34iaAr.js';

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
        return (h(Host, { key: '466e8ea83cd77eb706ad356e521aa3e898a05cde', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '8b678b14b1531f6e66693049c078ef5841578387' }, "Page Size: "), h("at-select", { key: '431cb58fd75651e0100a9cd46d2662db59aaf51a', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '62ea23b1a6e8de1be84bf9679db09eb37d7b2040', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '7259171c1b6f530abea936d12752320163555ab4', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: '321ffc72cdafba18e237ee19c1782d06f6e71f40' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '138a27a22a3c609b6cc4802a1cd7c80f80280c24', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: 'e206cfef260608aff1a174a826af12653893973b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtTablePagination as at_table_pagination };
//# sourceMappingURL=at-table-pagination.entry.js.map
