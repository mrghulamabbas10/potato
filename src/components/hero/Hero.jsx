"use client";
import { motion } from "framer-motion";
import LeftSection from "./Left";
import RightSection from "./Right";

export default function HeroSection() {
  return (
    <section className="relative 2xl:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:px-0 px-5 ">
      <LeftSection />
      <motion.div
        className="relative"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6acf914411cf06a80ff4501b6ec92ec7916d7f0b?width=960"
          alt="Loaded potatoes on a tray"
          className="w-full md:h-full h-[80vw] object-cover"
        />
      </motion.div>
      <RightSection />
    </section>
  );
}
