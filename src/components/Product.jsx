"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../lib/useOutsideClick";
import lotion from "../assets/img/lotion.jpeg";
import perfume from "../assets/img/perfume.webp";
import rollon from "../assets/img/rollon.jpg";
import soap from "../assets/img/soap.webp";
import oil from "../assets/img/oil.webp";
import wash from "../assets/img/wash.jpeg";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white bg-gradient-to-b from-gray-50 to-pink-500 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-900  text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-pink-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-900 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start  gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 hover:bg-gradient-to-b from-gray-50 to-pink-500/40 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-gray-900  text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600  text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Perfume",
    title: "Shop with Sweetbobi❤️",
    src: perfume,
    ctaText: "Visit",
    ctaLink: "https://wa.me/+263712505368",
    content: () => {
      return (
        <p>
          Discover the timeless elegance of Author Ford Perfumes, where luxury
          meets individuality. Crafted with rich, long-lasting notes, these
          fragrances are designed for those who want to leave a lasting
          impression. I am proud to
          bring you an exclusive collection of Author Ford is most sought-after
          scents each bottle a statement of sophistication, confidence and
          style. Whether you are looking for a signature fragrance or the
          perfect gift, Author Ford Perfumes deliver a premium experience that
          speaks for itself.
        </p>
      );
    },
  },
  {
    description: "Body Lotion",
    title: "Sweetbobi❤️ to the world",
    src: lotion,
    ctaText: "Visit",
    ctaLink: "https://wa.me/+263712505368",
    content: () => {
      return (
        <p>
          Discover the nourishing care of Author Ford Body Lotion, a premium
          skincare essential designed to leave your skin soft, smooth, and
          deeply hydrated. Whether
          you are combating dryness or simply want a touch of luxury in your
          routine, Author Ford Body Lotion delivers lasting moisture and a
          refreshing feel. Treat your skin to the comfort it deserves and
          experience the difference trusted customers already love.
        </p>
      );
    },
  },

  {
    description: "Body Wash",
    title: "Sweetbobi❤️ all the way",
    src: wash,
    ctaText: "Visit",
    ctaLink: "https://wa.me/+263712505368",
    content: () => {
      return (
        <p>
          Discover the refreshing confidence of Author Ford Body Wash, a premium
          daily cleanser crafted to leave your skin feeling clean, smooth, and
          energized. Designed with a bold
          yet subtle fragrance, Author Ford Body Wash keeps you feeling fresh
          long after your shower. Perfect for those who value quality and style
          in their grooming routine, this body wash combines performance with
          sophistication an excellent choice for elevating your everyday
          self-care.
        </p>
      );
    },
  },
  {
    description: "Tissue Oil",
    title: " Sweetbobi❤️ Everywhere",
    src: oil,
    ctaText: "Visit",
    ctaLink: "https://wa.me/+263712505368",
    content: () => {
      return (
        <p>
          Discover the difference of healthy, hydrated skin with Author Ford
          Tissue Oil. Enriched with quality ingredients, it helps restore
          smoothness, reduce dryness, and keep your skin looking fresh
          throughout the day. Trusted by many for its effective results, Author
          Ford Tissue Oil is an excellent addition to your daily skincare
          routine. Get yours today and enjoy the confidence of well cared for
          skin.
        </p>
      );
    },
  },
  {
    description: "Soap",
    title: "Shop with Sweetbobi anytime❤️",
    src: soap,
    ctaText: "Visit",
    ctaLink: "https://wa.me/+263712505368",
    content: () => {
      return (
        <p>
          Discover the natural goodness of Author Ford Soap, a premium skincare
          choice crafted to leave your skin feeling refreshed, clean, and
          nourished. Perfect for those who value both luxury and care, Author
          Ford Soap is an excellent addition to your personal care routine or a
          thoughtful gift for someone special. I am proud to bring you this
          product at competitive prices with reliable service and delivery.
        </p>
      );
    },
  },
  {
    description: "Roll-on",
    title: "Sweetbobi❤️",
    src: rollon,
    ctaText: "Visit",
    ctaLink: "https://wa.me/+263712505368",
    content: () => {
      return (
        <p>
          Discover all day freshness with Author Ford Roll-On, the trusted
          choice for lasting protection and confidence.Author Ford Roll-On combines comfort and reliability
          in every swipe. Get yours today and enjoy premium care at an
          affordable price!
        </p>
      );
    },
  },
];
