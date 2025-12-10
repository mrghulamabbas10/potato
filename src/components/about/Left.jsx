"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export default function LeftSection() {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="relative bg-pot-brown rounded-xl overflow-hidden p-5 md:p-12">
                {/* Decorative circles */}
                <div className="absolute md:-left-[30%] lg:-left-[20%] -left-[38%] md:translate-x-[-30%] translate-x-[-38%] top-1/2 -translate-y-1/2 w-64 h-64 bg-pot-beige rounded-full"></div>
                <div className="absolute md:-right-[30%] lg:right-[-20%] -right-[38%] md:translate-x-[30%] translate-x-[38%] top-1/2 -translate-y-1/2 w-64 h-64 bg-pot-darker-brown rounded-full"></div>

                <div className="relative z-10">

                    {/* Title */}
                    <motion.div
                        className="flex items-center justify-between mb-6"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <h3 className="text-3xl md:text-[38px] font-semibold text-black tracking-wide">
                            Spuds
                        </h3>
                        <div className="flex-1 mx-6 border-b border-black/20"></div>
                    </motion.div>

                    {/* Image pop + gentle floating */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
                    >
                        <motion.img
                            src="/images/dish1.png"
                            alt="Loaded potato"
                            className="w-full max-w-xl scale-110 mx-auto transform"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                    {/* Description + button row */}
                    <motion.div
                        className="flex items-center md:justify-between gap-0 mt-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    >
                        <p className="text-sm md:text-xl font-medium text-black leading-relaxed md:max-w-md">
                            Grilled chicken topped with signature buffalo sauce & ranch dressing,
                            scallions & The POT signature seasoning
                        </p>

                        {/* Button animation */}
                        <Link
                            href={"#"}
                            className="bg-white hover:bg-pot-dark-brown hover:text-white p-3 md:p-4 rounded-full transition-colors flex-shrink-0"
                        >
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
