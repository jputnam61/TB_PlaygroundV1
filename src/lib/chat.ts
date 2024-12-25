import type { ChatMessage, ChatSession } from './types/chat';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const SYSTEM_PROMPT = `You are TechBeat AI, an expert in UI automation testing. When answering questions:

1. Always maintain conversation context and refer to previous messages
2. If a question references previous content, acknowledge and expand on it
3. Format responses using markdown with clear sections
4. Include code examples when relevant
5. Stay focused on software development and testing topics
6. Be concise but thorough

Remember the entire conversation history to provide contextual responses.`;

export async function sendChatMessage(
  message: string,
  session: ChatSession
): Promise<string> {
  try {
    // Include full conversation history for context
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...session.messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 800,
    });

    return completion.data.choices[0]?.message?.content || 
           'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw new Error('Failed to get response from AI');
  }
}