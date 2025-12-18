'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-charcoal text-sand-100 relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Info Side */}
                    <div className="lg:w-1/3">
                        <span className="text-terracotta-400 uppercase tracking-widest font-medium mb-4 block">Get In Touch</span>
                        <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
                            Let's Create <br />
                            <span className="text-terracotta-500">Something Beautiful</span>
                        </h2>
                        <p className="text-white/70 mb-12 text-lg">
                            Ready to transform your space? We'd love to hear about your project. Reach out and let's start the conversation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-terracotta-400" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl mb-1">Visit Our Studio</h4>
                                    <p className="text-white/60">Maharashtra, India</p>
                                    <p className="text-white/40 text-sm mt-1">By Appointment Only</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="text-terracotta-400" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl mb-1">Email Us</h4>
                                    <a href="mailto:hello@prasanhom.com" className="text-white/60 hover:text-white transition-colors">hello@prasanhom.com</a>
                                    <p className="text-white/40 text-sm mt-1">We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="text-terracotta-400" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl mb-1">Call Us</h4>
                                    <a href="tel:+919876543210" className="text-white/60 hover:text-white transition-colors">+91 98765 43210</a>
                                    <p className="text-white/40 text-sm mt-1">Mon-Sat, 10AM-6PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="uppercase tracking-widest text-sm text-white/40 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-terracotta-500 hover:border-terracotta-500 transition-all text-white/70 hover:text-white">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-2/3 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-3xl font-serif mb-8">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/50">Your Name</label>
                                    <input type="text" className="w-full bg-white/10 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-terracotta-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/50">Your Email</label>
                                    <input type="email" className="w-full bg-white/10 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-terracotta-500 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/50">Phone Number</label>
                                    <input type="tel" className="w-full bg-white/10 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-terracotta-500 transition-colors" placeholder="+91 ..." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/50">Select Service</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/10 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-terracotta-500 transition-colors appearance-none">
                                            <option className="text-charcoal">Residential Design</option>
                                            <option className="text-charcoal">Commercial Design</option>
                                            <option className="text-charcoal">Space Planning</option>
                                            <option className="text-charcoal">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">▼</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-wider text-white/50">Tell us about your project</label>
                                <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-terracotta-500 transition-colors" placeholder="I have a 3BHK apartment..." />
                            </div>
                            <button type="submit" className="bg-terracotta-500 text-white px-8 py-4 rounded-lg text-lg font-medium w-full hover:bg-terracotta-600 transition-colors flex items-center justify-center gap-2">
                                Send Message
                                <span className="text-xl">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
