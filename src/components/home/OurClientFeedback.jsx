import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function OurClientFeedback() {
  const projects = [
    {
      image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const N = projects.length;

  // Wrap function to cycle index
  const wrap = (v, n) => ((v % n) + n) % n;

  // Auto-play
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 4000);
    return () => clearInterval(id);
  }, []);

  // Window items with offsets
  const windowItems = useMemo(() => {
    if (N === 0) return [];
    const items = [];
    for (let offset = -2; offset <= 2; offset++) {
      const pos = wrap(index + offset, N);
      items.push({ pos, offset });
    }
    return items;
  }, [index, N]);

  return (
    <div className="w-full lg:p-6 p-3 bg-[#ffedf3]">
      {/* Heading */}
      <div className="pt-[4vh] flex justify-center items-center flex-col">
        <h2 className="font-serif font-semibold text-[#390f0f] lg:text-[3.5vw] text-4xl md:text-5xl uppercase text-center">
          See What Our Clients Say
        </h2>
        <p className="text-[#ff5d8f] font-serif text-center max-w-2xl mt-2">
          Because happy clients say it best — Instagram testimonial from a satisfied customer
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-10 w-full max-w-6xl h-[420px] select-none">
        <div className="relative w-full h-full perspective-[1200px] overflow-visible">
          {windowItems.map(({ pos, offset }) => {
            const item = projects[pos];

            // Responsive baseX (card width * offset)
            const cardWidth = 280; // matches w-[70vw]/300px/360px approx
            const baseX = offset * cardWidth;
            const zIndex = 100 - Math.abs(offset);
            const rotate = offset * -6;
            const lift = offset === 0 ? -20 : 0;
            const scale = offset === 0 ? 1 : 0.9;

            return (
              <motion.div
                key={`${pos}-${offset}`}
                initial={{ opacity: 0, x: baseX * 1.15 }}
                animate={{
                  opacity: 1,
                  x: baseX,
                  y: lift,
                  rotate: rotate,
                  scale: scale,
                }}
                exit={{ opacity: 0, x: baseX * 0.85 }}
                transition={{ type: "spring", stiffness: 140, damping: 20 }}
                drag="x"
                dragConstraints={{ left: -50, right: 50 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 50) setIndex((i) => i - 1); // swipe right
                  if (info.offset.x < -50) setIndex((i) => i + 1); // swipe left
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex }}
              >
                <Card item={item} active={offset === 0} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card({ item, active }) {
  return (
    <motion.div
      className={`w-[70vw] sm:w-[300px] lg:w-[360px] h-[360px] rounded-2xl shadow-xl bg-white overflow-hidden border border-pink-100 ${
        active ? "ring-2 ring-[#ff5d8f]" : ""
      }`}
      whileHover={{ y: active ? -4 : 0 }}
    >
      <div className="h-2/3 w-full overflow-hidden">
        <img
          src={item?.image1}
          alt="testimonial"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="h-1/3 p-4 flex flex-col justify-center gap-1">
        <p className="text-sm text-neutral-500 line-clamp-2">
          Client testimonial here
        </p>
        <div className="flex items-center justify-between">
          <span className="font-medium text-neutral-900">Happy Client</span>
          <span className="text-xs text-[#ff5d8f]">Verified</span>
        </div>
      </div>
    </motion.div>
  );
}
