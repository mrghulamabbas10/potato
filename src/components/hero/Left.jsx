"use client";
import { Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function LeftSection() {
    return (
        <motion.div
            className="leftSide relative bg-pot-beige flex flex-col items-center justify-center px-6 xl:px-12 py-10 lg:py-16 2xl:py-32 overflow-hidden md:rounded-none rounded-tr-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
        >
            <motion.div
                className="relative z-10 text-center max-w-md"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    duration: 0.6,
                    ease: "backOut",
                }}
            >
                <motion.img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/a4a0df2d9ca95df0020ebd2c1be5a401c90653bd?width=510"
                    alt="Loaded potato"
                    className="w-48 md:w-56 lg:w-64 h-auto mx-auto 2xl:mb-8 mb-5"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.6,
                        ease: "backOut",
                    }}
                />

                <motion.h1
                    className=" text-4xl md:text-5xl lg:text-4xl xl:text-[52px] font-semibold text-black leading-tight mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    Come. Get. Stuffed.
                </motion.h1>

                <motion.p
                    className=" text-lg xl:text-xl font-medium text-pot-gray leading-relaxed mb-5 xl:mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    Big, loaded potatoes piled high with flavor, made fresh all day.
                </motion.p>

                <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 1.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                    }}
                >
                    <button className="bg-[#B66D36] hover:bg-pot-darker-brown text-white  text-lg md:text-xl font-bold px-8 md:px-12 py-3 rounded-[41px] transition-colors">
                        View Menu
                    </button>
                    <button className="bg-pot-dark-brown hover:bg-pot-darker-brown text-white p-4 md:p-5 rounded-full transition-colors">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </motion.div>
            </motion.div>

            <motion.img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f080d4b2a8367f1327553c44d39a53ff92ff9302?width=751"
                alt="Decorative potatoes"
                className="absolute bottom-0 right-0 w-32 md:w-40 lg:w-48 h-auto opacity-90"
                initial={{ scale: 0.7, opacity: 0, x: 30, y: 30 }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                transition={{
                    delay: 1.4,
                    duration: 0.6,
                    ease: "backOut",
                }}
            />
        </motion.div>
    );
}
