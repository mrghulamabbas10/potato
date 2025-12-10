import { Mail } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-pot-beige">
      <div className="container mx-auto px-4">
        <div
          className="relative rounded-[28px] md:rounded-[38px] py-16 md:py-20 lg:py-24 px-4 overflow-hidden"
          style={{
            backgroundImage:
              "url(https://api.builder.io/api/v1/image/assets/TEMP/b2c177a489442e53dad09b135d66559ec7be1460?width=2808)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            {/* Icon Row */}
            <div className="flex justify-center items-center gap-3 md:gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-pot-brown flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c6029370263d254f85f1821006cd4263087aac9a?width=84"
                  alt="Icon"
                  className="w-8 h-8 md:w-10 md:h-10 transform rotate-[105deg]"
                />
              </div>

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5d28149295c7aaa30c043730b1b59e1254783995?width=98"
                  alt="Icon"
                  className="w-10 h-7 md:w-12 md:h-8"
                />
              </div>

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-pot-brown flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a9938e6d68019119717190ae7e84789507dffaea?width=93"
                  alt="Icon"
                  className="w-10 h-10 md:w-12 md:h-12 transform rotate-45"
                />
              </div>
            </div>

            <h2
              className="text-xl md:text-2xl lg:text-[28px] font-medium text-pot-darker-brown"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Come.Get.Stuffed
            </h2>

            <h3
              className="text-4xl md:text-5xl lg:text-[76px] font-semibold leading-[1] max-w-3xl mx-auto text-black"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Fuel your <span className="text-pot-brown">stomach</span> in every
              bite
            </h3>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 md:pt-8">
              <button
                className="bg-pot-brown hover:bg-pot-dark-brown text-white px-10 md:px-14 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-colors"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                View Menu
              </button>

              <button className="bg-pot-dark-brown hover:bg-pot-darker-brown text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
