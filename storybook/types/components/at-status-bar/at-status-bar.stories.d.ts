declare const _default: {
    title: string;
    argTypes: {
        status_bar: {
            control: string;
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
        segment_gap: {
            control: {
                type: string;
                min: number;
                step: number;
            };
        };
        show_tooltip: {
            control: string;
        };
        show_internal_value: {
            control: string;
        };
        tooltip_mode: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Default: any;
export declare const PartialBreakdown: any;
export declare const InternalValue: any;
export declare const SummaryTooltip: any;
