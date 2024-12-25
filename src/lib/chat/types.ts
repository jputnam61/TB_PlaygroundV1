export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatSession {
  messages: ChatMessage[];
  context?: string;
}

export interface ChatResponse {
  response: string;
  error?: string;
}