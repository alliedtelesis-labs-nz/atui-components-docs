export type PromptUserRole = 'user' | 'assistant';
export type PromptResponseAnimation = 'none' | 'fade' | 'words';
export declare enum PromptResponseScore {
    NONE = 0,
    UP = 1,
    DOWN = -1
}
export interface PromptMessage {
    id: string;
    role: PromptUserRole;
    content: string;
    timestamp?: string;
    name?: string;
    loading?: boolean;
    error?: boolean;
    error_message?: string;
    score?: number;
}
