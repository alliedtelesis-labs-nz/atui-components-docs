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
        return (h(Host, { key: 'bcc5ae44a4ee57367a21fce46fc9817d70942faa' }, this.label && (h("at-form-label", { key: '4d0f264ba192c4931c3cd127b7bfc7eb179579be', label: this.label, for: this.inputId })), h("div", { key: '73431bfa7ecb384cfc21f07fae71e00ad2ea367d', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border duration-300 ease-in-out focus-within:z-10 focus-within:ring" }, h("at-icon", { key: 'cc29daea9d7523b925a7d2f9114f5c2acb8ec233', class: "fill-foreground px-8", name: "search" }), h("input", { key: '3e09828a08852be02be2d53f22714343d8a4f909', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-4 h-full w-full min-w-0 bg-transparent p-0 leading-[30px] text-ellipsis focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '591d3f63f0b8ebe38592d16183d449774a192e57', class: `mt-2 transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: 'd37e758195d954af5a602214c6cff161aed4484c', size: "sm", type: "secondaryText", "aria-label": "Clear search", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: '43eec26bc839f6cce9a9bb501cfd46c79baab552', slot: "icon", name: "cancel" }))), this.info_text && (h("div", { key: '8d4f58c933363cde7220e856a464dc5ceeffd582', class: "flex items-center pr-8", "data-name": "search-info" }, h("at-tooltip", { key: '4251393f14e1acad487e7978b8d66463793c2e28', position: "top" }, h("at-icon", { key: 'cc6adb678f8a3538db3a4c9b87f17c3009383f8d', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '39ca8bbada58ebd376d28c171fedeb1405188459' }, this.info_text))))), this.hint_text && (h("span", { key: '6b7d0900e052e34c866e568c8f34ea969981b069', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
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
