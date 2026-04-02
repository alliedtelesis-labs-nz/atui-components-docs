import { html } from "lit";
const meta = {
    title: 'Components/Prompt/Container',
    component: 'at-prompt-container',
    argTypes: {
        header_title: {
            control: 'text',
            description: 'Container title',
        },
        subtitle: {
            control: 'text',
            description: 'Container subtitle',
        },
        placeholder: {
            control: 'text',
            description: 'Input placeholder text',
        },
        loading: {
            control: 'boolean',
            description: 'Loading state',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        max_height: {
            control: 'text',
            description: 'Maximum container height',
        },
        show_header: {
            control: 'boolean',
            description: 'Show header section',
        },
        show_clear_button: {
            control: 'boolean',
            description: 'Show clear messages button',
        },
        empty_state_title: {
            control: 'text',
            description: 'Empty state title',
        },
        empty_state_description: {
            control: 'text',
            description: 'Empty state description',
        },
        max_message_length: {
            control: 'number',
            description: 'Maximum message length',
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'AI Assistant',
        placeholder: 'Type your message here...',
        show_header: true,
        show_clear_button: true,
        max_height: '600px',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const WithSubtitle = {
    args: {
        title: 'AI Assistant',
        subtitle: 'Powered by advanced language models',
        placeholder: 'Ask me anything...',
        show_header: true,
        show_clear_button: true,
        max_height: '600px',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const NoHeader = {
    args: {
        placeholder: 'Type your message here...',
        show_header: false,
        show_clear_button: true,
        max_height: '500px',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const CompactSize = {
    args: {
        title: 'Quick Chat',
        placeholder: 'Ask a quick question...',
        show_header: true,
        show_clear_button: false,
        max_height: '400px',
        empty_state_title: 'Quick Chat',
        empty_state_description: 'Get fast answers to your questions',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 600px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const Loading = {
    args: {
        title: 'AI Assistant',
        placeholder: 'Type your message here...',
        loading: true,
        show_header: true,
        show_clear_button: true,
        max_height: '600px',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const Disabled = {
    args: {
        title: 'AI Assistant',
        subtitle: 'Currently unavailable',
        placeholder: 'Service is temporarily unavailable...',
        disabled: true,
        show_header: true,
        show_clear_button: true,
        max_height: '600px',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const WithCharacterLimit = {
    args: {
        title: 'AI Assistant',
        placeholder: 'Type your message here (max 100 characters)...',
        show_header: true,
        show_clear_button: true,
        max_height: '600px',
        max_message_length: 100,
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const CustomEmptyState = {
    args: {
        title: 'Code Assistant',
        subtitle: 'Get help with programming questions',
        placeholder: 'Describe your coding problem...',
        show_header: true,
        show_clear_button: true,
        max_height: '600px',
        empty_state_title: 'Ready to code?',
        empty_state_description: 'Ask me about programming languages, debugging, or best practices',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_clear_button=${args.show_clear_button}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .max_message_length=${args.max_message_length}
            ></at-prompt-container>
        </div>
    `,
};
export const InteractiveDemo = {
    args: {
        title: 'Interactive Demo',
        subtitle: 'Try sending messages to see the interface in action',
        placeholder: 'Type your message here...',
        show_header: true,
        show_new_thread_button: true,
        max_height: '600px',
    },
    render: (args) => html `
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <at-prompt-container
                id="demo-container"
                .header_title=${args.header_title}
                .subtitle=${args.subtitle}
                .placeholder=${args.placeholder}
                .loading=${args.loading}
                .disabled=${args.disabled}
                .max_height=${args.max_height}
                .show_header=${args.show_header}
                .show_new_thread_button=${args.show_new_thread_button}
                .max_message_length=${args.max_message_length}
                @atuiSubmit=${(e) => {
        const container = e.target;
        const content = e.detail;
        // Add user message
        container.addMessage('user', content);
        // Simulate loading
        container.loading = true;
        // Simulate AI response after 2 seconds
        const timeout = setTimeout(() => {
            container.addMessage('assistant', `You said: "${content}". This is a demo response from the AI assistant!`);
            container.loading = false;
        }, 2000);
        // Handle stop
        container.addEventListener('atuiStop', () => {
            clearTimeout(timeout);
            container.loading = false;
        }, { once: true });
    }}
            ></at-prompt-container>
        </div>
    `,
};
//# sourceMappingURL=at-prompt-container.stories.js.map
