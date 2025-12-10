"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { menuData } from "@/data/data";
import MenuCategory from "./ui/MenuCategory";

export default function MenuSection() {
  return (
    <section className="px-4 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {menuData.map((category) => (
            <SwiperSlide key={category.id}>
              <MenuCategory category={category} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
