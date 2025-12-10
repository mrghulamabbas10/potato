"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LeftSection() {
    return (
        <div className="text-center space-y-6 bg-[#EDE1D4] md:pb-10 pb-16 p-7 md:p-10">
            <motion.h2
                className="text-xl md:text-2xl font-bold text-pot-gray"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                I can't believe this is a potato
            </motion.h2>

            <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl xl:text-[57px] font-semibold leading-[1.1] text-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Comfort food that <br /> gets you through
                </motion.h1>

                <motion.div
                    className="flex justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
                >
                    <div className="bg-[#874D2F] text-white px-6 md:px-10 py-3 md:py-4 rounded-lg transform -rotate-1 shadow-lg inline-block">
                        <span className="text-4xl md:text-5xl lg:text-[57px] font-semibold whitespace-nowrap">
                            long days
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            <motion.p
                className="text-lg md:text-xl font-medium max-w-md mx-auto text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                The POT baked potato bar is known for revolutionizing the way
                people eat
            </motion.p>

            <motion.button
                className="bg-[#B66D36] hover:bg-pot-dark-brown text-white px-10 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg transition-colors flex items-center gap-3 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1832 22.8821C11.1832 22.8821 7.78414 19.9889 0.489647 19.9568C0.219263 19.9558 0 19.731 0 19.455V0.501766C0 0.3683 0.0521111 0.24086 0.144536 0.146526C0.23696 0.0521954 0.362814 1.39466e-05 0.493579 1.39466e-05C6.90709 0.0281136 10.4705 2.18266 11.5 2.91813C12.5304 2.18255 16.0937 0.0269884 22.5064 1.39466e-05C22.6372 -0.000989502 22.763 0.0521954 22.8555 0.146526C22.9479 0.240857 23 0.368302 23 0.501766V19.455C23 19.731 22.7817 19.9558 22.5104 19.9568C15.2159 19.9889 11.8168 22.8821 11.8168 22.8821C11.7834 22.9112 11.746 22.9353 11.7067 22.9533C11.5749 23.0156 11.4235 23.0156 11.2927 22.9533C11.2534 22.9343 11.2161 22.9102 11.1826 22.8821H11.1832ZM11.0092 3.79319C10.2511 3.23723 7.00928 1.14481 0.983143 1.00943V18.9592C6.32312 19.0746 9.6001 20.6672 11.0092 21.5452V3.79319ZM11.9924 21.5454C13.4014 20.6684 16.6774 19.0748 22.0184 18.9595V1.00968C15.9923 1.14415 12.7505 3.23749 11.9924 3.79344V21.5454Z"
                        fill="white"
                    />
                </svg>
                Read Menu
            </motion.button>
        </div>
    );
}
