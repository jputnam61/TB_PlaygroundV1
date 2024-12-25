import { Configuration, OpenAIApi } from 'openai';
import { withTimeout } from '../async';
import type { ChatMessage, ChatSession } from '../types/chat';

const SYSTEM_PROMPT = `You are TechBeat AI, an expert in UI automation testing. When answering questions:

1. Always maintain conversation context and refer to previous messages
2. Format responses using markdown with clear sections
3. Include code examples when relevant
4. Stay focused on software development and testing topics
5. Be concise but thorough`;

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendChatMessage(
  message: string, 
  session: ChatSession
): Promise<string> {
  try {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...session.messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    const response = await withTimeout(
      openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
        max_tokens: 800,
      })
    );

    return response.data.choices[0]?.message?.content || 
           'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to get response from AI');
  }
}