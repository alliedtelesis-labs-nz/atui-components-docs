const Template = (args) => {
    var _a, _b, _c, _d, _e;
    return `
<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <at-prompt-container
        messages='${JSON.stringify((_a = args.messages) !== null && _a !== void 0 ? _a : [])}'
        placeholder="${(_b = args.placeholder) !== null && _b !== void 0 ? _b : ''}"
        error_text="${(_c = args.error_text) !== null && _c !== void 0 ? _c : ''}"
        max_message_length="${(_d = args.max_message_length) !== null && _d !== void 0 ? _d : 2000}"
        response_animation="${(_e = args.response_animation) !== null && _e !== void 0 ? _e : 'none'}"
        ${args.loading ? 'loading' : ''}
        ${args.disabled ? 'disabled' : ''}
        ${args.show_new_thread_button ? 'show_new_thread_button' : ''}
        ${args.enable_vote ? 'enable_vote' : ''}
        ${args.enable_copy ? 'enable_copy' : ''}
        ${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-container>
</div>
`;
};
export default {
    title: 'Components/Prompt/Container',
    argTypes: {
        messages: {
            control: 'object',
            description: 'Array of messages to display',
        },
        placeholder: {
            control: 'text',
            description: 'Input placeholder text',
        },
        error_text: {
            control: 'text',
            description: 'Error text for input validation',
        },
        loading: {
            control: 'boolean',
            description: 'Loading state',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        show_new_thread_button: {
            control: 'boolean',
            description: 'Show new thread button',
        },
        max_message_length: {
            control: 'number',
            description: 'Maximum message length',
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
        response_animation: {
            control: 'select',
            options: ['none', 'fade', 'words'],
            description: 'Animation type for responses',
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    messages: [
        {
            id: '1',
            role: 'user',
            content: 'Hello! How does the voting and copy functionality work?',
            name: 'User',
            timestamp: '2:30 PM',
        },
        {
            id: '2',
            role: 'assistant',
            content: 'Great question! The voting functionality allows you to rate responses with thumbs up/down buttons. The copy feature lets you easily copy any message content to your clipboard. You can see these actions appear when you hover over assistant messages.',
            name: 'AI Assistant',
            timestamp: '2:31 PM',
        },
        {
            id: '3',
            role: 'user',
            content: 'Can I edit my previous messages?',
            name: 'User',
            timestamp: '2:32 PM',
        },
        {
            id: '4',
            role: 'assistant',
            content: 'Yes! When editing is enabled, you can click the edit button on your messages to modify them. This is useful for refining your questions or fixing typos.',
            name: 'AI Assistant',
            timestamp: '2:32 PM',
        },
    ],
    placeholder: 'Type your message here...',
    show_new_thread_button: true,
    enable_vote: true,
    enable_copy: true,
    enable_edit: true,
    response_animation: 'none',
};
export const WithMessages = Template.bind({});
WithMessages.args = {
    messages: [
        {
            id: '1',
            role: 'user',
            content: 'Hello! How are you today?',
            name: 'User',
            timestamp: '2:30 PM',
        },
        {
            id: '2',
            role: 'assistant',
            content: "Hello! I'm doing well, thank you for asking. How can I help you today?",
            name: 'AI Assistant',
            timestamp: '2:30 PM',
        },
    ],
    placeholder: 'Type your message here...',
    show_new_thread_button: true,
    enable_vote: true,
    enable_copy: true,
};
export const Loading = Template.bind({});
Loading.args = {
    messages: [
        {
            id: '1',
            role: 'user',
            content: 'What is machine learning?',
            name: 'User',
            timestamp: '2:30 PM',
        },
    ],
    placeholder: 'Type your message here...',
    loading: true,
    show_new_thread_button: true,
    enable_vote: true,
    enable_copy: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: 'Service is temporarily unavailable...',
    disabled: true,
    show_new_thread_button: true,
    enable_vote: false,
    enable_copy: false,
};
export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
    placeholder: 'Type your message here (max 100 characters)...',
    max_message_length: 100,
    show_new_thread_button: true,
    enable_vote: true,
    enable_copy: true,
};
//# sourceMappingURL=at-prompt-container.stories.js.map
