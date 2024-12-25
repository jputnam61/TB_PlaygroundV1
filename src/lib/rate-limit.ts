// Simple in-memory store for rate limiting
const store = new Map<string, { count: number; resetTime: number }>();

const LIMIT = 30; // Maximum questions per session
const RESET_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function checkRateLimit(sessionId: string): boolean {
  const now = Date.now();
  const userLimit = store.get(sessionId);

  // Reset if time expired
  if (userLimit && now > userLimit.resetTime) {
    store.delete(sessionId);
  }

  // Create new entry if doesn't exist
  if (!store.has(sessionId)) {
    store.set(sessionId, {
      count: 0,
      resetTime: now + RESET_TIME,
    });
  }

  const current = store.get(sessionId)!;
  
  // Check if limit exceeded
  if (current.count >= LIMIT) {
    return false;
  }

  // Increment count
  current.count++;
  store.set(sessionId, current);
  return true;
}

export function getRemainingQuestions(sessionId: string): number {
  const userLimit = store.get(sessionId);
  if (!userLimit) return LIMIT;
  return Math.max(0, LIMIT - userLimit.count);
}