export default function CircularBadge() {
  return (
    <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="#CC8550"
          stroke="white"
          strokeWidth="20"
        />
      </svg>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/5c45e6a70a37a7a14a962b25b1e17955aa832c2e?width=149"
        alt="Potato icon"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45px] h-[32px] md:w-[55px] md:h-[40px]"
      />
      <div className="absolute inset-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text className="text-[14px] md:text-[16px] fill-[#222218] font-semibold tracking-wider">
            <textPath href="#circlePath" startOffset="0%">
              EAT & ENJOY FOOD • EAT & ENJOY FOOD
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
