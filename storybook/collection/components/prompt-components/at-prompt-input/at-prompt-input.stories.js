const Template = (args) => `
<at-prompt-input
    label="${args.label ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    value="${args.value ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    min_rows="${args.min_rows ?? 1}"
    max_rows="${args.max_rows ?? 4}"
    max_length="${args.max_length ?? 2000}"
    ${args.disabled ? 'disabled' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.required ? 'required' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
`;
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
