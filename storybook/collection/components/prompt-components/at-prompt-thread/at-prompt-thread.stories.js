import { html } from "lit";
const sampleMessages = [
    {
        id: '1',
        role: 'user',
        content: 'Hello! Can you help me understand how AI works?',
        name: 'John Doe',
        timestamp: '2:30 PM',
    },
    {
        id: '2',
        role: 'assistant',
        content: "Hello! I'd be happy to help you understand AI. Artificial Intelligence is a broad field that involves creating computer systems that can perform tasks that typically require human intelligence.",
        name: 'AI Assistant',
        timestamp: '2:30 PM',
    },
    {
        id: '3',
        role: 'user',
        content: "That's interesting! Can you give me some specific examples?",
        name: 'John Doe',
        timestamp: '2:31 PM',
    },
    {
        id: '4',
        role: 'assistant',
        content: 'Certainly! Here are some common AI applications:\n\n• **Natural Language Processing**: Like chatbots and language translation\n• **Computer Vision**: Image recognition and facial detection\n• **Machine Learning**: Recommendation systems like those used by Netflix or Spotify\n• **Robotics**: Autonomous vehicles and manufacturing robots\n• **Game Playing**: AI systems that can play chess, Go, or video games',
        name: 'AI Assistant',
        timestamp: '2:31 PM',
    },
];
const meta = {
    title: 'Components/Prompt/Thread',
    component: 'at-prompt-thread',
    argTypes: {
        messages: {
            control: 'object',
            description: 'Array of messages to display',
        },
        loading: {
            control: 'boolean',
            description: 'Loading state',
        },
        empty_state_title: {
            control: 'text',
            description: 'Empty state title',
        },
        empty_state_description: {
            control: 'text',
            description: 'Empty state description',
        },
        auto_scroll: {
            control: 'boolean',
            description: 'Auto scroll to bottom on new messages',
        },
        max_height: {
            control: 'text',
            description: 'Maximum height of the thread container',
        },
    },
};
export default meta;
export const Empty = {
    args: {
        messages: [],
        empty_state_title: 'No messages yet',
        empty_state_description: 'Start a conversation by sending a message',
    },
    render: (args) => html `
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${args.messages}
                .loading=${args.loading}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .auto_scroll=${args.auto_scroll}
                .max_height=${args.max_height}
            ></at-prompt-thread>
        </div>
    `,
};
export const WithMessages = {
    args: {
        messages: sampleMessages,
        auto_scroll: true,
        max_height: '400px',
    },
    render: (args) => html `
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${args.messages}
                .loading=${args.loading}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .auto_scroll=${args.auto_scroll}
                .max_height=${args.max_height}
            ></at-prompt-thread>
        </div>
    `,
};
export const WithLoading = {
    args: {
        messages: sampleMessages,
        loading: true,
        auto_scroll: true,
        max_height: '400px',
    },
    render: (args) => html `
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${args.messages}
                .loading=${args.loading}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .auto_scroll=${args.auto_scroll}
                .max_height=${args.max_height}
            ></at-prompt-thread>
        </div>
    `,
};
export const WithError = {
    args: {
        messages: [
            ...sampleMessages,
            {
                id: '5',
                role: 'assistant',
                name: 'AI Assistant',
                timestamp: '2:32 PM',
                error: true,
                error_message: 'Failed to generate response. Please try again.',
            },
        ],
        auto_scroll: true,
        max_height: '400px',
    },
    render: (args) => html `
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${args.messages}
                .loading=${args.loading}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .auto_scroll=${args.auto_scroll}
                .max_height=${args.max_height}
            ></at-prompt-thread>
        </div>
    `,
};
export const ShortContainer = {
    args: {
        messages: sampleMessages,
        auto_scroll: true,
        max_height: '200px',
    },
    render: (args) => html `
        <div
            style="height: 200px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${args.messages}
                .loading=${args.loading}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .auto_scroll=${args.auto_scroll}
                .max_height=${args.max_height}
            ></at-prompt-thread>
        </div>
    `,
};
export const SystemMessages = {
    args: {
        messages: [
            {
                id: '1',
                role: 'system',
                content: 'Conversation started at 2:30 PM',
                timestamp: '2:30 PM',
            },
            {
                id: '2',
                role: 'user',
                content: 'Hello!',
                name: 'User',
                timestamp: '2:30 PM',
            },
            {
                id: '3',
                role: 'assistant',
                content: 'Hello! How can I help you today?',
                name: 'AI Assistant',
                timestamp: '2:30 PM',
            },
            {
                id: '4',
                role: 'system',
                content: 'AI model updated to version 2.0',
                timestamp: '2:31 PM',
            },
        ],
        auto_scroll: true,
        max_height: '400px',
    },
    render: (args) => html `
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${args.messages}
                .loading=${args.loading}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .auto_scroll=${args.auto_scroll}
                .max_height=${args.max_height}
            ></at-prompt-thread>
        </div>
    `,
};
export const CustomEmptyState = {
    args: {
        messages: [],
        empty_state_title: 'Welcome to AI Chat',
        empty_state_description: "Ask me anything to get started. I'm here to help!",
    },
    render: (args) => html `
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${args.messages}
                .loading=${args.loading}
                .empty_state_title=${args.empty_state_title}
                .empty_state_description=${args.empty_state_description}
                .auto_scroll=${args.auto_scroll}
                .max_height=${args.max_height}
            ></at-prompt-thread>
        </div>
    `,
};
//# sourceMappingURL=at-prompt-thread.stories.js.map
