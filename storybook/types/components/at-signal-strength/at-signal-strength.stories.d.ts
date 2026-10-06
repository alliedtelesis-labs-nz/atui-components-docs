declare const _default: {
    title: string;
    argTypes: {
        rssi: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
        show_value: {
            control: string;
        };
        slot: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    render: (args: any) => string;
    args: {
        rssi: number;
        variant: string;
        size: string;
        show_value: boolean;
        slot: string;
    };
};
export declare const AllLevels: {
    render: (args: any) => string;
    args: {
        variant: string;
        size: string;
    };
};
export declare const Mono: {
    render: (args: any) => string;
    args: {
        variant: string;
        size: string;
    };
};
export declare const Sizes: {
    render: () => string;
};
export declare const WithValue: {
    render: (args: any) => string;
    args: {
        show_value: boolean;
        rssi: number;
        variant: string;
        size: string;
        slot: string;
    };
};
export declare const WithSlot: {
    render: (args: any) => string;
    args: {
        show_value: boolean;
        slot: string;
        rssi: number;
        variant: string;
        size: string;
    };
};
export declare const CustomThresholds: {
    render: () => string;
};
export declare const NoSignal: {
    render: () => string;
};
