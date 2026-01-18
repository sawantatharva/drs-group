"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FoundationGallery() {
  const images = [
    "/foundation/1.jpeg",
    "/foundation/2.jpeg",
    "/foundation/3.jpeg",
    "/foundation/4.jpeg",
    "/foundation/5.jpeg",
    "/foundation/6.jpeg",
    "/foundation/7.jpeg",
    "/foundation/8.jpeg",
    "/foundation/9.jpeg",
    "/foundation/10.jpeg",
    "/foundation/11.jpeg",
    "/foundation/12.jpeg",
    "/foundation/13.jpeg",
    "/foundation/14.jpeg",
    "/foundation/15.jpeg",
    "/foundation/16.jpeg",
  ];

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative aspect-4/3 rounded-3xl overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={images[active]}
            alt="DRS Foundation Gallery"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === active ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}