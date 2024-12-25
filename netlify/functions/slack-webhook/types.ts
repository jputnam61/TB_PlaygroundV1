export interface SlackMessage {
  text: string;
  mrkdwn?: boolean;
}

export interface SlackWebhookResponse {
  ok: boolean;
  error?: string;
}

export interface WebhookRequest {
  message: string;
}