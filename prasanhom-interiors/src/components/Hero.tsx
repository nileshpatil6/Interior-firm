'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-sand-200">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <Image
                    src="/images/hero_luxury_living_1765051366418.png"
                    alt="Luxury Interior"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-terracotta-100 uppercase tracking-[0.2em] mb-4 block font-semibold text-sm md:text-base backdrop-blur-sm bg-black/10 w-fit px-3 py-1 rounded"
                    >
                        Fresh & Innovative Design
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-medium leading-tight mb-8 drop-shadow-lg">
                        Your Home, <br />
                        <span className="italic font-light">Your Story</span>, <br />
                        Our Design.
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10 drop-shadow-md backdrop-blur-[2px]">
                        We craft exceptional interior spaces that reflect your unique personality and elevate your everyday living experience.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-terracotta-500 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 group hover:shadow-2xl hover:bg-terracotta-600 transition-all"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2"
                        >
                            View Our Work
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 z-10"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="animate-float w-6 h-6" />
            </motion.div>
        </section>
    );
}
