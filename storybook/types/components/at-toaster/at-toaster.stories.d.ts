declare const _default: {
    title: string;
    argTypes: {
        position: {
            options: string[];
            control: {
                type: string;
            };
        };
        type: {
            options: string[];
            control: {
                type: string;
            };
        };
        message: {
            control: string;
        };
        title: {
            control: string;
        };
        timeout: {
            control: string;
        };
        dismissible: {
            control: string;
        };
        closeButton: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: any;
/**
 * A toast for a condition rather than an event: `timeout: 0` so it never
 * expires on its own, and the handle `show` returns is what takes it down when
 * the condition clears. Dismissing twice, or after the toast has been tapped
 * away, does nothing.
 */
export declare const DismissedByHandle: () => string;
