import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description A collapsible sidebar navigation component with menu support and responsive behavior. Features animation, auto-collapse, and keyboard navigation. Nest inside at-sidebar-provider (instead of using it standalone) to place more than one sidebar on the same page.
 * @slot sidebar-header - Header of the sidebar (likely to be atui-sidebar-trigger)
 * @slot sidebar-content - Content displayed in the sidebar (likely to be atui-sidebar-menu elements)
 * @slot sidebar-footer - Footer displayed in the sidebar
 * @slot page-content - Content of the page. Ignored when nested inside at-sidebar-provider — use at-sidebar-inset for that instead.
 */
export class AtSidebarComponent {
    /**
     * Position of the sidebar on the page
     */
    side = 'left';
    /**
     * Width of the sidebar
     */
    width = 'menu';
    /**
     * Size of the sidebar when collapsed.
     */
    collapsible;
    /**
     * How the sidenav interacts with main content when open
     */
    mode;
    /**
     * Display a clickable backdrop when mode = over
     */
    backdrop = false;
    /**
     * Opens the sidebar by default when set
     */
    default_open = false;
    /**
     * Identifies this panel so external elements can toggle it by adding a matching `data-sidebar` attribute, and so at-sidebar-trigger can address it remotely (`data-sidebar` on the trigger). Also used as the panel's id when nested inside at-sidebar-provider. Auto-generated when omitted.
     */
    trigger_id;
    isOpen = false;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange;
    el;
    panelId;
    hasExplicitTriggerId = false;
    provider = null;
    providerOwner;
    triggerEls = [];
    externalTriggerListeners = [];
    triggerObserver;
    async componentWillLoad() {
        this.hasExplicitTriggerId = this.trigger_id !== undefined;
        this.panelId =
            this.trigger_id ??
                `sidebar-${Math.random().toString(36).substring(2, 11)}`;
        // Reflect the generated id too, so the attribute always matches what
        // the provider/DOM (id, aria-controls) actually use, even when the
        // consumer didn't set trigger_id explicitly.
        this.trigger_id = this.panelId;
        this.provider = this.el.parentElement?.closest('at-sidebar-provider');
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        if (this.provider) {
            this.providerOwner = await this.provider.registerPanel(this.panelId, {
                side: this.side,
                isOpen: this.isOpen,
            });
        }
        this.atuiSidebarChange.emit(this.isOpen);
    }
    componentDidLoad() {
        this.el.addEventListener('atuiClick', this.handleMenuItemClick);
        if (this.provider) {
            this.provider.addEventListener('atuiSidebarProviderChange', this.handleProviderChange);
        }
        if (this.hasExplicitTriggerId) {
            this.setupExternalTriggers();
        }
    }
    componentDidRender() {
        this.provider?.setBackdrop(this.panelId, this.isModalOverlay());
        this.updateTriggerAria();
    }
    disconnectedCallback() {
        this.el.removeEventListener('atuiClick', this.handleMenuItemClick);
        if (this.provider) {
            this.provider.removeEventListener('atuiSidebarProviderChange', this.handleProviderChange);
            if (this.providerOwner) {
                this.provider.unregisterPanel(this.panelId, this.providerOwner);
            }
        }
        this.triggerObserver?.disconnect();
        this.cleanupExternalTriggerListeners();
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        if (this.provider) {
            await this.provider.toggle(this.panelId);
            return;
        }
        this.isOpen = !this.isOpen;
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    async getIsOpen() {
        if (this.provider) {
            return this.provider.getIsOpen(this.panelId);
        }
        return this.isOpen;
    }
    isModalOverlay() {
        return this.mode === 'over' && this.backdrop && this.isOpen;
    }
    handleProviderChange = (event) => {
        if (event.detail.id !== this.panelId)
            return;
        this.isOpen = event.detail.isOpen;
        this.atuiSidebarChange.emit(this.isOpen);
    };
    handleBackdropClick = () => {
        if (this.mode === 'over' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    /**
    Automate closing of the menu via menu-item click if the menu is in offcanvas mode and currently open
     */
    handleMenuItemClick = (event) => {
        const target = event.target;
        if (target.getAttribute('slot') === 'accordion-trigger') {
            return;
        }
        if (this.collapsible === 'offcanvas' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    setupExternalTriggers() {
        this.scanForTriggers();
        this.triggerObserver = new MutationObserver(() => this.scanForTriggers());
        this.triggerObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-sidebar'],
        });
    }
    scanForTriggers() {
        const found = Array.from(document.querySelectorAll(`[data-sidebar="${CSS.escape(this.panelId)}"]`));
        // Elements that matched before but no longer do (detached, or their
        // data-sidebar attribute now points elsewhere) must have their
        // listeners torn down here — otherwise they leak, or keep toggling
        // this panel after being re-labelled for a different one.
        const removedEls = this.triggerEls.filter((el) => !found.includes(el));
        if (removedEls.length) {
            this.externalTriggerListeners =
                this.externalTriggerListeners.filter(({ element, event, handler }) => {
                    if (!removedEls.includes(element))
                        return true;
                    element.removeEventListener(event, handler);
                    return false;
                });
            removedEls.forEach((el) => {
                el.removeAttribute('aria-expanded');
                el.removeAttribute('aria-controls');
            });
        }
        const newEls = found.filter((el) => !this.triggerEls.includes(el));
        // at-sidebar-trigger addresses this panel through its own remote
        // lookup and manages its own click handling — wiring a second
        // listener here would toggle the panel twice per click.
        newEls
            .filter((el) => el.tagName.toLowerCase() !== 'at-sidebar-trigger')
            .forEach((el) => {
            const clickHandler = async (event) => {
                event.preventDefault();
                event.stopPropagation();
                await this.toggleSidebar();
            };
            const keydownHandler = async (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    event.stopPropagation();
                    await this.toggleSidebar();
                }
            };
            el.addEventListener('click', clickHandler);
            el.addEventListener('keydown', keydownHandler);
            this.externalTriggerListeners.push({ element: el, event: 'click', handler: clickHandler }, { element: el, event: 'keydown', handler: keydownHandler });
        });
        this.triggerEls = found;
        this.updateTriggerAria();
    }
    updateTriggerAria() {
        this.triggerEls.forEach((el) => {
            el.setAttribute('aria-expanded', String(this.isOpen));
            el.setAttribute('aria-controls', this.panelId);
        });
    }
    cleanupExternalTriggerListeners() {
        this.externalTriggerListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.externalTriggerListeners = [];
    }
    render() {
        const nav = (h("nav", { id: this.panelId, "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} w-${this.width}`, "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', role: "navigation", "aria-label": "Sidebar navigation" }, h("div", { class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { name: "sidebar-header" })), h("div", { class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { name: "sidebar-content" })), h("div", { class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { name: "sidebar-footer" }))));
        // Nested in at-sidebar-provider: render only the panel itself. The
        // provider owns the shared backdrop and at-sidebar-inset owns
        // page-content, so two nested panels never fight over the same
        // .page-content/.backdrop/[data-state] selectors (at-sidebar's
        // stylesheet is unscoped, so that collision is real, not
        // theoretical — see at-sidebar-provider.scss).
        if (this.provider) {
            return (h(Host, { "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, nav));
        }
        const isModalOverlay = this.isModalOverlay();
        return (h(Host, { "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), nav, h("div", { class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { name: "page-content" }))));
    }
    static get is() { return "at-sidebar"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-sidebar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar.css"]
        };
    }
    static get properties() {
        return {
            "side": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the sidebar on the page"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "side",
                "defaultValue": "'left'"
            },
            "width": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtSideBarWidth",
                    "resolved": "\"auto\" | \"menu\" | \"panel-lg\" | \"panel-md\" | \"panel-sm\" | \"panel-xl\" | \"panel-xs\"",
                    "references": {
                        "AtSideBarWidth": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-sidebar/at-sidebar.tsx",
                            "id": "src/components/at-sidebar/at-sidebar.tsx::AtSideBarWidth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Width of the sidebar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'menu'"
            },
            "collapsible": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'offcanvas' | 'icon' | 'none'",
                    "resolved": "\"icon\" | \"none\" | \"offcanvas\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the sidebar when collapsed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapsible"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'over' | 'push'",
                    "resolved": "\"over\" | \"push\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How the sidenav interacts with main content when open"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode"
            },
            "backdrop": {
                "type": "boolean",
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
                    "text": "Display a clickable backdrop when mode = over"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "backdrop",
                "defaultValue": "false"
            },
            "default_open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Opens the sidebar by default when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default_open",
                "defaultValue": "false"
            },
            "trigger_id": {
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
                    "text": "Identifies this panel so external elements can toggle it by adding a matching `data-sidebar` attribute, and so at-sidebar-trigger can address it remotely (`data-sidebar` on the trigger). Also used as the panel's id when nested inside at-sidebar-provider. Auto-generated when omitted."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "trigger_id"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiSidebarChange",
                "name": "atuiSidebarChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggleSidebar": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles the sidebar's open state.",
                    "tags": []
                }
            },
            "getIsOpen": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Getter method for the open state of the sidebar",
                    "tags": [{
                            "name": "returns",
                            "text": "The current open state of the sidebar"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
