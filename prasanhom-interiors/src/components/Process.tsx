'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, PencilRuler, Hammer, Sparkles } from 'lucide-react';

const steps = [
    { id: 1, icon: Search, title: "Discovery", desc: "We begin with an in-depth consultation to understand your vision, lifestyle, and aspirations." },
    { id: 2, icon: Lightbulb, title: "Concept", desc: "Our designers create mood boards, 3D visualizations, and detailed concepts capturing your style." },
    { id: 3, icon: PencilRuler, title: "Design", desc: "We refine every detail—from materials and colors to furniture placement and lighting." },
    { id: 4, icon: Hammer, title: "Execute", desc: "Our skilled craftsmen bring the design to life with precision, quality, and meticulous attention." },
    { id: 5, icon: Sparkles, title: "Reveal", desc: "Experience the transformation as we unveil your stunning new space, ready for you to enjoy." },
];

export default function Process() {
    return (
        <section className="py-24 bg-charcoal text-sand-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-terracotta-400 uppercase tracking-widest font-medium mb-4 block">How We Work</span>
                    <h2 className="text-5xl md:text-6xl font-serif mb-6">Our Process</h2>
                    <p className="opacity-60 max-w-xl mx-auto text-lg">A seamless journey from concept to completion.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`p-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-6xl font-serif text-white/5 mb-2 block font-extrabold">0{step.id}</span>
                                        <h3 className="text-3xl font-serif mb-4 text-terracotta-300">{step.title}</h3>
                                        <p className="opacity-70 text-lg leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Icon Circle */}
                                <div className="relative z-10 shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-terracotta-900 border border-terracotta-500/30 flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-terracotta-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                        <step.icon className="w-8 h-8 text-terracotta-100" />
                                    </div>
                                </div>

                                {/* Empty Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
