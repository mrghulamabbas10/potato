"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RightSection() {
    return (
        <motion.div
            className="md:col-span-2 lg:col-span-1 rightSide relative bg-pot-brown flex-1 flex flex-col items-center justify-center px-6 xl:px-12 py-10 lg:py-16 2xl:py-32 overflow-hidden md:rounded-none rounded-br-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.div
                className="relative z-10 text-center max-w-md"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
            >
                <motion.img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4c4693d5325a0e5a47bba8d71768048d7fdfdb8f?width=502"
                    alt="Loaded potatoes"
                    className="w-48 md:w-56 lg:w-64 h-auto mx-auto mb-8"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
                />

                <motion.h2
                    className="text-xl md:text-5xl lg:text-4xl xl:text-[52px] font-semibold text-black leading-tight mb-5 xl:mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    Thanksgiving Week Hours:
                </motion.h2>

                <motion.div
                    className=" text-lg xl:text-xl font-medium text-black leading-relaxed space-y-1"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delayChildren: 1,
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {["Tues: 11a - 6p", "Wed: 11a - 4p", "Thanksgiving: Closed", "Fri: Closed", "Sat: 11a - 4p"].map(
                        (item, i) => (
                            <motion.p
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 },
                                }}
                            >
                                {item}
                            </motion.p>
                        )
                    )}
                </motion.div>
            </motion.div>

            <motion.img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0fe0946b1c925dde25a5be011b4c7974aa935318?width=256"
                alt="Decorative cranberries"
                className="absolute top-24 right-0 w-24 md:w-28 lg:w-32 h-auto opacity-90"
                initial={{ scale: 0.7, opacity: 0, x: 20, y: -20 }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6, ease: "backOut" }}
            />
        </motion.div>
    );
}
