'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: "01",
        title: "Residential Design",
        desc: "Creating comfortable and stylish living spaces tailored to your unique lifestyle.",
        features: ["Custom Furniture", "Color Consultation", "Smart Home Integration"],
        image: "/images/residential_design_bedroom_1765051383812.png"
    },
    {
        id: "02",
        title: "Commercial Design",
        desc: "Designing functional and impressive spaces for offices and retail environments.",
        features: ["Brand Integration", "Ergonomic Layouts", "Acoustic Solutions"],
        image: "/images/commercial_office_space_1765051398432.png"
    },
    {
        id: "03",
        title: "Space Planning",
        desc: "Optimizing every square foot to enhance functionality, flow, and aesthetic.",
        features: ["3D Visualization", "Traffic Flow Analysis", "Zoning Strategies"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white text-charcoal">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-terracotta-500 uppercase tracking-widest font-medium mb-4 block"
                        >
                            What We Offer
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-serif leading-tight"
                        >
                            Our Services
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md text-lg text-charcoal/70"
                    >
                        Comprehensive interior design solutions tailored to transform your vision into reality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative cursor-pointer"
                        >
                            <div className="h-[400px] md:h-[500px] w-full overflow-hidden relative rounded-xl mb-6 shadow-md md:shadow-none bg-sand-200">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <ArrowUpRight className="text-white w-6 h-6" />
                                </div>
                                <div className="absolute bottom-6 left-6 text-white z-10">
                                    <span className="text-6xl font-serif text-white/20 select-none block mb-[-20px]">{service.id}</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-serif mb-3 group-hover:text-terracotta-600 transition-colors">{service.title}</h3>
                            <p className="text-charcoal/70 mb-4 h-12">{service.desc}</p>

                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="text-sm font-medium text-charcoal/60 border-b border-sand-200 py-1 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400"></span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="h-0.5 w-0 group-hover:w-full bg-terracotta-500 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
