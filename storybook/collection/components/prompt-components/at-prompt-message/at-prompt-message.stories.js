const Template = (args) => `
<at-prompt-message
    role="${args.role ?? ''}"
    content="${args.content ?? ''}"
    name="${args.name ?? ''}"
    avatar="${args.avatar ?? ''}"
    timestamp="${args.timestamp ?? ''}"
    error_message="${args.error_message ?? ''}"
    animate="${args.animate ?? ''}"
    ${args.loading ? 'loading' : ''}
    ${args.error ? 'error' : ''}
></at-prompt-message>
`;
export default {
    title: 'Components/Prompt/Message',
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
        animate: {
            control: 'select',
            options: ['none', 'fade', 'words'],
            description: 'Animation type for text streaming',
        },
    },
};
export const UserMessage = Template.bind({});
UserMessage.args = {
    role: 'user',
    content: 'Hello! Can you help me understand how this component works?',
    name: 'John Doe',
    timestamp: '2:30 PM',
};
export const AssistantMessage = Template.bind({});
AssistantMessage.args = {
    role: 'assistant',
    content: 'Of course! This component is designed to display chat messages in different styles based on the sender role. It supports user messages, assistant responses, and system notifications.',
    name: 'AI Assistant',
    timestamp: '2:31 PM',
};
export const LoadingMessage = Template.bind({});
LoadingMessage.args = {
    role: 'assistant',
    name: 'AI Assistant',
    loading: true,
};
export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    role: 'assistant',
    name: 'AI Assistant',
    error: true,
    error_message: 'Failed to generate response. Please try again.',
    timestamp: '2:35 PM',
};
export const AnimatedWords = Template.bind({});
AnimatedWords.args = {
    role: 'assistant',
    content: 'This message will animate word by word like ChatGPT responses, creating a streaming effect that makes the conversation feel more dynamic and engaging.',
    name: 'AI Assistant',
    timestamp: '2:35 PM',
    animate: 'words',
};
const WithSlotContentTemplate = (args) => `
<at-prompt-message
    role="${args.role ?? ''}"
    name="${args.name ?? ''}"
    avatar="${args.avatar ?? ''}"
    timestamp="${args.timestamp ?? ''}"
    ${args.loading ? 'loading' : ''}
    ${args.error ? 'error' : ''}
    error_message="${args.error_message ?? ''}"
>
    <div>
        <p><strong>Here's a complex response with custom HTML:</strong></p>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>You can include any custom content in the slot.</p>
    </div>
</at-prompt-message>
`;
export const WithSlotContent = WithSlotContentTemplate.bind({});
WithSlotContent.args = {
    role: 'assistant',
    name: 'AI Assistant',
    timestamp: '2:33 PM',
};
const ConversationTemplate = () => `
<div class="max-w-4xl space-y-4">
    <at-prompt-message
        role="user"
        content="Hello! How are you today?"
        name="User"
        timestamp="2:30 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="assistant"
        content="Hello! I'm doing well, thank you for asking. How can I help you today?"
        name="AI Assistant"
        timestamp="2:30 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="user"
        content="Can you explain how machine learning works?"
        name="User"
        timestamp="2:31 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="assistant"
        loading
        name="AI Assistant"
    ></at-prompt-message>
</div>
`;
export const Conversation = ConversationTemplate.bind({});
