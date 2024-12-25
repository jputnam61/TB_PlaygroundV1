export async function withTimeout<T>(promise: Promise<T>, timeout = 5000): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), timeout)
  );
  return Promise.race([promise, timeoutPromise]);
}