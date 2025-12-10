import React from "react";
import CircularBadge from "./ui/CircularBadge";

export default function TasteaBite() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-pot-beige">
      {/* Background Text */}
      <div className="absolute inset-x-0 bottom-0 md:bottom-12 text-center overflow-hidden pointer-events-none select-none">
        <h4
          className="text-[120px] md:text-[250px] lg:text-[400px] font-semibold opacity-[0.07] whitespace-nowrap leading-none"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          POTATO
        </h4>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-[59px] font-normal text-[#FF6B0A] leading-tight"
            style={{
              fontFamily: "cursive",
              fontStyle: "italic",
            }}
          >
            Taste a bite
          </h2>

          <h3
            className="text-4xl md:text-5xl lg:text-[74px] font-semibold leading-[1.1] max-w-4xl mx-auto text-black"
            style={{ fontFamily: "Urbanist, sans-serif" }}
          >
            Satisfy your craving, it's fast food waving
          </h3>
        </div>

        {/* Main Content Area */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background Circles */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
            <svg viewBox="0 0 830 478" className="w-full max-w-4xl h-auto">
              <ellipse
                cx="415"
                cy="300"
                rx="369"
                ry="320"
                fill="#FCAD73"
                opacity="0.7"
              />
              <ellipse
                cx="415"
                cy="350"
                rx="320"
                ry="280"
                fill="#CC8550"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Person Image */}
          <div className="relative z-10 flex justify-center items-center mb-8 md:mb-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a51686d5710e32e762b40f9f13f228f869b8479c?width=1404"
              alt="Person enjoying baked potato"
              className="max-w-full md:max-w-2xl lg:max-w-3xl w-full h-auto"
            />
          </div>

          {/* Left Card */}
          <div className="absolute left-0 md:left-8 bottom-8 md:bottom-20 bg-white rounded-xl p-4 max-w-[200px] md:max-w-xs shadow-2xl hidden md:block z-20">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/25f58371900266af8437e5f6026a841b9da769e4?width=462"
              alt="Crispy baked potato"
              className="w-full rounded-lg mb-3"
            />
            <p
              className="text-base md:text-lg font-medium text-black leading-tight"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Crispy baked potatoes loaded with butter, cheese, & all the
              toppings.
            </p>
          </div>

          {/* Right Badge */}
          <div className="absolute right-0 md:right-8 bottom-8 md:bottom-20 hidden md:block z-20">
            <CircularBadge />
          </div>

          {/* Decorative Spices - Left */}
          <div className="absolute top-0 md:top-12 left-0 hidden lg:block">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/06af9d0a8c709c13ba1845733dcdf327fc02bcda?width=1108"
              alt="Spices decoration"
              className="w-[120px] lg:w-[180px] opacity-70"
            />
          </div>

          {/* Decorative Chili - Right */}
          <div className="absolute top-0 md:top-8 right-0 hidden lg:block">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f48613727a626d8ac4f8d5f04401107acb4d59fa?width=500"
              alt="Chili decoration"
              className="w-[150px] lg:w-[220px] opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
