import { menuData } from "@/data/data";
import MenuCategory from "./ui/MenuCategory";

export default function MenuSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-start flex-none gap-12 lg:gap-16">
          {menuData.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
