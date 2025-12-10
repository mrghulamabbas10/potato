"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative z-50 px-5 md:px-10 xl:px-20 md:mt-0 -mt-10">
      <div className="container mx-auto px-4 md:px-10 bg-white py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {/* SVG and heading */}
              <svg width="220" height="56" viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path here */}
              </svg>
              <h3 className="text-3xl md:text-4xl lg:text-[45px] font-semibold leading-[1.15] text-black">
                We'd love to hear <br /> from you!
              </h3>
            </div>

            <div className="space-y-5 text-base md:text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1 text-black" />
                <span className="text-black">
                  1516 Martin Luther King Jr Blvd Dallas, TX 75215
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-black" />
                <span className="text-black">(214) 210-9098</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-black" />
                <span className="text-black">info@thepotpotatobar.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 border border-[#E4E4E4] text-base md:text-[22px] placeholder:opacity-35 placeholder:text-black focus:outline-none focus:border-pot-brown transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 border border-[#E4E4E4] text-base md:text-[22px] placeholder:opacity-35 placeholder:text-black focus:outline-none focus:border-pot-brown transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full px-6 py-4 border border-[#E4E4E4] text-base md:text-[22px] placeholder:opacity-35 placeholder:text-black resize-none focus:outline-none focus:border-pot-brown transition-colors"
            />
            <button className="bg-[#B66D36] hover:bg-pot-dark-brown text-white px-14 md:px-14 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-colors">
              Send
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
