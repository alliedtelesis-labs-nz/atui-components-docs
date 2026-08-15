import { h, Host, } from "@stencil/core";
/**
 * @category Form Controls
 * @description A search component for filtering data.
 */
export class AtSearch {
    /**
     * Label text above the search bar.
     */
    label;
    /**
     * Hint text for the input, appears below the search bar.
     */
    hint_text;
    /**
     * Tooltip description, shown as an info icon at the right of the search box.
     */
    info_text;
    /**
     * Placeholder text inside the search component.
     */
    placeholder;
    /**
     * String content of the search.
     */
    model;
    searchEl;
    inputId = `search-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when the input is changed. Used by atui-table.
     */
    atuiChange;
    onChangeFn() {
        this.atuiChange.emit(this.searchEl.value);
        this.model = this.searchEl.value;
    }
    clearFn() {
        this.searchEl.value = '';
        this.atuiChange.emit(this.searchEl.value);
        this.model = '';
        this.searchEl.focus();
    }
    render() {
        return (h(Host, { key: '326bc470dfb43fe9a1c0301f8eec9c07c1cedeaa' }, this.label && (h("at-form-label", { key: '85ae6acc960367036427c87a85e9df79bbecd46c', label: this.label, for: this.inputId })), h("div", { key: '05c6a81171d340fd1bff80f2ebeff6d4a9ec0e4d', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border duration-300 ease-in-out focus-within:z-10 focus-within:ring" }, h("at-icon", { key: '89182307c987a24333214c6e0fd1ba67ce7f43ea', class: "fill-foreground px-8", name: "search" }), h("input", { key: '7949ab05f516025e83d72dfd6936cfd336d20ab5', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-24 h-full w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '57161c6de0ef77b63eeacd0408f6a995326bfa0f', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '5ff0cb568cb6754f7c39ac512826205530979d51', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: '029d70963da6d3d76d4634cb968ac1c61c4ca200', slot: "icon", name: "backspace" }))), this.info_text && (h("div", { key: '7bc8738ad360a66ee1455ae3fd1e73702bc9f140', class: "flex items-center pr-8", "data-name": "search-info" }, h("at-tooltip", { key: '8fb99cdbdc00cec3a567804a8338a64bdbc4fcc8', position: "top" }, h("at-icon", { key: '59b8535f8ef710375253a470b8bb8ec4d16bb9fd', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: 'da781b8dc8fa0b98678350363e1b0b8674d8b85d' }, this.info_text))))), this.hint_text && (h("span", { key: '8f6eaf4d25839a5534c2e0122800511a364556a3', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
    }
    static get is() { return "at-search"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label text above the search bar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "hint_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Hint text for the input, appears below the search bar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
            },
            "info_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Tooltip description, shown as an info icon at the right of the search box."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Placeholder text inside the search component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
            "model": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "String content of the search."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "model"
            }
        };
    }
    static get states() {
        return {
            "searchEl": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when the input is changed. Used by atui-table."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
