export interface SlackMessage {
  text: string;
  mrkdwn?: boolean;
}

export interface SlackResponse {
  ok: boolean;
  error?: string;
}

export interface SlackConfig {
  webhookUrl: string;
  maxRetries: number;
  retryDelay: number;
  timeout: number;
}