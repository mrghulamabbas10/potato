"use client";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

export default function MenuCategory({ category }) {
  return (
    <motion.div
      className="flex flex-col"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-8"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6, ease: "easeOut" }
          }
        }}
      >
        <h2 className="font-urbanist text-3xl md:text-[33px] font-semibold text-black">
          {category.name}
        </h2>

        <motion.div
          className="flex-1 mx-4 md:mx-6 border-b border-black/20"
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            show: {
              scaleX: 1,
              opacity: 1,
              transition: { delay: 0.35, duration: 0.7, ease: "easeOut" }
            }
          }}
          style={{ transformOrigin: "left" }}
        />

        <motion.span
          className="font-urbanist text-3xl md:text-[33px] font-semibold text-black"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.45, duration: 0.6 }
            }
          }}
        >
          {category.number}
        </motion.span>
      </motion.div>

      {/* Items with stagger */}
      <motion.div
        className="space-y-8"
        variants={{
          hidden: {},
          show: {
            transition: {
              delayChildren: 0.6,
              staggerChildren: 0.2
            }
          }
        }}
      >
        {category.items.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <MenuItem item={item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
