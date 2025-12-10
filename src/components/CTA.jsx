"use client";
import { Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="md:px-5 px-1">
      <motion.div
        className="relative md:py-14 2xl:py-32 py-40 bg-pot-beige rounded-3xl cta"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="relative rounded-[28px] md:rounded-[38px] px-4 overflow-hidden">
            <motion.div className="max-w-4xl mx-auto text-center space-y-3 2xl:space-y-8 relative z-10">
              {/* Icon Row */}
              <motion.div
                className="flex justify-center items-center md:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-pot-brown flex items-center justify-center"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}

                >
                  <img
                    src="/images/Icon1.png"
                    alt="Icon"
                    className="w-8 h-8 md:w-10 md:h-10 transform rotate-[105deg]"
                  />
                </motion.div>

                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 -ml-2 rounded-full bg-white flex items-center justify-center"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img
                    src="/images/Icon2.png"
                    alt="Icon"
                    className="w-10 h-7 md:w-12 md:h-8"
                  />
                </motion.div>

                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 -ml-4 rounded-full bg-pot-brown flex items-center justify-center"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <img
                    src="/images/Icon3.png"
                    alt="Icon"
                    className="w-10 h-10 md:w-12 md:h-12 transform rotate-45"
                  />
                </motion.div>
              </motion.div>

              <motion.h2
                className="text-xl md:text-2xl lg:text-[28px] font-medium text-[#303030]"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Come.Get.Stuffed
              </motion.h2>

              <motion.h3
                className="text-4xl md:text-5xl lg:text-[76px] font-semibold leading-[1] max-w-2xl mx-auto text-black"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
              >
                Fuel your <span className="text-pot-brown">stomach</span> in every
                bite
              </motion.h3>

              <motion.div
                className="flex justify-center items-center gap-4 pt-4 md:pt-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
              >
                <motion.button
                  className="bg-pot-brown hover:bg-pot-dark-brown text-white px-10 md:px-14 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-colors"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  View Menu
                </motion.button>

                <motion.button
                  className="bg-pot-dark-brown hover:bg-pot-darker-brown text-white w-14 h-14 md:w-[65px] md:h-[65px] rounded-full flex items-center justify-center transition-colors"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.9 }}
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
