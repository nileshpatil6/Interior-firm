'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const categories = ["All", "Residential", "Commercial", "Hospitality", "Recreational"];

const projects = [
    {
        id: 1,
        title: "Luxury Corridor",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
        subtitle: "Elegant corridor design with ambient lighting"
    },
    {
        id: 2,
        title: "Modern Sports Shop",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1200",
        subtitle: "Dynamic retail space with premium fixtures"
    },
    {
        id: 3,
        title: "Café Interior",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=1200",
        subtitle: "Warm and inviting café atmosphere"
    },
    {
        id: 4,
        title: "Indoor Court",
        category: "Recreational",
        image: "/images/commercial_office_space_1765051398432.png", // Using alternate image for demo
        subtitle: "Professional-grade indoor sports facility"
    },
    {
        id: 5,
        title: "Executive Reception",
        category: "Commercial",
        image: "/images/commercial_office_space_1765051398432.png",
        subtitle: "Sophisticated corporate reception area"
    },
    {
        id: 6,
        title: "Smart Storage",
        category: "Residential",
        image: "/images/residential_design_bedroom_1765051383812.png", // Using bedroom image for demo
        subtitle: "Innovative storage solutions maximizing space"
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-terracotta-500 uppercase tracking-widest font-medium mb-4 block">Our Work</span>
                        <h2 className="text-5xl font-serif text-charcoal">Featured Portfolio</h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <button className="text-charcoal border-b border-charcoal pb-1 hover:text-terracotta-500 hover:border-terracotta-500 transition-colors">
                            View All Projects
                        </button>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-8 mb-12 overflow-x-auto no-scrollbar pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-lg font-medium whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-terracotta-500' : 'text-charcoal/50 hover:text-charcoal'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={project.id}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="border border-white/30 rounded-full px-6 py-3 text-white backdrop-blur-md">
                                        View Project
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-charcoal mb-1">{project.title}</h3>
                                    <p className="text-charcoal/60 text-sm">{project.subtitle}</p>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-terracotta-500 border border-terracotta-200 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
