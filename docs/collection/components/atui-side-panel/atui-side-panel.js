import { h } from "@stencil/core";
const panelVariants = {
    base: 'z-nav !fixed h-full min-w-panel-xs bg-white transition-transform shadow-md',
    origin: {
        left: 'left-0 top-0',
        right: 'right-0 top-0',
    },
    isExpanded: 'border-l-med border-l-2 transition-transform duration-[300ms] ease-[cubic-bezier(0.455,0.03,0.515,0.955)]',
    fixed: {
        true: 'fixed h-full top-0',
        false: 'absolute h-full',
    },
    noScrollbar: 'overflow-y-hidden',
};
const sizeVariants = {
    base: 'overflow-x-hidden overflow-y-auto h-full flex flex-col',
    size: {
        xs: 'w-panel-xs',
        sm: 'w-panel-sm',
        md: 'w-panel-md',
        lg: 'w-panel-lg',
        xl: 'w-panel-xl',
    },
};
/**
 * @category Overlays
 * @description A sliding side panel component for displaying secondary content or forms. Features customizable positioning, backdrop, and animation options.
 *
 * @slot content - Used for placing the content of the side panel.
 */
export class AtuiDialogComponent {
    constructor() {
        /**
         * Size of the size panel
         */
        this.size = 'xs';
        /**
         *  Position of the side panel
         */
        this.origin = 'right';
        /**
         * Puts a scrollbar on the sidepanel if set
         */
        this.has_scrollbar = true;
        /**
         * Displays a close button if set
         */
        this.has_close_button = true;
        /**
         * Will close the sidepanel if clicked off when set
         */
        this.close_backdrop = false;
        /**
         * If sidepanel should used fixed positioning (otherwise absolute)
         */
        this.fixed = true;
        this.isExpanded = false;
    }
    handleClose() {
        this.panelDialog.close();
        this.isExpanded = false;
    }
    get panelClasses() {
        return `${panelVariants.base} ${panelVariants.origin[this.origin]} ${this.isExpanded ? panelVariants.isExpanded : ''} 
        ${this.fixed ? panelVariants.fixed.true : panelVariants.fixed.false} ${!this.has_scrollbar ? panelVariants.noScrollbar : ''}`;
    }
    get sizeClasses() {
        return `${sizeVariants.base} ${sizeVariants.size[this.size]}`;
    }
    offClickHandler(event) {
        if (!this.close_backdrop || !this.panelDialog.open)
            return;
        if (!this.sidePanelWrapper.contains(event.target)) {
            this.handleClose();
        }
    }
    render() {
        return (h("div", { key: '2331314a9d681bee6b145dd211a248e10c2ead36' }, h("dialog", { key: '795f60de78016850c2e1f8b736fd94ffeadb1e7e', id: this.panel_id, ref: (el) => (this.panelDialog = el) }, h("div", { key: 'f3460bcb6adcfb3c9e1d7829afa192116fca3942', class: `${this.panelClasses} ${this.sizeClasses}`, ref: (el) => (this.sidePanelWrapper = el), "data-name": "panel-wrapper" }, h("div", { key: 'ecec539dd4c2e79007ac868f0b37d8092d3719dc', class: 'sticky top-0 z-nav' }, h("atui-header", { key: 'e36aa02d28022b6ce9d96b1cecdd0fde371079a5', header_title: this.panel_title, subtitle: this.panel_subtitle }, this.has_close_button && (h("span", { key: 'ad7ecf58f172b94a8869e93e42d72f943e5e42fc', class: 'rounded-full hover:bg-gray-100', slot: 'actions' }, h("i", { key: '8bd352ae36665cb43a377ec28998a5363ea0d910', class: "material-icons md-16 right-16 top-20 cursor-pointer p-8 !text-[18px]", onClick: () => this.handleClose(), "data-name": "panel-close" }, "close"))))), h("div", { key: '2e2cd97b6f54eb7573fe63f748c7bbaee416ea02', class: 'flex w-full flex-1 flex-col' }, h("slot", { key: 'fafe52992808cb3f1ffa17522b38a8fb905c28fc', name: 'content' }))))));
    }
    static get is() { return "atui-side-panel"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "SidePanelSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "SidePanelSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-side-panel/atui-side-panel.tsx",
                            "id": "src/components/atui-side-panel/atui-side-panel.tsx::SidePanelSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the size panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'xs'"
            },
            "panel_id": {
                "type": "string",
                "attribute": "panel_id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ID of the panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "panel_title": {
                "type": "string",
                "attribute": "panel_title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title displayed in the side panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "panel_subtitle": {
                "type": "string",
                "attribute": "panel_subtitle",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Subtitle displayed in the side panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "origin": {
                "type": "string",
                "attribute": "origin",
                "mutable": false,
                "complexType": {
                    "original": "SidePanelDirection",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "SidePanelDirection": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-side-panel/atui-side-panel.tsx",
                            "id": "src/components/atui-side-panel/atui-side-panel.tsx::SidePanelDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the side panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'right'"
            },
            "has_scrollbar": {
                "type": "boolean",
                "attribute": "has_scrollbar",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Puts a scrollbar on the sidepanel if set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "has_close_button": {
                "type": "boolean",
                "attribute": "has_close_button",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Displays a close button if set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "close_backdrop": {
                "type": "boolean",
                "attribute": "close_backdrop",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Will close the sidepanel if clicked off when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "fixed": {
                "type": "boolean",
                "attribute": "fixed",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If sidepanel should used fixed positioning (otherwise absolute)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {},
            "sidePanelWrapper": {},
            "panelDialog": {}
        };
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "offClickHandler",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=atui-side-panel.js.map
