import { r as registerInstance, c as createEvent, h, H as Host } from './index-DW9Wz0FM.js';

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
        return (h(Host, { key: '2dcbf951947a01b028f61bb245352aab6fe75bf7', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'a4944d4498044b382d2e3dc69cedf7e13745eba6' }, "Page Size: "), h("at-select", { key: '77c25877d3ad2b411eb06342f31094f5cca99903', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'ce85d7665919f900512659d06763adc10c3226ce', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '162d745d16ea15eaee95ad9a104e2c05e87494c4', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: '459c4a7ce3b08530af2d0630a29da33bc54f2974' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '039068f7ff528109bd089e0e2059ab0194dd0fd9', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '0a3c6ab31c52722222fdeb1effbe64658227e3b1', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtTablePagination as at_table_pagination };
