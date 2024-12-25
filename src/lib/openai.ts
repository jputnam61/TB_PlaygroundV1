import { Configuration, OpenAIApi } from 'openai';
import { isRelevantTopic, getTopicGuidance } from './content-filter';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const SYSTEM_PROMPT = `You are TechBeat AI, an expert in UI automation testing. When answering questions:

1. Always include relevant links to official documentation, especially Playwright.dev for Playwright-related questions
2. Format responses using markdown with clear sections and headers
3. Include code examples when relevant
4. Reference multiple external sources like:
   - Official documentation (Playwright.dev, Selenium.dev, etc.)
   - MDN Web Docs
   - Testing blogs and tutorials
   - GitHub repositories with examples
   - Stack Overflow discussions
5. Format external links as: [Resource Name](URL) - Brief description`;

export async function askTechBeat(question: string): Promise<string> {
  try {
    // Check if question is relevant to our topics
    if (!isRelevantTopic(question)) {
      return getTopicGuidance(question);
    }

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: question }
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    return completion.data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw new Error('Failed to get response from AI');
  }
}