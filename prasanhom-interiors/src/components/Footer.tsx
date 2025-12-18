'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-sand-100 pt-24 pb-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
                    <div className="lg:w-1/3">
                        <Link href="/" className="text-3xl font-serif font-bold text-white mb-6 block">
                            Prasanhom<span className="text-terracotta-500">.</span>
                        </Link>
                        <p className="text-white/60 mb-8 max-w-sm">
                            Transforming spaces into extraordinary experiences. We craft interiors that tell your unique story with elegance and innovation.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 px-4 py-3 rounded-l-md focus:outline-none focus:border-terracotta-500 text-white w-full"
                            />
                            <button className="bg-terracotta-500 px-6 py-3 rounded-r-md text-white hover:bg-terracotta-600 transition-colors">
                                →
                            </button>
                        </div>
                        <p className="text-xs text-white/30 mt-2">Stay inspired with our newsletter.</p>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-white font-serif text-lg mb-6">Company</h4>
                            <ul className="space-y-4 text-white/60">
                                {['About Us', 'Our Team', 'Careers', 'Press'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-terracotta-400 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
                            <ul className="space-y-4 text-white/60">
                                {['Residential Design', 'Commercial Design', 'Space Planning', 'Consultation'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-terracotta-400 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-6">Resources</h4>
                            <ul className="space-y-4 text-white/60">
                                {['Portfolio', 'Testimonials', 'Blog', 'FAQ'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-terracotta-400 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-6">Find Us</h4>
                            <p className="text-white/60">Visit our studio for a personal consultation</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
                    <p>© 2025 Prasanhom Interiors. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

                {/* Giant Text */}
                <div className="mt-20 border-t border-white/5 pt-4">
                    <h1 className="text-[12vw] leading-none font-serif font-black text-center text-white/5 select-none pointer-events-none">
                        PRASANHOM
                    </h1>
                </div>
            </div>
        </footer>
    );
}
