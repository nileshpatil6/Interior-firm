'use client';

import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Palette, Grid, Bot, Send } from 'lucide-react';
import { useState } from 'react';

export default function AIBuilder() {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        { role: 'ai', text: "Hello! I'm your AI design assistant. What kind of space would you like to transform today?" }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const aiResponseText = messages.length === 1
                ? "Great choice! For a modern warm living room, I suggest: \n• Terracotta & Rust accents \n• Warm neutral base \n• Natural wood elements"
                : "That sounds wonderful. Would you like to see a 3D visualization of that concept?";
            setMessages(prev => [...prev, { role: 'ai', text: aiResponseText }]);
        }, 1500);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-indigo-50 to-sand-100 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">

                {/* Text Side */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-terracotta-500" />
                        <span className="text-sm font-semibold uppercase tracking-wider text-charcoal/70">AI-Powered Design</span>
                    </motion.div>

                    <h2 className="text-5xl lg:text-7xl font-serif text-charcoal mb-6 leading-none">
                        Experience Design <br />
                        <span className="bg-gradient-to-r from-terracotta-500 to-terracotta-700 bg-clip-text text-transparent">Intelligence</span>
                    </h2>

                    <p className="text-lg text-charcoal/70 mb-10 max-w-lg leading-relaxed">
                        Our AI-powered design assistant helps you visualize and plan your perfect space. Get instant inspiration, color suggestions, and layout recommendations tailored to your style.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: Sparkles, label: "Instant Inspiration" },
                            { icon: Palette, label: "Color Matching" },
                            { icon: Grid, label: "Space Planning" },
                            { icon: Bot, label: "24/7 Available" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-sand-200 hover:border-terracotta-200 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-terracotta-50 flex items-center justify-center text-terracotta-600">
                                    <item.icon size={20} />
                                </div>
                                <span className="font-medium text-charcoal">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Chat Interface Side */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:w-1/2 w-full"
                >
                    <div className="bg-white rounded-3xl shadow-2xl border border-sand-200 overflow-hidden relative min-h-[500px] flex flex-col">
                        {/* Chat Header */}
                        <div className="bg-charcoal text-white p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center border-2 border-white/20">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Design Assistant</h4>
                                    <span className="flex items-center gap-2 text-xs opacity-70">
                                        <span className="w-2 h-2 rounded-full bg-green-400 block animate-pulse" /> Online
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-6 space-y-6 bg-sand-50 overflow-y-auto">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${msg.role === 'user'
                                        ? 'bg-charcoal text-white rounded-br-none'
                                        : 'bg-white text-charcoal border border-sand-200 rounded-bl-none'
                                        }`}>
                                        <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white rounded-2xl rounded-bl-none p-4 shadow-sm border border-sand-200 flex gap-1 items-center">
                                        <span className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce" />
                                        <span className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce delay-100" />
                                        <span className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce delay-200" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-sand-200">
                            <div className="flex gap-2 relative">
                                <input
                                    type="text"
                                    placeholder="I need ideas for a modern living room..."
                                    className="w-full bg-sand-50 rounded-full px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-terracotta-500/50 text-charcoal"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-2 w-10 h-10 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
