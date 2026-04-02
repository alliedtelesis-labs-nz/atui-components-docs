const Template = (args) => {
    var _a, _b, _c, _d;
    return `
<at-loading 
    size="${(_a = args.size) !== null && _a !== void 0 ? _a : 'md'}"
    type="${(_b = args.type) !== null && _b !== void 0 ? _b : 'default'}"
    variant="${(_c = args.variant) !== null && _c !== void 0 ? _c : 'spinner'}"
    text="${(_d = args.text) !== null && _d !== void 0 ? _d : 'Loading'}"
/>`;
};
export default {
    title: 'Components/Loading',
    argTypes: {
        variant: {
            options: ['spinner', 'dots', 'typing', 'wave', 'thinking'],
            control: { type: 'radio' },
        },
        type: {
            options: ['default', 'secondary', 'error'],
            control: { type: 'radio' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
        text: {
            control: { type: 'text' },
        },
    },
};
export const Spinner = Template.bind({});
Spinner.args = {
    variant: 'spinner',
    size: 'md',
    type: 'default',
};
export const Dots = Template.bind({});
Dots.args = {
    variant: 'dots',
    size: 'md',
    type: 'default',
};
export const Typing = Template.bind({});
Typing.args = {
    variant: 'typing',
    size: 'md',
    type: 'default',
    text: 'Typing',
};
export const Wave = Template.bind({});
Wave.args = {
    variant: 'wave',
    size: 'md',
    type: 'default',
};
export const Thinking = Template.bind({});
Thinking.args = {
    variant: 'thinking',
    size: 'md',
    type: 'default',
};
// Size variants example
export const Sizes = () => `
<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
    <div style="text-align: center;">
        <div>Small</div>
        <at-loading variant="spinner" size="sm" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Medium</div>
        <at-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Large</div>
        <at-loading variant="spinner" size="lg" type="default" />
    </div>
</div>
`;
// All variants showcase
export const AllVariants = () => `
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; padding: 20px;">
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Spinner</div>
        <at-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Dots</div>
        <at-loading variant="dots" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Typing</div>
        <at-loading variant="typing" size="md" type="default" text="Loading" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Wave</div>
        <at-loading variant="wave" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Thinking</div>
        <at-loading variant="thinking" size="md" type="default" />
    </div>
</div>
`;
//# sourceMappingURL=at-loading.stories.js.map
