import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CIMU6MgJ.js';

const atResizablePanelCss = () => `at-resizable-panel{display:flex;flex-direction:column;min-width:0;min-height:0;overflow:auto}at-resizable-panel.is-collapsed{overflow:hidden}`;

const AtResizablePanelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiResize = createEvent(this, "atuiResize", 7);
        this.atuiCollapse = createEvent(this, "atuiCollapse", 7);
    }
    get el() { return getElement(this); }
    /** Initial flex-basis percentage. Omit to let the panel size itself to its content instead of participating in the resize percentages. */
    default_size;
    /** Minimum flex-basis percentage a drag or keyboard nudge can shrink this panel to. */
    min_size = 10;
    /** Maximum flex-basis percentage a drag or keyboard nudge can grow this panel to. */
    max_size = 100;
    /** Enables snap-to-collapsed behavior once a drag pushes this panel near its min_size. */
    collapsible = false;
    /** Flex-basis percentage this panel snaps to once collapsed. */
    collapsed_size = 0;
    isCollapsed = false;
    /** Fires whenever this panel's size changes, with the new flex-basis percentage (null while unsized). */
    atuiResize;
    /** Fires when this panel's collapsed state changes, with the new isCollapsed value. */
    atuiCollapse;
    group = null;
    currentSize = null;
    groupOwner;
    async componentWillLoad() {
        if (!this.el.id) {
            this.el.id = `resizable-panel-${Math.random().toString(36).substring(2, 11)}`;
        }
        this.group = this.el.parentElement?.closest('at-resizable-group');
        if (!this.group)
            return;
        this.groupOwner = await this.group.registerPanel(this.el.id, this.el, {
            defaultSize: this.default_size,
            minSize: this.min_size,
            maxSize: this.max_size,
            collapsible: this.collapsible,
            collapsedSize: this.collapsed_size,
        });
        const state = await this.group.getPanelState(this.el.id);
        if (state) {
            this.currentSize = state.size;
            this.isCollapsed = state.isCollapsed;
        }
    }
    componentDidLoad() {
        this.group?.addEventListener('atuiResizableChange', this.handleGroupChange);
    }
    disconnectedCallback() {
        this.group?.removeEventListener('atuiResizableChange', this.handleGroupChange);
        if (this.groupOwner) {
            this.group?.unregisterPanel(this.el.id, this.groupOwner);
        }
    }
    /** Collapses this panel, if collapsible. No-op otherwise. */
    async collapse() {
        await this.group?.collapsePanel(this.el.id);
    }
    /** Expands this panel from its collapsed state. */
    async expand() {
        await this.group?.expandPanel(this.el.id);
    }
    /** Returns whether this panel is currently collapsed. */
    async getIsCollapsed() {
        return this.isCollapsed;
    }
    handleGroupChange = (event) => {
        const entry = event.detail.find((candidate) => candidate.id === this.el.id);
        if (!entry)
            return;
        if (entry.size !== this.currentSize) {
            this.currentSize = entry.size;
            this.atuiResize.emit(entry.size);
        }
        if (entry.isCollapsed !== this.isCollapsed) {
            this.isCollapsed = entry.isCollapsed;
            this.atuiCollapse.emit(entry.isCollapsed);
        }
    };
    render() {
        return (h(Host, { key: 'a34a4f490b7665fae5db6b7178ffd641f615b44f', "data-name": "resizable-panel", "data-collapsed": this.isCollapsed ? 'true' : 'false', role: "group" }, h("slot", { key: '4ee6763100b68cb6193aed9efe579ceea0d3ccc4' })));
    }
};
AtResizablePanelComponent.style = atResizablePanelCss();

export { AtResizablePanelComponent as at_resizable_panel };
