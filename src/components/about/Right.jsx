"use client";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function RightSection() {
    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };

    const fadeSlideLeft = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const fadeSlideRight = {
        hidden: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const floatAnimation = {
        animate: {
            y: [0, -10, 0],
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        },
    };

    return (
        <motion.div
            className="lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Heading */}
            <motion.h2
                className="text-5xl md:text-6xl lg:text-5xl xl:text-[74px] font-semibold text-black leading-tight mb-2 md:mb-4"
                variants={fadeSlideLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                Proud to <br /> Serve You
            </motion.h2>

            {/* Paragraph */}
            <motion.p
                className="text-base xl:text-xl font-medium text-black leading-relaxed mb-5"
                variants={fadeSlideRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                The POT baked potato bar is known for revolutionizing the way
                people eat and enjoy food. We take pride in our ability to
                discover the most unique flavors from around the world and share
                them with the DFW area. <br /> Join us.
            </motion.p>

            {/* Buttons & image container */}
            <motion.div
                className="flex md:flex-row flex-col md:items-center justify-between"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {/* Left buttons */}
                <motion.div className="flex-1 space-y-4 md:space-y-6">
                    {/* First row */}
                    <motion.div className="flex items-center gap-4 mb-8" variants={fadeUp}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-pot-brown text-nowrap hover:bg-pot-dark-brown text-white text-lg md:text-xl font-semibold px-14 md:px-10 md:py-4 py-3 rounded-[35px] transition-colors"
                        >
                            View Menu
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-pot-dark-brown hover:bg-pot-darker-brown text-white p-4 md:p-5 rounded-full transition-colors"
                        >
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </motion.button>
                    </motion.div>

                    {/* Second row */}
                    <motion.div className="flex gap-3 mb-3 md:mb-6" variants={fadeUp}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-lg md:text-xl font-medium text-black px-6 py-3 rounded-full md:rounded-[20px] bg-white hover:bg-black/5 transition-colors"
                        >
                            UberEats
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-lg md:text-xl font-medium text-black px-6 py-3 rounded-full md:rounded-[20px] bg-white hover:bg-black/5 transition-colors"
                        >
                            DoorDash
                        </motion.button>
                    </motion.div>

                    {/* Third row */}
                    <motion.div variants={fadeUp}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-lg md:text-xl font-medium text-black px-6 py-3 rounded-full md:rounded-[20px] bg-white hover:bg-black/5 transition-colors"
                        >
                            Order for Pickup
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right image */}
                <motion.div
                    className="md:mt-8 -mt-10 flex gap-4 ml-auto pr-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.5 }}
                    animate={{
                        y: [0, -10, 0], // gentle floating
                        transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                    }}
                >
                    <motion.img
                        src="/images/proudtoserve.png"
                        alt="Award certificate"
                        className="w-[50vw] md:w-56 h-auto"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
