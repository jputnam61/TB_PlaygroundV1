import { z } from 'zod';

export const feedbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.string().min(1, 'Please select a role'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type FeedbackFormData = z.infer<typeof feedbackSchema>;

export interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  error_codes?: string[];
}