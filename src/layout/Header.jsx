"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-2 md:px-8 lg:px-12 py-0 xl:py-2 2xl:py-6 md:mt-0 -mt-2 container mx-auto">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">

        {/* Logo popup */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
        >
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="POT Logo"
              className="h-16 md:h-14 w-auto"
            />
          </Link>
        </motion.div>

        {/* Menu stagger animation */}
        <motion.nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.6
              }
            }
          }}
        >
          {["About Us", "Contact Us", "Menu"].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Link
                href={
                  item === "About Us"
                    ? "#about"
                    : item === "Contact Us"
                      ? "#contact"
                      : "#menu"
                }
                className="font-urbanist text-base lg:text-lg font-medium text-black hover:text-pot-dark-brown transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
