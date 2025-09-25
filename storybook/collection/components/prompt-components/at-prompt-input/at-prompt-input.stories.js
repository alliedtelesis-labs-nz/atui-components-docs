const Template = (args) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return `
<at-prompt-input
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    placeholder="${(_b = args.placeholder) !== null && _b !== void 0 ? _b : ''}"
    value="${(_c = args.value) !== null && _c !== void 0 ? _c : ''}"
    hint_text="${(_d = args.hint_text) !== null && _d !== void 0 ? _d : ''}"
    error_text="${(_e = args.error_text) !== null && _e !== void 0 ? _e : ''}"
    info_text="${(_f = args.info_text) !== null && _f !== void 0 ? _f : ''}"
    min_rows="${(_g = args.min_rows) !== null && _g !== void 0 ? _g : 1}"
    max_rows="${(_h = args.max_rows) !== null && _h !== void 0 ? _h : 4}"
    max_length="${(_j = args.max_length) !== null && _j !== void 0 ? _j : 2000}"
    ${args.disabled ? 'disabled' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.required ? 'required' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
`;
};
export default {
    title: 'Components/Prompt/Input',
    argTypes: {
        label: {
            control: 'text',
            description: 'Input label text',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        value: {
            control: 'text',
            description: 'Input value',
        },
        min_rows: {
            control: 'number',
            description: 'Minimum number of rows to display',
        },
        max_rows: {
            control: 'number',
            description: 'Maximum number of rows to expand to',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        readonly: {
            control: 'boolean',
            description: 'Read-only state',
        },
        required: {
            control: 'boolean',
            description: 'Required field',
        },
        invalid: {
            control: 'boolean',
            description: 'Invalid state',
        },
        hint_text: {
            control: 'text',
            description: 'Hint text below label',
        },
        error_text: {
            control: 'text',
            description: 'Error message text',
        },
        info_text: {
            control: 'text',
            description: 'Info tooltip text',
        },
        max_length: {
            control: 'number',
            description: 'Maximum character length',
        },
        in_progress: {
            control: 'boolean',
            description: 'Shows stop button instead of send button',
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter your message...',
};
export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Your Message',
    placeholder: 'Type your message here...',
    hint_text: 'Enter a clear and concise message',
};
export const LargeTextarea = Template.bind({});
LargeTextarea.args = {
    label: 'Detailed Message',
    placeholder: 'Enter a longer message...',
    min_rows: 4,
    max_rows: 12,
    hint_text: 'Use multiple lines for detailed explanations',
};
export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
    label: 'Message',
    placeholder: 'Enter your message...',
    max_length: 500,
    hint_text: 'Maximum 500 characters',
};
export const WithError = Template.bind({});
WithError.args = {
    label: 'Message',
    placeholder: 'Enter your message...',
    error_text: 'This field is required',
    invalid: true,
    required: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Message',
    placeholder: 'Enter your message...',
    disabled: true,
    value: 'This input is disabled',
};
export const InProgress = Template.bind({});
InProgress.args = {
    label: 'Message',
    placeholder: 'Generating response...',
    value: 'Tell me about AI',
    in_progress: true,
    hint_text: 'Click stop to interrupt generation',
};
//# sourceMappingURL=at-prompt-input.stories.js.map
