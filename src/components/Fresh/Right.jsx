"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RightSection() {
    return (
        <div className="relative flex items-center justify-center bg-[#CC8550] py-28 px-20 md:py-10 md:px-10 h-full baked-bg">
            {/* Fresh Badge - Top Left */}
            <motion.div
                className="absolute -top-12 md:-top-14 lg:top-0 left-1/2 -translate-x-1/2 md:left-5 lg:-left-24 xl:left-0 z-20"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <img
                    src="/images/fresh.png"
                    alt="Fresh"
                    className="w-[170px] md:w-[180px] xl:w-[220px]"
                />
            </motion.div>

            {/* Main Potato Image - Center */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                animate={{ rotate: [0, 10, -10, 0] }}
            >
                <img
                    src="/images/Baked-Potato.png"
                    alt="Baked Potato"
                    className="w-[250px] md:w-[340px] xl:w-[380px] rounded-full drop-shadow-2xl"
                />

                {/* Eat Best Text Overlay */}
                <motion.div
                    className="absolute top-12 md:top-16 left-0 transform -translate-x-1/2 text-center whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3
                        className="text-4xl xl:text-[57px] font-bold text-white leading-none"
                        style={{
                            WebkitTextStroke: "1.5px #CC8550",
                            paintOrder: "stroke fill",
                        }}
                    >
                        Eat Best
                    </h3>
                </motion.div>

                {/* Food Here Text Overlay */}
                <motion.div
                    className="absolute bottom-5 md:bottom-16 -right-14 xl:-right-20 text-center whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3
                        className="text-4xl xl:text-[57px] font-bold text-white leading-none"
                        style={{
                            WebkitTextStroke: "1.5px #CC8550",
                            paintOrder: "stroke fill",
                        }}
                    >
                        Food Here
                    </h3>
                </motion.div>
            </motion.div>

            {/* Circular Badge - Bottom Left */}
            <motion.div
                className="absolute bottom-16 md:bottom-10 left-7 md:left-32 z-20"
                animate={{ rotate: 380 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
                <img src="/images/curcal.png" alt="" className="xl:w-44 md:w-32 w-32" />
            </motion.div>

            {/* Decorative Image - Top Right */}
            <motion.div
                className="absolute md:top-8 top-16 right-14 md:right-12 z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
                <img
                    src="/images/baked.png"
                    alt="Decoration"
                    className="w-32 md:w-[280px] lg:w-[220px]"
                />
            </motion.div>
        </div>
    );
}
