import LeftSection from "./Left";
import RightSection from "./Right";

export default function Fresh() {
  return (
    <section className="relative">
      <div className="container mx-auto md:px-4">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <LeftSection />
          {/* Right Content - Image Composition */}
          <RightSection />
        </div>
      </div>
    </section>
  );
}
