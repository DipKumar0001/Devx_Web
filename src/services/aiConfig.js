import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Anthropic from '@anthropic-ai/sdk';

// Helper to get keys from local storage
const getKeys = () => {
    try {
        return JSON.parse(localStorage.getItem('ai_hub_keys') || '{}');
    } catch {
        return {};
    }
};

export const MODELS = [
    { id: 'gpt-4o', name: 'GPT-4o (OpenAI)', provider: 'openai' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo (OpenAI)', provider: 'openai' },
    { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash (Google)', provider: 'google' },
    { id: 'gemini-pro', name: 'Gemini Pro (Google)', provider: 'google' },
    { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus (Anthropic)', provider: 'anthropic' },
    { id: 'claude-3-sonnet-20240229', name: 'Claude 3 Sonnet (Anthropic)', provider: 'anthropic' },
    { id: 'deepseek-chat', name: 'DeepSeek Chat', provider: 'deepseek' }, // Uses OpenAI SDK compatible endpoint
    { id: 'moonshot-v1-8k', name: 'Kimi (Moonshot)', provider: 'kimi' }, // Uses OpenAI SDK compatible endpoint
];

export const sendMessage = async (modelId, messages, signal) => {
    const keys = getKeys();
    const modelConfig = MODELS.find(m => m.id === modelId);

    if (!modelConfig) throw new Error('Model not found');

    try {
        switch (modelConfig.provider) {
            case 'openai':
                if (!keys.openai) throw new Error('OpenAI API Key missing');
                const openai = new OpenAI({ apiKey: keys.openai, dangerouslyAllowBrowser: true });
                const completion = await openai.chat.completions.create({
                    messages: messages.map(m => ({ role: m.role, content: m.content })),
                    model: modelId,
                }, { signal });
                return completion.choices[0].message.content;

            case 'google':
                if (!keys.google) throw new Error('Google API Key missing');
                const genAI = new GoogleGenerativeAI(keys.google);
                const model = genAI.getGenerativeModel({ model: modelId });
                // Gemini expects a different format, simplified here for single turn or basic history
                // For full history, we need to format it properly.
                // Simple 1-turn for now or last message + context if needed.
                // Better: Construct chat history
                const chat = model.startChat({
                    history: messages.slice(0, -1).map(m => ({
                        role: m.role === 'user' ? 'user' : 'model',
                        parts: [{ text: m.content }]
                    }))
                });
                const result = await chat.sendMessage(messages[messages.length - 1].content);
                return result.response.text();

            case 'anthropic':
                if (!keys.anthropic) throw new Error('Anthropic API Key missing');
                // Note: Anthropic often blocks browser requests due to CORS. 
                // This might fail without a proxy.
                const anthropic = new Anthropic({ apiKey: keys.anthropic });
                const msg = await anthropic.messages.create({
                    model: modelId,
                    max_tokens: 1024,
                    messages: messages.map(m => ({ role: m.role, content: m.content })),
                });
                return msg.content[0].text;

            case 'deepseek':
                if (!keys.deepseek) throw new Error('DeepSeek API Key missing');
                const deepseek = new OpenAI({
                    apiKey: keys.deepseek,
                    baseURL: 'https://api.deepseek.com',
                    dangerouslyAllowBrowser: true
                });
                const dsCompletion = await deepseek.chat.completions.create({
                    messages: messages.map(m => ({ role: m.role, content: m.content })),
                    model: 'deepseek-chat',
                }, { signal });
                return dsCompletion.choices[0].message.content;

            case 'kimi':
                if (!keys.kimi) throw new Error('Kimi (Moonshot) API Key missing');
                const kimi = new OpenAI({
                    apiKey: keys.kimi,
                    baseURL: 'https://api.moonshot.cn/v1',
                    dangerouslyAllowBrowser: true
                });
                const kimiCompletion = await kimi.chat.completions.create({
                    messages: messages.map(m => ({ role: m.role, content: m.content })),
                    model: 'moonshot-v1-8k',
                }, { signal });
                return kimiCompletion.choices[0].message.content;

            default:
                throw new Error('Provider not supported');
        }
    } catch (error) {
        console.error("AI Service Error:", error);
        throw error;
    }
};
