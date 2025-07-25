export type MessageRole = 'user' | 'assistant' | 'system';
export interface PromptMessage {
    id: string;
    role: MessageRole;
    content: string;
    timestamp?: string;
    name?: string;
    avatar?: string;
    loading?: boolean;
    error?: boolean;
    error_message?: string;
}
