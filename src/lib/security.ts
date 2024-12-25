// Basic input validation and sanitization
export function sanitizeInput(input: string): string {
  // Remove any HTML/script tags
  input = input.replace(/<[^>]*>/g, '');
  
  // Remove any potential SQL injection patterns
  input = input.replace(/['";]/g, '');
  
  // Limit length
  const MAX_LENGTH = 500;
  input = input.slice(0, MAX_LENGTH);
  
  return input.trim();
}

// Generate a session ID
export function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + 
         Date.now().toString(36);
}

// Basic content moderation
export function moderateContent(input: string): boolean {
  const blockedPatterns = [
    /script/i,
    /exec/i,
    /eval/i,
    /select.*from/i,
    /union.*select/i,
    /insert.*into/i,
    /drop.*table/i,
    /delete.*from/i,
  ];

  return !blockedPatterns.some(pattern => pattern.test(input));
}