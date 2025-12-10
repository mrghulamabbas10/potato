import { Mail, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className=" px-4 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex-1 relative">
            <div className="relative bg-pot-brown rounded-xl overflow-hidden p-8 md:p-12">
              <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-pot-beige rounded-full"></div>
              <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-pot-darker-brown rounded-full"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl md:text-[38px] font-semibold text-black tracking-wide">
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
                  <p className="text-lg md:text-xl font-medium text-black leading-relaxed max-w-md">
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
            <h2 className="text-5xl md:text-6xl lg:text-[74px] font-semibold text-black leading-tight mb-4">
              Proud to <br /> Serve You
            </h2>
            <p className="text-lg md:text-xl font-medium text-black leading-relaxed mb-5">
              The POT baked potato bar is known for revolutionizing the way
              people eat and enjoy food. We take pride in our ability to
              discover the most unique flavors from around the world and share
              them with the DFW area. Join us.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <button className="bg-pot-brown hover:bg-pot-dark-brown text-white text-lg md:text-xl font-semibold px-8 md:px-10 py-4 rounded-[35px] transition-colors">
                    View Menu
                  </button>
                  <button className="bg-pot-dark-brown hover:bg-pot-darker-brown text-white p-4 md:p-5 rounded-full transition-colors">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <button className="text-lg md:text-xl font-medium text-black px-6 py-3 rounded-[20px] bg-white hover:bg-black/5 transition-colors">
                    UberEats
                  </button>
                  <button className="text-lg md:text-xl font-medium text-black px-6 py-3 rounded-[20px] bg-white hover:bg-black/5 transition-colors">
                    DoorDash
                  </button>
                </div>
                <button className="text-lg md:text-xl font-medium text-black px-6 py-3 rounded-[20px] bg-white hover:bg-black/5 transition-colors">
                  Order for Pickup
                </button>
              </div>

              <div className="mt-8 flex gap-4">
                <img
                  src="/images/proudtoserve.png"
                  alt="Award certificate"
                  className="w-24 md:w-56 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
