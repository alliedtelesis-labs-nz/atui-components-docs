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
        content: 'Certainly! Here are some common AI applications:\\n\\n• **Natural Language Processing**: Like chatbots and language translation\\n• **Computer Vision**: Image recognition and facial detection\\n• **Machine Learning**: Recommendation systems like those used by Netflix or Spotify\\n• **Robotics**: Autonomous vehicles and manufacturing robots\\n• **Game Playing**: AI systems that can play chess, Go, or video games',
        name: 'AI Assistant',
        timestamp: '2:31 PM',
    },
];
const Template = (args) => `
<div style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;">
    <at-prompt-thread
        messages='${JSON.stringify(args.messages ?? [])}'
        chatbot_title="${args.chatbot_title ?? 'Assistant'}"
        response_animation="${args.response_animation ?? 'none'}"
        ${args.loading ? 'loading' : ''}
        ${args.auto_scroll ? 'auto_scroll' : ''}
        ${args.enable_vote ? 'enable_vote' : ''}
        ${args.enable_copy ? 'enable_copy' : ''}
        ${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-thread>
</div>
`;
export default {
    title: 'Components/Prompt/Thread',
    argTypes: {
        messages: {
            control: 'object',
            description: 'Array of messages to display',
        },
        loading: {
            control: 'boolean',
            description: 'Loading state',
        },
        auto_scroll: {
            control: 'boolean',
            description: 'Auto scroll to bottom on new messages',
        },
        chatbot_title: {
            control: 'text',
            description: 'Display name for chatbot/assistant messages',
        },
        response_animation: {
            control: 'select',
            options: ['none', 'fade', 'words'],
            description: 'Animation type for responses',
        },
        enable_vote: {
            control: 'boolean',
            description: 'Display voting actions for assistant messages',
        },
        enable_copy: {
            control: 'boolean',
            description: 'Display copy action for assistant messages',
        },
        enable_edit: {
            control: 'boolean',
            description: 'Display edit action for user messages',
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    messages: sampleMessages,
    auto_scroll: true,
    enable_vote: true,
    enable_copy: true,
    enable_edit: false,
    response_animation: 'none',
};
export const WithLoading = Template.bind({});
WithLoading.args = {
    messages: sampleMessages,
    loading: true,
    auto_scroll: true,
    enable_vote: true,
    enable_copy: true,
    response_animation: 'none',
};
export const WithAnimations = Template.bind({});
WithAnimations.args = {
    messages: sampleMessages,
    auto_scroll: true,
    enable_vote: true,
    enable_copy: true,
    response_animation: 'words',
};
export const WithError = Template.bind({});
WithError.args = {
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
    enable_vote: true,
    enable_copy: true,
    response_animation: 'none',
};
//# sourceMappingURL=at-prompt-thread.stories.js.map
