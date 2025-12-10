
import LeftSection from "./Left";
import RightSection from "./Right";

export default function AboutSection() {
  return (
    <section className="px-5 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
}
