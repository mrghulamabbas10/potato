import { Mail, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 relative">
            <div className="relative bg-pot-brown rounded-xl overflow-hidden p-8 md:p-12">
              <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-pot-beige rounded-full"></div>
              <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-pot-darker-brown rounded-full"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-urbanist text-3xl md:text-[38px] font-semibold text-black tracking-wide">
                    Spuds
                  </h3>
                  <div className="flex-1 mx-6 border-b border-black/20"></div>
                </div>

                <div className="relative">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/31e31fbf6755b70efc4ef1a00de000f3819f750a?width=1221"
                    alt="Loaded potato"
                    className="w-full max-w-xl mx-auto transform -rotate-[20deg]"
                  />
                </div>

                <div className="flex items-center justify-between mt-8">
                  <p className="font-urbanist text-lg md:text-xl font-medium text-black leading-relaxed max-w-md">
                    Grilled chicken topped with signature buffalo sauce & ranch
                    dressing, scallions & The POT signature seasoning
                  </p>
                  <button className="bg-white hover:bg-gray-50 p-4 rounded-full transition-colors flex-shrink-0 ml-4">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h2 className="font-urbanist text-5xl md:text-6xl lg:text-[74px] font-semibold text-black leading-tight mb-8">
              Proud to Serve You
            </h2>
            <p className="font-urbanist text-lg md:text-xl font-medium text-black leading-relaxed mb-10">
              The POT baked potato bar is known for revolutionizing the way
              people eat and enjoy food. We take pride in our ability to
              discover the most unique flavors from around the world and share
              them with the DFW area. Join us.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <button className="bg-pot-brown hover:bg-pot-dark-brown text-white font-urbanist text-lg md:text-xl font-semibold px-8 md:px-10 py-4 rounded-[35px] transition-colors">
                View Menu
              </button>
              <button className="bg-pot-dark-brown hover:bg-pot-darker-brown text-white p-4 md:p-5 rounded-full transition-colors">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <button className="font-urbanist text-lg md:text-xl font-medium text-black border border-black/20 px-6 py-3 rounded-[20px] hover:bg-black/5 transition-colors">
                UberEats
              </button>
              <button className="font-urbanist text-lg md:text-xl font-medium text-black border border-black/20 px-6 py-3 rounded-[20px] hover:bg-black/5 transition-colors">
                DoorDash
              </button>
            </div>

            <button className="font-urbanist text-lg md:text-xl font-medium text-black border border-black/20 px-6 py-3 rounded-[20px] hover:bg-black/5 transition-colors">
              Order for Pickup
            </button>

            <div className="mt-8 flex gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b5619fffd3a6d862a109795c1d52adfc9e0513f3?width=592"
                alt="Decorative cranberries"
                className="w-16 h-auto"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/135f8f0c1d657c1099c003182708794923b75ad4?width=346"
                alt="Award certificate"
                className="w-24 md:w-32 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
