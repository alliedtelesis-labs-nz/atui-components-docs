import { h, Host, } from "@stencil/core";
import { ResizeController } from "../../utils/resize-controller";
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
    el;
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
        this.resizeController = new ResizeController({
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
        const nav = (h("nav", { ref: (el) => (this.sidebarEl = el), id: this.panelId, "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} w-${this.width}`, "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', role: "navigation", "aria-label": "Sidebar navigation" }, h("div", { class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { name: "sidebar-header" })), h("div", { class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { name: "sidebar-content" })), h("div", { class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { name: "sidebar-footer" })), this.resizable && (h("div", { ref: (el) => (this.resizeHandleEl = el), class: "resize-handle", "data-name": "resize-handle", role: "separator", "aria-orientation": "vertical", "aria-label": "Resize sidebar", tabindex: 0, onPointerDown: this.handleResizePointerDown, onKeyDown: this.handleResizeKeyDown }))));
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
                    "text": "Width of the sidebar. If resizable, only sets the initial width \u2014 the user's drag (or a\nrestored persisted/collapsed size) takes over after that, and later changes to this prop\nare not followed."
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
            },
            "resizable": {
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
                    "text": "Lets the user drag-resize the sidebar's width by its trailing edge, between min_width and\nmax_width. Off by default."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "resizable",
                "defaultValue": "false"
            },
            "min_width": {
                "type": "string",
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
                    "text": "Smallest width a drag or keyboard nudge can resize the sidebar down to \u2014 a hard floor, not\na threshold that closes it (any valid CSS length, including a design token var()). Ignored\nunless resizable is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min_width",
                "defaultValue": "'var(--token-width-sidebar-collapsed)'"
            },
            "max_width": {
                "type": "string",
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
                    "text": "Largest width a resizable sidebar can be dragged or nudged to (any valid CSS length,\nincluding a design token var(), or 'none' for no ceiling \u2014 the sidebar can then be dragged\nout to fill its entire group). Ignored unless resizable is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max_width",
                "defaultValue": "'var(--token-width-panel-xl)'"
            },
            "storage_key": {
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
                    "text": "When set, a resizable sidebar's width persists to localStorage under this key and is\nrestored on load. Ignored unless resizable is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "storage_key"
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
            }, {
                "method": "atuiSidebarResize",
                "name": "atuiSidebarResize",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the sidebar's current width in pixels whenever a resize drag or keyboard nudge\nchanges it. Only fires when resizable is true."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
    static get watchers() {
        return [{
                "propName": "resizable",
                "methodName": "watchResizableForToggle"
            }, {
                "propName": "min_width",
                "methodName": "watchResizeBoundsChange"
            }, {
                "propName": "max_width",
                "methodName": "watchResizeBoundsChange"
            }, {
                "propName": "isOpen",
                "methodName": "watchIsOpenForResize"
            }];
    }
}
