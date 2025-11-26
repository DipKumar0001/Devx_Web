import React from 'react';
import { motion } from 'framer-motion';

const AI_MODELS = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        provider: 'OpenAI',
        description: 'Advanced conversational AI with GPT-4 and GPT-3.5 models',
        url: 'https://chat.openai.com',
        gradient: 'from-green-400 to-emerald-600',
        icon: '🤖',
        image: '/ai-images/chatgpt.png',
    },
    {
        id: 'gemini',
        name: 'Gemini',
        provider: 'Google',
        description: "Google's most capable AI model with advanced reasoning",
        url: 'https://gemini.google.com',
        gradient: 'from-blue-400 to-indigo-600',
        icon: '✨',
        image: '/ai-images/gemini.png',
    },
    {
        id: 'claude',
        name: 'Claude',
        provider: 'Anthropic',
        description: 'Constitutional AI designed to be helpful, harmless, and honest',
        url: 'https://claude.ai',
        gradient: 'from-orange-400 to-red-600',
        icon: '🧠',
        image: '/ai-images/claude.png',
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        provider: 'DeepSeek AI',
        description: 'Advanced AI model with strong reasoning capabilities',
        url: 'https://chat.deepseek.com',
        gradient: 'from-purple-400 to-pink-600',
        icon: '🔮',
        image: '/ai-images/deepseek.png',
    },
    {
        id: 'kimi',
        name: 'Kimi',
        provider: 'Moonshot AI',
        description: 'Long-context AI assistant with powerful comprehension',
        url: 'https://kimi.moonshot.cn',
        gradient: 'from-cyan-400 to-blue-600',
        icon: '🌙',
        image: '/ai-images/kimi.png',
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        provider: 'Perplexity AI',
        description: 'AI-powered search engine with real-time information',
        url: 'https://www.perplexity.ai',
        gradient: 'from-teal-400 to-green-600',
        icon: '🔍',
        image: '/ai-images/perplexity.png',
    },
];

const AIHub = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-10 relative overflow-hidden bg-[#0a0514]">
            {/* Magai-inspired Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Deep Nebula Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10s]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-700 duration-[15s]"></div>
                <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000 duration-[12s]"></div>

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">Hub</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Your gateway to the world's most powerful AI models, all in one place.
                    </p>
                </motion.div>

                {/* AI Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {AI_MODELS.map((model) => (
                        <motion.div
                            key={model.id}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="group relative bg-[#13111c] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full"
                        >
                            {/* Card Image Header */}
                            <div className="h-40 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${model.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#13111c] via-[#13111c]/60 to-transparent"></div>

                                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                                    <div className="text-4xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 origin-bottom-left">
                                        {model.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 pt-2 flex-1 flex flex-col relative">
                                {/* Subtle Gradient Glow on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${model.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}></div>

                                <div className="mb-4 relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                        {model.name}
                                    </h3>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{model.provider}</p>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                                    {model.description}
                                </p>

                                {/* Magai-style Button */}
                                <a
                                    href={model.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 w-full py-3.5 px-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:brightness-110 active:scale-[0.98] group/btn"
                                >
                                    <span>Launch App</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-600 text-sm">
                        All trademarks and logos belong to their respective owners.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AIHub;
