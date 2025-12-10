"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each child
      },
    },
  };

  const socialItem = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer>
      <div className="grid md:grid-cols-2 md:gap-5 container mx-auto px-10 pt-16">
        {/* Left Column */}
        <div>
          <div className="md:flex hidden items-center gap-10 mb-6">
            <h3 className="text-3xl md:text-2xl font-semibold text-black">
              Social Profiles
            </h3>
            <div className="border-b-2 border-black w-32"></div>
            <h5 className="text-3xl md:text-2xl font-semibold text-black">3</h5>
          </div>

          <motion.div
            className="flex items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
            variants={containerVariants}
          >
            <motion.div variants={socialItem}>
              <Link href="#">
                <img src="/images/fb.png" alt="fb" className="w-36" />
              </Link>
            </motion.div>

            <motion.div variants={socialItem}>
              <Link href="#">
                <img src="/images/insta.png" alt="insta" className="w-36" />
              </Link>
            </motion.div>

            <motion.div variants={socialItem}>
              <Link href="#">
                <img src="/images/tiktok.png" alt="tiktok" className="w-36" />
              </Link>
            </motion.div>
          </motion.div>

          <p className="mt-5 md:text-start text-center md:text-base text-xs">
            © Copyright 2025 by The POT baked potato bar.
          </p>
        </div>

        {/* Right Column */}
        <motion.div
          className="flex items-end justify-center gap-2 md:gap-4 mt-8 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.img
            src="/images/dish2.png"
            alt=""
            className="md:w-[12vw] w-[22vw]"
            variants={imageItem}
          />
          <motion.img
            src="/images/dish3.png"
            alt=""
            className="md:w-[25vw] w-[50vw]"
            variants={imageItem}
          />
          <motion.img
            src="/images/dish4.png"
            alt=""
            className="md:w-[10vw] w-[18vw]"
            variants={imageItem}
          />
        </motion.div>
      </div>
    </footer>
  );
}
