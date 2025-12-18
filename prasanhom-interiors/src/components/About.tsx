'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { label: "Years of Excellence", value: "15+" },
        { label: "Projects Completed", value: "100+" },
        { label: "Design Awards", value: "25+" },
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-sand-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
                            alt="Interior Design Craftsmanship"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-xs hidden md:block"
                        >
                            <h3 className="text-4xl font-serif text-terracotta-600 mb-2">15+</h3>
                            <p className="text-charcoal font-medium uppercase tracking-wider text-sm">Years of Excellence</p>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2" ref={ref}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            className="text-terracotta-600 uppercase tracking-widest font-medium mb-4 block"
                        >
                            About Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-serif text-charcoal leading-tight mb-8"
                        >
                            Crafting Spaces <br />
                            <span className="italic text-terracotta-500">That Inspire.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-charcoal/80 text-lg leading-relaxed mb-8"
                        >
                            Prasanhom Interiors is dedicated to crafting fresh and innovative spaces that reflect your unique style and personality. Our mission is to inspire and uplift through exceptional design, unparalleled customer service, and a commitment to staying at the forefront of design trends.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-charcoal/80 text-lg leading-relaxed mb-12"
                        >
                            Every project we undertake is a collaborative journey with our clients, ensuring that the final result not only meets but exceeds expectations. We believe that great design has the power to transform lives.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            {[
                                { title: "Innovative Design", desc: "Cutting-edge concepts" },
                                { title: "Premium Quality", desc: "Best materials & finishes" },
                                { title: "Client Focused", desc: "Your vision, our expertise" },
                                { title: "Timely Delivery", desc: "Projects on schedule" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + (idx * 0.1) }}
                                >
                                    <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                                    <p className="text-sm text-charcoal/60">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                            className="text-terracotta-600 font-medium hover:text-charcoal transition-colors flex items-center gap-2 group text-lg"
                        >
                            Learn More About Us
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
