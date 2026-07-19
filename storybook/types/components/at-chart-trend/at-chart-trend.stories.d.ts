import type { StoryObj } from '@storybook/web-components';
declare const _default: {
    title: string;
    argTypes: {
        value: {
            control: {
                type: string;
            };
        };
        unit: {
            control: {
                type: string;
            };
        };
        delta: {
            control: {
                type: string;
            };
        };
        delta_direction: {
            control: {
                type: string;
            };
            options: string[];
        };
        mode: {
            control: {
                type: string;
            };
            options: string[];
        };
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
    };
};
export default _default;
export declare const Default: StoryObj;
export declare const Improvement: StoryObj;
export declare const UpIsGood: StoryObj;
export declare const NoDelta: StoryObj;
