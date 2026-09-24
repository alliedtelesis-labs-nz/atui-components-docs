'use strict';

var index = require('./index-JVxrGXVZ.js');
var resizeController = require('./resize-controller-DnOcuHpr.js');

const atSidebarCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}at-sidebar{display:flex;height:100%;width:100%;align-items:stretch;overflow:hidden;position:relative}at-sidebar>.backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.2);z-index:calc(var(--token-z-index-nav) - 1);cursor:pointer;will-change:opacity;transition:opacity var(--token-transition-time);animation:fadeInBackdrop 300ms forwards}at-sidebar .sidebar{display:flex;position:relative;flex-direction:column;flex:0 0 auto;background-color:var(--token-sidebar-background);color:var(--token-sidebar-foreground);fill:var(--token-sidebar-foreground);z-index:var(--token-z-index-nav);will-change:width;transition:width var(--token-transition-time);overflow-x:visible;overflow-y:auto;border-right:1px solid var(--token-sidebar-border)}at-sidebar .sidebar at-sidebar-trigger{display:flex;width:100%}at-sidebar .sidebar .resize-handle{position:absolute;top:0;bottom:0;right:-4px;width:9px;cursor:col-resize;touch-action:none;z-index:1}at-sidebar .sidebar .resize-handle:hover,at-sidebar .sidebar .resize-handle:focus-visible,at-sidebar .sidebar .resize-handle[data-dragging=true]{background-color:var(--token-border-focus, currentColor);opacity:0.15}at-sidebar[resizable] .sidebar{transition:none}at-sidebar.side-right .sidebar .resize-handle{right:auto;left:-4px}at-sidebar .sidebar-content{display:flex;flex:1;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding);overflow-y:auto}at-sidebar .sidebar-header,at-sidebar .sidebar-footer{display:flex;flex-direction:column;align-items:stretch;width:100%;padding:var(--token-sidebar-item-padding)}at-sidebar .sidebar-header:empty,at-sidebar .sidebar-footer:empty{display:none}at-sidebar .page-content{display:flex;flex-direction:column;flex-grow:1;overflow:auto}at-sidebar.side-right{flex-direction:row-reverse}at-sidebar.side-right .sidebar{border-right:none;border-left:1px solid var(--token-border-muted)}at-sidebar.mode-over .sidebar{position:absolute;top:0;bottom:0}at-sidebar[data-state=collapsed]>.sidebar.collapse-offcanvas{width:var(--token-width-sidebar-offscreen);overflow:hidden}at-sidebar[data-state=collapsed]>.sidebar.collapse-icon{width:var(--token-width-sidebar-collapsed)}at-sidebar[data-state=collapsed]>.sidebar.collapse-none{width:var(--token-width-sidebar)}at-sidebar[data-state=collapsed] i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:0;visibility:hidden;transition:opacity 150ms ease 0s, visibility 0s linear 150ms}at-sidebar[data-state=collapsed] at-sidebar-submenu [data-name=submenu-content]{display:none}at-sidebar[data-state=collapsed] at-menu{display:block}at-sidebar[data-state=collapsed] at-menu i[slot=menu-item-actions],at-sidebar[data-state=collapsed] at-menu [data-name=menu-content-wrapper] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{visibility:visible;opacity:1}at-sidebar[data-state=expanded] i[slot=menu-item-actions],at-sidebar[data-state=expanded] at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:1;visibility:visible;transition:opacity 150ms ease 150ms, visibility 0s}at-sidebar[data-state=expanded] at-sidebar-submenu [data-name=submenu-content]{display:block}at-sidebar .sidebar at-sidebar-trigger{width:100%;justify-content:flex-end}at-sidebar.collapse-icon.mode-over:not(.side-right) .at-sidebar__content{padding-left:var(--token-width-sidebar-collapsed)}at-sidebar.collapse-icon.mode-over.side-right .at-sidebar__content{padding-right:var(--token-width-sidebar-collapsed)}at-sidebar i[slot=menu-item-actions],at-sidebar at-sidebar-menuitem [data-name=sidebar-menu-item-label]{opacity:1;visibility:visible;transition:opacity 150ms ease 150ms, visibility 0s}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:40px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:60px}at-sidebar .sc-at-sidebar-menuitem .label,at-sidebar at-accordion-item details summary at-sidebar-menuitem .label{font-weight:var(--token-font-weight-med) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label,at-sidebar at-accordion-item [data-name=accordion-item-content] at-sidebar-menuitem .label{font-weight:var(--token-font-weight-normal) !important}at-sidebar [data-name=submenu-hover-content] at-sidebar-menuitem .label{color:var(--token-sidebar-foreground)}at-sidebar .sidebar-content at-sidebar-trigger{display:flex;justify-content:flex-end}at-sidebar .sidebar-content at-sidebar-trigger i{font-size:22px !important}at-sidebar[data-state=collapsed]>.sidebar .sidebar-content at-sidebar-trigger{display:flex;justify-content:center}at-sidebar[data-state=collapsed]>.sidebar .sidebar-content at-sidebar-trigger i{min-width:24px}at-sidebar .sidebar-content at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}at-sidebar .sidebar-content [data-name=accordion-item-content]{padding-bottom:16px}`;

// Ref-counted per storage_key, across every <at-sidebar> instance on the page — not per-instance
// state, since the whole point is catching two *different* instances sharing one key. A dev-only
// warning (not an error): resizing still works either way, but their persisted widths would
// otherwise silently overwrite each other in localStorage with no visible symptom to debug from.
const activeResizeStorageKeys = new Map();
function registerResizeStorageKey(key) {
    const count = activeResizeStorageKeys.get(key) ?? 0;
    if (count > 0) {
        console.warn(`<at-sidebar>: storage_key "${key}" is already used by another resizable at-sidebar on this page. Their persisted widths will silently overwrite each other in localStorage — give each a unique storage_key.`);
    }
    activeResizeStorageKeys.set(key, count + 1);
}
function unregisterResizeStorageKey(key) {
    const count = activeResizeStorageKeys.get(key) ?? 0;
    if (count <= 1) {
        activeResizeStorageKeys.delete(key);
    }
    else {
        activeResizeStorageKeys.set(key, count - 1);
    }
}
const AtSidebarComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiSidebarChange = index.createEvent(this, "atuiSidebarChange", 7);
        this.atuiSidebarResize = index.createEvent(this, "atuiSidebarResize", 7);
    }
    /**
     * Position of the sidebar on the page
     */
    side = 'left';
    /**
     * Width of the sidebar. If resizable, only sets the initial width — the user's drag (or a
     * restored persisted/collapsed size) takes over after that, and later changes to this prop
     * are not followed.
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
    /**
     * Lets the user drag-resize the sidebar's width by its trailing edge, between min_width and
     * max_width. Off by default.
     */
    resizable = false;
    /**
     * Smallest width a drag or keyboard nudge can resize the sidebar down to — a hard floor, not
     * a threshold that closes it (any valid CSS length, including a design token var()). Ignored
     * unless resizable is true.
     */
    min_width = 'var(--token-width-sidebar-collapsed)';
    /**
     * Largest width a resizable sidebar can be dragged or nudged to (any valid CSS length,
     * including a design token var(), or 'none' for no ceiling — the sidebar can then be dragged
     * out to fill its entire group). Ignored unless resizable is true.
     */
    max_width = 'var(--token-width-panel-xl)';
    /**
     * When set, a resizable sidebar's width persists to localStorage under this key and is
     * restored on load. Ignored unless resizable is true.
     */
    storage_key;
    isOpen = false;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange;
    /**
     * Emits the sidebar's current width in pixels whenever a resize drag or keyboard nudge
     * changes it. Only fires when resizable is true.
     */
    atuiSidebarResize;
    get el() { return index.getElement(this); }
    panelId;
    hasLoaded = false;
    hasExplicitTriggerId = false;
    provider = null;
    providerOwner;
    triggerEls = [];
    externalTriggerListeners = [];
    triggerObserver;
    sidebarEl;
    resizeHandleEl;
    resizeController;
    resizeGroupObserver;
    isDraggingResize = false;
    /** Set once registerResizePanels has actually run — see its own doc comment for why that's
     * deferred rather than unconditional in componentDidLoad. */
    resizePanelsRegistered = false;
    /**
     * The id this sidebar registers itself under with its own ResizeController. panelId itself
     * isn't safe to persist under: without an explicit trigger_id it's regenerated randomly on
     * every load (see componentWillLoad), so a persisted size would never be found again next
     * time. storage_key is already required to be a stable, consumer-chosen string for
     * persistence to mean anything, so it doubles as the stable id when set; an explicit
     * trigger_id is stable too. Only falls back to the random panelId when neither is set, which
     * is fine — that's also the case storage_key-based persistence wasn't requested for anyway.
     */
    get resizePanelId() {
        return (this.storage_key ??
            (this.hasExplicitTriggerId ? this.trigger_id : this.panelId));
    }
    /** Panel id representing "everything else" in the resize split — never rendered, just gives
     * the two-panel drag math a second id to shrink/grow against. */
    get resizeContentId() {
        return `${this.resizePanelId}__content`;
    }
    /** ResizeController's beginDrag/nudge grow "prevId" as the pointer moves toward increasing
     * clientX. That's the sidebar itself for a left sidebar (handle sits on its trailing/right
     * edge), but the OTHER side's content for a right sidebar (handle sits on the sidebar's
     * leading/left edge, with content to its left) — swapping which id is prevId here is what
     * keeps "drag/arrow-right grows the thing left of the handle" true regardless of side. */
    get resizePrevId() {
        return this.side === 'left' ? this.resizePanelId : this.resizeContentId;
    }
    get resizeNextId() {
        return this.side === 'left' ? this.resizeContentId : this.resizePanelId;
    }
    async componentWillLoad() {
        this.hasExplicitTriggerId = this.trigger_id !== undefined;
        this.panelId =
            this.trigger_id ??
                `sidebar-${Math.random().toString(36).substring(2, 11)}`;
        // Reflect the generated id too, so the attribute always matches what
        // the provider/DOM (id, aria-controls) actually use, even when the
        // consumer didn't set trigger_id explicitly.
        this.trigger_id = this.panelId;
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        await this.attachToProvider();
        this.atuiSidebarChange.emit(this.isOpen);
    }
    componentDidLoad() {
        this.hasLoaded = true;
        this.bindToDom();
    }
    /**
     * A sidebar that is removed and re-inserted — an Angular @if, a Vue v-if, any framework
     * that moves the element — gets connectedCallback again but NOT componentWillLoad or
     * componentDidLoad, which Stencil runs only on first load. Everything those two set up was
     * torn down by disconnectedCallback, so without this the re-inserted element renders but is
     * inert: unregistered with its provider (so toggleSidebar and at-sidebar-trigger do
     * nothing), deaf to menu-item clicks, and with no resize controller behind its handle.
     */
    connectedCallback() {
        if (!this.hasLoaded)
            return;
        void this.reattach();
    }
    /** Re-binding waits on the provider lookup so bindToDom listens on the provider this
     * sidebar has just registered with, not the one it was under before being moved. */
    async reattach() {
        await this.attachToProvider();
        this.bindToDom();
        this.provider?.setBackdrop(this.panelId, this.isModalOverlay());
    }
    /**
     * Resolved on every connect, not cached from first load: re-insertion can land the sidebar
     * under a different provider (or none at all).
     */
    async attachToProvider() {
        this.provider = this.el.parentElement?.closest('at-sidebar-provider');
        if (!this.provider)
            return;
        this.providerOwner = await this.provider.registerPanel(this.panelId, {
            side: this.side,
            isOpen: this.isOpen,
        });
    }
    bindToDom() {
        this.el.addEventListener('atuiClick', this.handleMenuItemClick);
        if (this.provider) {
            this.provider.addEventListener('atuiSidebarProviderChange', this.handleProviderChange);
        }
        if (this.hasExplicitTriggerId) {
            this.setupExternalTriggers();
        }
        if (this.resizable) {
            this.initResizeController();
            if (this.isOpen) {
                this.registerResizePanels();
            }
        }
    }
    /**
     * resizable is a plain, externally-settable @Prop — a consumer can flip it post-mount (e.g. a
     * responsive/preference toggle) same as any other prop, even though componentDidLoad only
     * fires once. Without this, render()'s handle markup (which reacts to `resizable` on every
     * render) would appear interactive-looking with no resizeController behind it to act on drags
     * or key presses.
     */
    watchResizableForToggle(isResizable, wasResizable) {
        if (isResizable === wasResizable)
            return;
        if (isResizable) {
            if (!this.resizeController) {
                this.initResizeController();
            }
            if (this.isOpen && !this.resizePanelsRegistered) {
                this.registerResizePanels();
            }
        }
        else {
            this.teardownResize();
        }
    }
    /**
     * Unlike the container's own size (tracked live via resizeGroupObserver), min_width/max_width
     * only get resolved to px when something asks for them — without this, a consumer changing
     * either reactively would leave the controller enforcing stale bounds until an unrelated
     * container resize happened to trigger refreshResizeBounds anyway.
     */
    watchResizeBoundsChange() {
        if (!this.resizable ||
            !this.resizeController ||
            !this.resizePanelsRegistered) {
            return;
        }
        this.refreshResizeBounds();
    }
    componentDidRender() {
        this.provider?.setBackdrop(this.panelId, this.isModalOverlay());
        this.updateTriggerAria();
        // First-open registration for a sidebar that started closed: the DOM has just been
        // patched to reflect isOpen by the time this runs, so measuring here (rather than in the
        // isOpen watcher, which fires before that patch) sees the real open width.
        if (this.resizable &&
            this.isOpen &&
            this.resizeController &&
            !this.resizePanelsRegistered) {
            this.registerResizePanels();
        }
    }
    disconnectedCallback() {
        this.el.removeEventListener('atuiClick', this.handleMenuItemClick);
        if (this.provider) {
            this.provider.removeEventListener('atuiSidebarProviderChange', this.handleProviderChange);
            if (this.providerOwner) {
                this.provider.unregisterPanel(this.panelId, this.providerOwner);
                this.providerOwner = undefined;
            }
        }
        this.triggerObserver?.disconnect();
        this.cleanupExternalTriggerListeners();
        this.teardownResize();
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
     * Bridges isOpen (however it changed — trigger click or provider toggle) onto the resize
     * styling: closed means the width this.sidebarEl carries is whatever the ordinary
     * collapse-icon/-offcanvas/-none CSS says, not a stale dragged flex-basis, so the inline
     * override is cleared rather than left fighting that CSS. Reopening restores the last
     * dragged/persisted width.
     */
    watchIsOpenForResize() {
        if (!this.resizable || !this.resizeController)
            return;
        this.syncResizeStyling();
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
        if (!this.isOwnNavigationItem(event.target)) {
            return;
        }
        if (this.collapsible === 'offcanvas' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    isOwnNavigationItem(target) {
        return (target.tagName === 'AT-SIDEBAR-MENUITEM' &&
            target.getAttribute('slot') !== 'accordion-trigger' &&
            target.closest('at-sidebar') === this.el);
    }
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
        // scanForTriggers only wires elements missing from triggerEls, so leaving the
        // already-seen triggers in it would make a re-scan after reconnect treat every
        // surviving trigger as still-wired and silently never re-bind it.
        this.triggerEls = [];
    }
    /**
     * The pixel size of the axis the drag/nudge math is a percentage of. Standalone, that's
     * at-sidebar's own box (.sidebar and .page-content are its direct flex children); nested in
     * at-sidebar-provider, at-sidebar only renders the <nav> itself — the provider is the flex
     * parent .sidebar and at-sidebar-inset actually share, so it's the one to measure there.
     */
    groupSizePx() {
        const target = this.provider ?? this.el;
        return target.getBoundingClientRect().width;
    }
    pxToPercent(px) {
        const groupWidth = this.groupSizePx();
        return groupWidth > 0 ? (px / groupWidth) * 100 : 0;
    }
    /**
     * min_width/max_width accept any valid CSS length (a bare px value or a design token var()),
     * OR max_width can be 'none' for no ceiling at all — briefly setting them as the sidebar's own
     * min-width/max-width and reading back getComputedStyle lets the browser resolve that, rather
     * than this component trying to parse CSS lengths itself. Only a probe, not a lasting
     * application: syncResizeStyling is the single place that actually applies them (only while
     * open — see its own comment for why), so this restores whatever was there before rather than
     * leaving its own temporary values in place, which would otherwise fight that when called
     * while the sidebar is closed (e.g. from the ResizeObserver in refreshResizeBounds, which can
     * fire regardless of open state).
     */
    resolvePxBounds() {
        if (!this.sidebarEl)
            return { minPx: 0, maxPx: 0 };
        const previousMinWidth = this.sidebarEl.style.minWidth;
        const previousMaxWidth = this.sidebarEl.style.maxWidth;
        this.sidebarEl.style.minWidth = this.min_width;
        this.sidebarEl.style.maxWidth = this.max_width;
        const computed = getComputedStyle(this.sidebarEl);
        // getComputedStyle's maxWidth is the CSS keyword string 'none' (not a length) when
        // max_width resolves to no ceiling — parseFloat('none') is NaN, which `|| 0` would
        // otherwise turn into a max of 0 (capping the sidebar to nothing) instead of unbounded.
        const parsedMaxWidth = parseFloat(computed.maxWidth);
        const bounds = {
            minPx: parseFloat(computed.minWidth) || 0,
            maxPx: Number.isNaN(parsedMaxWidth) ? Infinity : parsedMaxWidth,
        };
        this.sidebarEl.style.minWidth = previousMinWidth;
        this.sidebarEl.style.maxWidth = previousMaxWidth;
        return bounds;
    }
    /**
     * Controller + the ResizeObserver that keeps bounds current — neither depends on the sidebar
     * actually being open, so both are set up unconditionally as soon as resizable is on.
     * Registering the panels (which DOES need a real measurement) is deferred separately — see
     * registerResizePanels.
     */
    initResizeController() {
        if (this.storage_key) {
            registerResizeStorageKey(this.storage_key);
        }
        this.resizeController = new resizeController.ResizeController({
            direction: 'horizontal',
            storageKey: this.storage_key,
            onChange: () => this.handleResizeControllerChange(),
        });
        this.resizeGroupObserver = new ResizeObserver(() => this.refreshResizeBounds());
        this.resizeGroupObserver.observe(this.provider ?? this.el);
    }
    /** Undoes initResizeController, for both real unmount (disconnectedCallback) and a live
     * resizable -> false toggle (watchResizableForToggle) — the latter needs the sidebar left in
     * the same, un-resized-looking state a sidebar that was never resizable would render as. */
    teardownResize() {
        this.resizeGroupObserver?.disconnect();
        this.resizeGroupObserver = undefined;
        // Unmounting/toggling off mid-drag means pointerup/pointercancel never fire — end the
        // drag and clear the body styles here too, or they'd be stuck until a full reload.
        if (this.isDraggingResize) {
            this.handleResizePointerEnd();
        }
        document.removeEventListener('pointermove', this.handleResizePointerMove);
        document.removeEventListener('pointerup', this.handleResizePointerEnd);
        document.removeEventListener('pointercancel', this.handleResizePointerEnd);
        if (this.storage_key) {
            unregisterResizeStorageKey(this.storage_key);
        }
        this.resizeController = undefined;
        this.resizePanelsRegistered = false;
        if (this.sidebarEl) {
            this.sidebarEl.style.flex = '';
            this.sidebarEl.style.minWidth = '';
            this.sidebarEl.style.maxWidth = '';
        }
    }
    /**
     * The width a resizable sidebar starts at, before any persisted or dragged size exists: read
     * back whatever the ordinary `w-${width}` token class renders it at, rather than this
     * component trying to resolve that token to a pixel value itself. That only works while the
     * sidebar is actually open, though — collapse-icon/-offcanvas/-none CSS shrinks a closed one
     * to ~0/collapsed width, and measuring THAT would permanently lock the "default" size in at
     * whatever the collapsed width happens to be instead of the real open one. So this is called
     * only once the sidebar is confirmed open (componentDidLoad if it starts open, otherwise
     * componentDidRender's guard once it first becomes open — see resizePanelsRegistered).
     */
    /**
     * .sidebar's `transition: width ...` (see at-sidebar.scss) animates the collapse-icon/
     * -offcanvas/-none width change on open/close. Measuring right on that same open transition —
     * which is exactly when this is called, from componentDidRender right as isOpen flips true —
     * would otherwise catch it mid-animation, near its collapsed starting width rather than its
     * real open one. Silencing the transition for one synchronous read (before the browser has
     * had a chance to actually start animating) sidesteps that without needing to wait it out.
     */
    measureWidthPxIgnoringTransition() {
        if (!this.sidebarEl)
            return 0;
        const previousTransition = this.sidebarEl.style.transition;
        this.sidebarEl.style.transition = 'none';
        const width = this.sidebarEl.getBoundingClientRect().width;
        this.sidebarEl.style.transition = previousTransition;
        return width;
    }
    registerResizePanels() {
        if (!this.sidebarEl || !this.resizeController)
            return;
        const { minPx, maxPx } = this.resolvePxBounds();
        const currentPx = this.measureWidthPxIgnoringTransition();
        const minPercent = this.pxToPercent(minPx);
        // max_width: 'none' resolves maxPx to Infinity (see resolvePxBounds) — 100 is the real
        // ceiling regardless, since the sidebar can never occupy more than its whole group.
        const maxPercent = Math.min(100, this.pxToPercent(maxPx));
        this.resizeController.registerPanel(this.resizePanelId, {
            // registerPanel doesn't clamp defaultSize against the bounds passed alongside it —
            // clamped here so a `width` token wider than max_width (or narrower than min_width)
            // doesn't leave the controller's internal state out of sync with what the min-width/
            // max-width CSS backstop (see resolvePxBounds/syncResizeStyling) actually renders.
            defaultSize: Math.min(maxPercent, Math.max(minPercent, this.pxToPercent(currentPx))),
            minSize: minPercent,
            maxSize: maxPercent,
            // Not collapsible: min_width is a hard floor a drag stops at, not a threshold that
            // closes the sidebar. Making it collapsible snapped the sidebar shut a couple of
            // percentage points before min_width was actually reached, then re-expanded it again
            // once dragged back past that point — right at the boundary a user is deliberately
            // trying to drag to, that reads as the sidebar fighting the drag rather than
            // resizing smoothly. Closing remains available via the ordinary trigger button.
        });
        this.resizeController.registerPanel(this.resizeContentId, {
            // Mirrors the sidebar's own bounds rather than taking registerPanel's defaults
            // (a 10%-minSize fallback): left at the default, the content panel's own minSize
            // would silently cap the sidebar's reachable max at 100 - 10 = 90%, regardless of
            // maxPercent actually configured above.
            minSize: 100 - maxPercent,
            maxSize: 100 - minPercent,
        });
        this.resizePanelsRegistered = true;
        this.syncResizeStyling();
    }
    refreshResizeBounds() {
        if (!this.resizeController)
            return;
        const { minPx, maxPx } = this.resolvePxBounds();
        const minPercent = this.pxToPercent(minPx);
        const maxPercent = Math.min(100, this.pxToPercent(maxPx));
        this.resizeController.updateBounds(this.resizePanelId, {
            minSize: minPercent,
            maxSize: maxPercent,
        });
        this.resizeController.updateBounds(this.resizeContentId, {
            minSize: 100 - maxPercent,
            maxSize: 100 - minPercent,
        });
        // updateBounds only calls onChange (and so, indirectly, syncResizeStyling) when the new
        // bounds actually force panel.size to clamp — but syncResizeStyling's own px flex-basis is
        // a function of groupSizePx too, which just changed (this only runs from the container's
        // own ResizeObserver). A resize that doesn't force a clamp would otherwise leave the
        // sidebar's rendered width frozen at its old, now-stale pixel value, so this resyncs
        // unconditionally rather than relying on updateBounds's own change-detection.
        this.syncResizeStyling();
    }
    handleResizeControllerChange() {
        if (!this.resizeController || !this.resizePanelsRegistered)
            return;
        const panel = this.resizeController.getPanel(this.resizePanelId);
        if (!panel)
            return;
        this.syncResizeStyling();
        if (panel.size !== null) {
            this.atuiSidebarResize.emit(Math.round((panel.size / 100) * this.groupSizePx()));
        }
    }
    /**
     * Closed means whatever width the ordinary collapse-icon/-offcanvas/-none CSS gives .sidebar.
     * An inline flex-basis (or min/max-width) left over from being open would out-specificity that
     * CSS and get stuck showing a stale expanded width instead — or, at mount with default_open
     * false, break the collapsed width from the very first render — so all three are cleared
     * whenever closed rather than left in place, and only (re)applied once actually open.
     *
     * flex-basis in PIXELS, not the controller's own percentage — deliberately. Standalone,
     * .sidebar's immediate flex container is this.el, the same box groupSizePx measures, so a
     * percentage would resolve fine there. Nested in at-sidebar-provider, though, .sidebar's
     * immediate flex container is the at-sidebar HOST, which at-sidebar-provider.scss sizes as
     * `width: auto` (shrink-to-fit) — and per the flex spec, a percentage flex-basis against a
     * flex container with an indefinite size resolves as if it were 0, clamped back up only by
     * min-width. A pixel value has no such ambiguity: it's definite regardless of which box it's
     * read against, so the host's own shrink-to-fit sizing (and .sidebar's rendered width) both
     * end up correct in either arrangement.
     */
    syncResizeStyling() {
        if (!this.sidebarEl)
            return;
        const panel = this.resizeController?.getPanel(this.resizePanelId);
        if (!this.isOpen) {
            this.sidebarEl.style.flex = '';
            this.sidebarEl.style.minWidth = '';
            this.sidebarEl.style.maxWidth = '';
        }
        else {
            this.sidebarEl.style.minWidth = this.min_width;
            this.sidebarEl.style.maxWidth = this.max_width;
            this.sidebarEl.style.flex =
                panel?.size != null
                    ? `0 0 ${(panel.size / 100) * this.groupSizePx()}px`
                    : '';
        }
        // Direct DOM writes rather than a re-render, since this can run on every step of a drag —
        // mirrors at-resizable-group's own applyStyles().
        if (this.resizeHandleEl && panel) {
            this.resizeHandleEl.setAttribute('aria-valuenow', String(Math.round(panel.size ?? 0)));
            this.resizeHandleEl.setAttribute('aria-valuemin', String(Math.round(panel.minSize)));
            this.resizeHandleEl.setAttribute('aria-valuemax', String(Math.round(panel.maxSize)));
        }
    }
    clearBodyDragStyles() {
        document.body.style.removeProperty('user-select');
        document.body.style.removeProperty('cursor');
    }
    handleResizePointerDown = (event) => {
        if (!this.resizeController)
            return;
        event.preventDefault();
        this.isDraggingResize = true;
        this.resizeHandleEl?.setAttribute('data-dragging', 'true');
        this.resizeController.beginDrag(this.resizePrevId, this.resizeNextId, event.clientX, this.groupSizePx());
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
        document.addEventListener('pointermove', this.handleResizePointerMove);
        document.addEventListener('pointerup', this.handleResizePointerEnd);
        document.addEventListener('pointercancel', this.handleResizePointerEnd);
    };
    handleResizePointerMove = (event) => {
        if (!this.isDraggingResize || !this.resizeController)
            return;
        this.resizeController.updateDrag(event.clientX);
    };
    handleResizePointerEnd = () => {
        if (!this.isDraggingResize || !this.resizeController)
            return;
        this.isDraggingResize = false;
        this.resizeHandleEl?.setAttribute('data-dragging', 'false');
        this.resizeController.endDrag();
        this.clearBodyDragStyles();
        document.removeEventListener('pointermove', this.handleResizePointerMove);
        document.removeEventListener('pointerup', this.handleResizePointerEnd);
        document.removeEventListener('pointercancel', this.handleResizePointerEnd);
    };
    handleResizeKeyDown = (event) => {
        if (!this.resizeController)
            return;
        const nudgeAmount = event.shiftKey ? 1 : 5;
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            this.resizeController.nudge(this.resizePrevId, this.resizeNextId, nudgeAmount);
        }
        else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            this.resizeController.nudge(this.resizePrevId, this.resizeNextId, -nudgeAmount);
        }
        else if (event.key === 'Home') {
            event.preventDefault();
            // Home/End jump the SIDEBAR's own size to its bound (matching aria-valuemin/max,
            // which report resizePanelId, not whichever id physically leads on this side) — so
            // this always passes resizePanelId/resizeContentId in that fixed order, unlike
            // resizePrevId/resizeNextId above which deliberately swap by side for the arrow keys.
            this.resizeController.jumpToBound(this.resizePanelId, this.resizeContentId, true);
        }
        else if (event.key === 'End') {
            event.preventDefault();
            this.resizeController.jumpToBound(this.resizePanelId, this.resizeContentId, false);
        }
    };
    render() {
        const nav = (index.h("nav", { ref: (el) => (this.sidebarEl = el), id: this.panelId, "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} w-${this.width}`, "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', role: "navigation", "aria-label": "Sidebar navigation" }, index.h("div", { class: "sidebar-header", "data-name": "sidebar-header" }, index.h("slot", { name: "sidebar-header" })), index.h("div", { class: "sidebar-content", "data-name": "sidebar-content" }, index.h("slot", { name: "sidebar-content" })), index.h("div", { class: `sidebar-footer`, "data-name": "sidebar-footer" }, index.h("slot", { name: "sidebar-footer" })), this.resizable && (index.h("div", { ref: (el) => (this.resizeHandleEl = el), class: "resize-handle", "data-name": "resize-handle", role: "separator", "aria-orientation": "vertical", "aria-label": "Resize sidebar", tabindex: 0, onPointerDown: this.handleResizePointerDown, onKeyDown: this.handleResizeKeyDown }))));
        // Nested in at-sidebar-provider: render only the panel itself. The
        // provider owns the shared backdrop and at-sidebar-inset owns
        // page-content, so two nested panels never fight over the same
        // .page-content/.backdrop/[data-state] selectors (at-sidebar's
        // stylesheet is unscoped, so that collision is real, not
        // theoretical — see at-sidebar-provider.scss).
        if (this.provider) {
            return (index.h(index.Host, { "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, nav));
        }
        const isModalOverlay = this.isModalOverlay();
        return (index.h(index.Host, { "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (index.h("div", { class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), nav, index.h("div", { class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, index.h("slot", { name: "page-content" }))));
    }
    static get watchers() { return {
        "resizable": [{
                "watchResizableForToggle": 0
            }],
        "min_width": [{
                "watchResizeBoundsChange": 0
            }],
        "max_width": [{
                "watchResizeBoundsChange": 0
            }],
        "isOpen": [{
                "watchIsOpenForResize": 0
            }]
    }; }
};
AtSidebarComponent.style = atSidebarCss();

exports.at_sidebar = AtSidebarComponent;
