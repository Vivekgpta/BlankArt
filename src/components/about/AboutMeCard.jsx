import React from "react";
import { motion } from "framer-motion";

const AboutMeCard = () => {
  const sections = [
    {
      title: "The Beginning",
      text: [
        `I started making illustrations 4 years ago at just 16 (wow!) out of pure boredom during lockdown.`,
        `But then came that one order, the one that gave me hope.`,
        `That's when God gave me this idea and kept me going.`,
      ],
      img: "https://img.freepik.com/premium-photo/man-wearing-glasses-shirt-that-says-he-is-smiling_984237-62020.jpg",
      reverse: false,
    },
    {
      title: "Why Live in Paints",
      text: [
        `Because that's the whole point, me, happily living in my delusional little colourful world,`,
        `Now I get to fill that same magic into every single illustration I make with lots of love and a tiny bit of sparkle.`,
      ],
      img: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      reverse: true,
    },
    {
      title: "Slowly but Surely",
      text: [
        `People started falling in love with Live in Paints, and honestly, so did my heart.`,
        `I'd do a little happy dance with every order!! SERIOUSLY, every single one!`,
        `It was never just a product, it was a tiny bundle of joy, made with love for both of us.`,
      ],
      img: "https://img.freepik.com/premium-photo/traditional-mask-dancer-with-colourful-costume_1048944-19025261.jpg?w=1480",
      reverse: false,
    },
     {
      title: "The Beginning",
      text: [
        `I started making illustrations 4 years ago at just 16 (wow!) out of pure boredom during lockdown.`,
        `But then came that one order, the one that gave me hope.`,
        `That's when God gave me this idea and kept me going.`,
      ],
      img: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      reverse: false,
    },
    {
      title: "Why Live in Paints",
      text: [
        `Because that's the whole point, me, happily living in my delusional little colourful world,`,
        `Now I get to fill that same magic into every single illustration I make with lots of love and a tiny bit of sparkle.`,
      ],
      img: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      reverse: true,
    },
    {
      title: "Slowly but Surely",
      text: [
        `People started falling in love with Live in Paints, and honestly, so did my heart.`,
        `I'd do a little happy dance with every order!! SERIOUSLY, every single one!`,
        `It was never just a product, it was a tiny bundle of joy, made with love for both of us.`,
      ],
      img: "https://live-in-paints.vercel.app/images/icon.webp",
      reverse: false,
    },
  ];

  return (
    <div className="bg-[#fefaf8]">
      {sections.map((section, i) => (
        <div
          key={i}
          className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } items-center py-12 px-6 md:px-16`}
        >
          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 p-4"
            initial={{ x: section.reverse ? 150 : -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              className="w-full rounded-3xl object-cover shadow-md"
              src={section.img}
              alt={section.title}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 text-center md:text-left"
            initial={{ x: section.reverse ? -150 : 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#390f0f] mb-4">
              {section.title}
            </h1>
            {section.text.map((line, idx) => (
              <p
                key={idx}
                className="text-lg md:text-xl text-[#390f0f] my-2 leading-relaxed"
              >
                {line.split(" ").map((word, wIdx) =>
                  word.toLowerCase().includes("hope") ||
                  word.toLowerCase().includes("magic") ||
                  word.toLowerCase().includes("joy") ? (
                    <span key={wIdx} className="text-[#ff5d8f]">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </p>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AboutMeCard;


