import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Actions
 * @description A button for requesting a reload of data. Rendered as an icon-only button with a tooltip.
 */
export declare class AtReloadButton {
    el: any;
    translations: any;
    /**
     * Shows an indicator on the button when the underlying data has changed
     * since it was last loaded. This component does not detect changes
     * itself — the consumer sets this to true once it knows of an update
     * (e.g. from a websocket or poll) and back to false once the user
     * reloads.
     */
    has_updates?: boolean;
    componentWillLoad(): Promise<void>;
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload: EventEmitter<void>;
    render(): any;
}
