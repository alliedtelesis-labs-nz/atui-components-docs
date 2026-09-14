import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Layout
 * @description An individual resizable section within an at-resizable-group. Give it default_size to have it participate in the group's percentage layout, or omit it to let the panel hug its content and absorb whatever space its sized siblings don't claim.
 * @slot - Panel content
 */
export declare class AtResizablePanelComponent {
    el: HTMLElement;
    /** Initial flex-basis percentage. Omit to let the panel size itself to its content instead of participating in the resize percentages. */
    default_size?: number;
    /** Minimum flex-basis percentage a drag or keyboard nudge can shrink this panel to. */
    min_size: number;
    /** Maximum flex-basis percentage a drag or keyboard nudge can grow this panel to. */
    max_size: number;
    /** Enables snap-to-collapsed behavior once a drag pushes this panel near its min_size. */
    collapsible: boolean;
    /** Flex-basis percentage this panel snaps to once collapsed. */
    collapsed_size: number;
    private isCollapsed;
    /** Fires whenever this panel's size changes, with the new flex-basis percentage (null while unsized). */
    atuiResize: EventEmitter<number | null>;
    /** Fires when this panel's collapsed state changes, with the new isCollapsed value. */
    atuiCollapse: EventEmitter<boolean>;
    private group;
    private currentSize;
    private groupOwner?;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** Collapses this panel, if collapsible. No-op otherwise. */
    collapse(): Promise<void>;
    /** Expands this panel from its collapsed state. */
    expand(): Promise<void>;
    /** Returns whether this panel is currently collapsed. */
    getIsCollapsed(): Promise<boolean>;
    private handleGroupChange;
    render(): any;
}
