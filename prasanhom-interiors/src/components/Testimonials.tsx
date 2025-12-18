'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
    { name: "Sarah Lawson", handle: "@sarahL", text: "Prasanhom Interiors transformed our home into a beautiful and functional space. Their attention to detail and creativity are unmatched! Absolutely recommend." },
    { name: "Michael Bennett", handle: "@michaelB", text: "Professional and reliable service. Our office space has never looked better! The team understood our vision perfectly." },
    { name: "Emily Rodriguez", handle: "@emilyR", text: "I'm amazed at how they turned our small apartment into a spacious and stylish home. The use of space is genius!" },
    { name: "David Kim", handle: "@davidK", text: "The team at Prasanhom are true professionals. They listened to our needs and delivered beyond our expectations." },
    { name: "Lisa Morrison", handle: "@lisaM", text: "From concept to completion, the process was smooth and the results are stunning. Thank you for making our dream home a reality!" },
    { name: "Alex Thompson", handle: "@alexT", text: "Innovative designs, excellent communication, and timely delivery. Couldn't ask for more! They truly care about their clients." },
    { name: "Jennifer Hayes", handle: "@jenniferH", text: "Working with Prasanhom was an absolute pleasure. They brought our vision to life with such elegance and sophistication." },
    { name: "Robert Chen", handle: "@robertC", text: "The best decision we made for our restaurant renovation. The ambiance they created has customers raving!" },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-sand-200 overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <span className="text-terracotta-500 uppercase tracking-widest font-medium mb-4 block">Client Stories</span>
                <h2 className="text-5xl font-serif text-charcoal">What Our Clients Say</h2>
                <p className="mt-4 text-charcoal/60">Trusted by homeowners and businesses across the region</p>
            </div>

            <div className="relative w-full">
                {/* Gradients for fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sand-200 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sand-200 to-transparent z-10" />

                <div className="flex gap-8 overflow-hidden">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: [0, -2000] }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    >
                        {[...reviews, ...reviews].map((review, i) => ( // Duplicate for infinite scroll
                            <div
                                key={i}
                                className="w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-lg border border-sand-300 relative"
                            >
                                <Quote className="absolute top-6 right-6 text-terracotta-200 w-10 h-10 fill-current" />
                                <p className="text-charcoal/80 text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center text-white font-serif font-bold">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-charcoal font-serif">{review.name}</h4>
                                        <span className="text-sm text-charcoal/50">{review.handle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
