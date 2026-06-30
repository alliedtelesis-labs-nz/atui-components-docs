import type { StoryObj } from '@storybook/web-components';
declare const _default: {
    title: string;
    argTypes: {
        status: {
            control: {
                type: string;
            };
            options: string[];
        };
        color_palette: {
            control: {
                type: string;
            };
            options: string[];
        };
        height: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
};
export default _default;
export declare const Default: StoryObj;
export declare const WithThresholds: StoryObj;
export declare const StatusGood: StoryObj;
export declare const StatusWarning: StoryObj;
export declare const StatusBad: StoryObj;
export declare const CustomRange: StoryObj;
export declare const ValueOnly: StoryObj;
