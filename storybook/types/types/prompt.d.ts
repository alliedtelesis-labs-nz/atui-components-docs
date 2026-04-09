export type AtPromptUserRole = 'user' | 'assistant';
export type AtPromptResponseAnimation = 'none' | 'fade' | 'words';
export declare enum AtPromptResponseScore {
    NONE = 0,
    UP = 1,
    DOWN = -1
}
export interface AtIPromptMessage {
    id: string;
    role: AtPromptUserRole;
    content: string;
    timestamp?: string;
    name?: string;
    loading?: boolean;
    error?: boolean;
    error_message?: string;
    score?: number;
}
