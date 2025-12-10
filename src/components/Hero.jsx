import { Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative grid grid-cols-3">
      <div className="leftSide relative bg-pot-beige flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-20 lg:py-32 overflow-hidden">
        <div className="relative z-10 text-center max-w-md">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a4a0df2d9ca95df0020ebd2c1be5a401c90653bd?width=510"
            alt="Loaded potato"
            className="w-48 md:w-56 lg:w-64 h-auto mx-auto mb-8"
          />
          <h1 className="font-urbanist text-4xl md:text-5xl lg:text-[52px] font-semibold text-black leading-tight mb-6">
            Come. Get. Stuffed.
          </h1>
          <p className="font-urbanist text-lg md:text-xl font-medium text-pot-gray leading-relaxed mb-8">
            Big, loaded potatoes piled high with flavor, made fresh all day.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#B66D36] hover:bg-pot-darker-brown text-white font-urbanist text-lg md:text-xl font-bold px-8 md:px-12 py-4 rounded-[41px] transition-colors">
              View Menu
            </button>
            <button className="bg-pot-dark-brown hover:bg-pot-darker-brown text-white p-4 md:p-5 rounded-full transition-colors">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f080d4b2a8367f1327553c44d39a53ff92ff9302?width=751"
          alt="Decorative potatoes"
          className="absolute bottom-0 right-0 w-32 md:w-40 lg:w-48 h-auto opacity-90"
        />
      </div>

      <div className="relative flex-1 min-h-[300px] lg:min-h-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6acf914411cf06a80ff4501b6ec92ec7916d7f0b?width=960"
          alt="Loaded potatoes on a tray"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="rightSide relative bg-pot-brown flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-20 lg:py-32 overflow-hidden">
        <div className="relative z-10 text-center max-w-md">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4c4693d5325a0e5a47bba8d71768048d7fdfdb8f?width=502"
            alt="Loaded potatoes"
            className="w-48 md:w-56 lg:w-64 h-auto mx-auto mb-8"
          />
          <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[52px] font-semibold text-black leading-tight mb-8">
            Thanksgiving Week Hours:
          </h2>
          <div className="font-urbanist text-lg md:text-xl font-medium text-black leading-relaxed space-y-1">
            <p>Tues: 11a - 6p</p>
            <p>Wed: 11a - 4p</p>
            <p>Thanksgiving: Closed</p>
            <p>Fri: Closed</p>
            <p>Sat: 11a - 4p</p>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0fe0946b1c925dde25a5be011b4c7974aa935318?width=256"
          alt="Decorative cranberries"
          className="absolute top-24 right-0 w-24 md:w-28 lg:w-32 h-auto opacity-90"
        />
      </div>
    </section>
  );
}
