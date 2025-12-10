import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-[39px] font-normal text-[#FF6B0A] leading-tight"
                style={{
                  fontFamily: "cursive",
                  fontStyle: "italic",
                }}
              >
                Contact Us
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-[45px] font-semibold leading-[1.15] text-black">
                We'd love to hear from you!
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
          </div>

          {/* Right: Contact Form */}
          <div className="space-y-5 md:space-y-6">
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
              rows={5}
              className="w-full px-6 py-4 border border-[#E4E4E4] text-base md:text-[22px] placeholder:opacity-35 placeholder:text-black resize-none focus:outline-none focus:border-pot-brown transition-colors"
            />

            <button className="bg-pot-brown hover:bg-pot-dark-brown text-white px-10 md:px-14 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
