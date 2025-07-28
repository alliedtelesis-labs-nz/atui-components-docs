import { html } from "lit";
const meta = {
    title: 'Components/Prompt/Message',
    component: 'atui-prompt-message',
    argTypes: {
        role: {
            control: 'select',
            options: ['user', 'assistant', 'system'],
            description: 'Message role/sender',
        },
        content: {
            control: 'text',
            description: 'Message content',
        },
        name: {
            control: 'text',
            description: 'Sender name',
        },
        avatar: {
            control: 'text',
            description: 'Avatar image URL',
        },
        timestamp: {
            control: 'text',
            description: 'Message timestamp',
        },
        loading: {
            control: 'boolean',
            description: 'Loading state',
        },
        error: {
            control: 'boolean',
            description: 'Error state',
        },
        error_message: {
            control: 'text',
            description: 'Error message text',
        },
    },
};
export default meta;
export const UserMessage = {
    args: {
        role: 'user',
        content: 'Hello! Can you help me understand how this component works?',
        name: 'John Doe',
        timestamp: '2:30 PM',
    },
    render: (args) => html `
        <atui-prompt-message
            .role=${args.role}
            .content=${args.content}
            .name=${args.name}
            .avatar=${args.avatar}
            .timestamp=${args.timestamp}
            .loading=${args.loading}
            .error=${args.error}
            .error_message=${args.error_message}
        ></atui-prompt-message>
    `,
};
export const AssistantMessage = {
    args: {
        role: 'assistant',
        content: 'Of course! This component is designed to display chat messages in different styles based on the sender role. It supports user messages, assistant responses, and system notifications.',
        name: 'AI Assistant',
        timestamp: '2:31 PM',
    },
    render: (args) => html `
        <atui-prompt-message
            .role=${args.role}
            .content=${args.content}
            .name=${args.name}
            .avatar=${args.avatar}
            .timestamp=${args.timestamp}
            .loading=${args.loading}
            .error=${args.error}
            .error_message=${args.error_message}
        ></atui-prompt-message>
    `,
};
export const SystemMessage = {
    args: {
        role: 'system',
        content: 'Conversation started at 2:30 PM',
        timestamp: '2:30 PM',
    },
    render: (args) => html `
        <atui-prompt-message
            .role=${args.role}
            .content=${args.content}
            .name=${args.name}
            .avatar=${args.avatar}
            .timestamp=${args.timestamp}
            .loading=${args.loading}
            .error=${args.error}
            .error_message=${args.error_message}
        ></atui-prompt-message>
    `,
};
export const LoadingMessage = {
    args: {
        role: 'assistant',
        name: 'AI Assistant',
        loading: true,
    },
    render: (args) => html `
        <atui-prompt-message
            .role=${args.role}
            .content=${args.content}
            .name=${args.name}
            .avatar=${args.avatar}
            .timestamp=${args.timestamp}
            .loading=${args.loading}
            .error=${args.error}
            .error_message=${args.error_message}
        ></atui-prompt-message>
    `,
};
export const ErrorMessage = {
    args: {
        role: 'assistant',
        name: 'AI Assistant',
        error: true,
        error_message: 'Failed to generate response. Please try again.',
        timestamp: '2:35 PM',
    },
    render: (args) => html `
        <atui-prompt-message
            .role=${args.role}
            .content=${args.content}
            .name=${args.name}
            .avatar=${args.avatar}
            .timestamp=${args.timestamp}
            .loading=${args.loading}
            .error=${args.error}
            .error_message=${args.error_message}
        ></atui-prompt-message>
    `,
};
export const WithAvatar = {
    args: {
        role: 'user',
        content: 'This message includes a custom avatar image.',
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b95d1cec?w=32&h=32&fit=crop&crop=face',
        timestamp: '2:32 PM',
    },
    render: (args) => html `
        <atui-prompt-message
            .role=${args.role}
            .content=${args.content}
            .name=${args.name}
            .avatar=${args.avatar}
            .timestamp=${args.timestamp}
            .loading=${args.loading}
            .error=${args.error}
            .error_message=${args.error_message}
        ></atui-prompt-message>
    `,
};
export const WithSlotContent = {
    args: {
        role: 'assistant',
        name: 'AI Assistant',
        timestamp: '2:33 PM',
    },
    render: (args) => html `
        <atui-prompt-message
            .role=${args.role}
            .name=${args.name}
            .avatar=${args.avatar}
            .timestamp=${args.timestamp}
            .loading=${args.loading}
            .error=${args.error}
            .error_message=${args.error_message}
        >
            <div>
                <p>
                    <strong>Here's a complex response with custom HTML:</strong>
                </p>

                <ul>
                    <li>List item 1</li>

                    <li>List item 2</li>

                    <li>List item 3</li>
                </ul>

                <p>You can include any custom content in the slot.</p>
            </div>
        </atui-prompt-message>
    `,
};
export const Conversation = {
    render: () => html `
        <div class="max-w-4xl space-y-4">
            <atui-prompt-message
                role="user"
                content="Hello! How are you today?"
                name="User"
                timestamp="2:30 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="assistant"
                content="Hello! I'm doing well, thank you for asking. How can I help you today?"
                name="AI Assistant"
                timestamp="2:30 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="user"
                content="Can you explain how machine learning works?"
                name="User"
                timestamp="2:31 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="assistant"
                loading="true"
                name="AI Assistant"
            ></atui-prompt-message>
        </div>
    `,
};
//# sourceMappingURL=atui-prompt-message.stories.js.map
