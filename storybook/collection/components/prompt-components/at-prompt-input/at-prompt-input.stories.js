import { html } from "lit";
const meta = {
    title: 'Components/Prompt/Input',
    component: 'at-prompt-input',
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
            description: 'Controls whether the component is in progress (shows stop button) or ready to send (shows send button)',
        },
    },
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Enter your message...',
    },
    render: (args) => html `
        <at-prompt-input
            .placeholder=${args.placeholder}
            .value=${args.value}
            .label=${args.label}
            .hint_text=${args.hint_text}
            .error_text=${args.error_text}
            .info_text=${args.info_text}
            .disabled=${args.disabled}
            .readonly=${args.readonly}
            .required=${args.required}
            .invalid=${args.invalid}
            .max_length=${args.max_length}
            .min_rows=${args.min_rows}
            .max_rows=${args.max_rows}
            .in_progress=${args.in_progress}
        ></at-prompt-input>
    `,
};
export const WithLabel = {
    args: {
        label: 'Your Message',
        placeholder: 'Type your message here...',
        hint_text: 'Enter a clear and concise message',
    },
    render: (args) => html `
        <at-prompt-input
            .placeholder=${args.placeholder}
            .value=${args.value}
            .label=${args.label}
            .hint_text=${args.hint_text}
            .error_text=${args.error_text}
            .info_text=${args.info_text}
            .disabled=${args.disabled}
            .readonly=${args.readonly}
            .required=${args.required}
            .invalid=${args.invalid}
            .max_length=${args.max_length}
            .min_rows=${args.min_rows}
            .max_rows=${args.max_rows}
            .in_progress=${args.in_progress}
        ></at-prompt-input>
    `,
};
export const LargeTextarea = {
    args: {
        label: 'Detailed Message',
        placeholder: 'Enter a longer message...',
        min_rows: 4,
        max_rows: 12,
        hint_text: 'Use multiple lines for detailed explanations',
    },
    render: (args) => html `
        <at-prompt-input
            .placeholder=${args.placeholder}
            .value=${args.value}
            .label=${args.label}
            .hint_text=${args.hint_text}
            .error_text=${args.error_text}
            .info_text=${args.info_text}
            .variant=${args.variant}
            .disabled=${args.disabled}
            .readonly=${args.readonly}
            .required=${args.required}
            .invalid=${args.invalid}
            .max_length=${args.max_length}
            .in_progress=${args.in_progress}
        ></at-prompt-input>
    `,
};
export const WithCharacterLimit = {
    args: {
        label: 'Message',
        placeholder: 'Enter your message...',
        max_length: 500,
        hint_text: 'Maximum 500 characters',
    },
    render: (args) => html `
        <at-prompt-input
            .placeholder=${args.placeholder}
            .value=${args.value}
            .label=${args.label}
            .hint_text=${args.hint_text}
            .error_text=${args.error_text}
            .info_text=${args.info_text}
            .disabled=${args.disabled}
            .readonly=${args.readonly}
            .required=${args.required}
            .invalid=${args.invalid}
            .max_length=${args.max_length}
            .min_rows=${args.min_rows}
            .max_rows=${args.max_rows}
            .in_progress=${args.in_progress}
        ></at-prompt-input>
    `,
};
export const WithError = {
    args: {
        label: 'Message',
        placeholder: 'Enter your message...',
        error_text: 'This field is required',
        invalid: true,
        required: true,
    },
    render: (args) => html `
        <at-prompt-input
            .placeholder=${args.placeholder}
            .value=${args.value}
            .label=${args.label}
            .hint_text=${args.hint_text}
            .error_text=${args.error_text}
            .info_text=${args.info_text}
            .disabled=${args.disabled}
            .readonly=${args.readonly}
            .required=${args.required}
            .invalid=${args.invalid}
            .max_length=${args.max_length}
            .min_rows=${args.min_rows}
            .max_rows=${args.max_rows}
            .in_progress=${args.in_progress}
        ></at-prompt-input>
    `,
};
export const Disabled = {
    args: {
        label: 'Message',
        placeholder: 'Enter your message...',
        disabled: true,
        value: 'This input is disabled',
    },
    render: (args) => html `
        <at-prompt-input
            .placeholder=${args.placeholder}
            .value=${args.value}
            .label=${args.label}
            .hint_text=${args.hint_text}
            .error_text=${args.error_text}
            .info_text=${args.info_text}
            .disabled=${args.disabled}
            .readonly=${args.readonly}
            .required=${args.required}
            .invalid=${args.invalid}
            .max_length=${args.max_length}
            .min_rows=${args.min_rows}
            .max_rows=${args.max_rows}
            .in_progress=${args.in_progress}
        ></at-prompt-input>
    `,
};
export const InProgress = {
    args: {
        label: 'Message',
        placeholder: 'Generating response...',
        value: 'Tell me about AI',
        in_progress: true,
        hint_text: 'Click stop to interrupt generation',
    },
    render: (args) => html `
        <at-prompt-input
            .placeholder=${args.placeholder}
            .value=${args.value}
            .label=${args.label}
            .hint_text=${args.hint_text}
            .error_text=${args.error_text}
            .info_text=${args.info_text}
            .disabled=${args.disabled}
            .readonly=${args.readonly}
            .required=${args.required}
            .invalid=${args.invalid}
            .max_length=${args.max_length}
            .min_rows=${args.min_rows}
            .max_rows=${args.max_rows}
            .in_progress=${args.in_progress}
        ></at-prompt-input>
    `,
};
//# sourceMappingURL=at-prompt-input.stories.js.map
