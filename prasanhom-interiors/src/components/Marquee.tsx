'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
    const scrollText = "INTERIOR ✦ DESIGN ✦ LUXURY ✦ SPACE ✦ INNOVATION ✦ ELEGANCE ✦ ";

    return (
        <div className="bg-charcoal text-sand-100 py-6 overflow-hidden w-full relative z-20 border-b border-white/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="flex gap-4 items-center"
                >
                    {Array(4).fill(scrollText).map((text, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-serif italic font-light tracking-wide opacity-80">
                            {text}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
