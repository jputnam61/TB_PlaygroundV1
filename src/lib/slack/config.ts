export const SLACK_CONFIG = {
  webhookUrl: process.env.SLACK_WEBHOOK_URL,
  maxRetries: 3,
  retryDelay: 1000,
  timeout: 5000
} as const;