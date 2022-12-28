import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, clamp, motion } from "framer-motion";

import { DefaultLayout } from "~/layouts";
import FoodCircle from "~/components/FoodCircle";

const CIRCLE = 2 * Math.PI;

const CIRCLE_WIDTH = 560;
const CIRCLE_ITEM_WIDTH = 94;
const CIRCLE_ITEMS_AMOUNT = (() => {
  const width = CIRCLE_ITEM_WIDTH * 2;
  const r = CIRCLE_WIDTH / 2;
  const c = r * CIRCLE;

  return Math.floor(c / width);
})();

const FOOD_CIRCLE_ITEMS = [
  {
    image: "/images/1.png",
    background: "hsla(40, 100%, 94%, 1)",
    color: "hsla(30, 100%, 59%, 1)",
    price: 32,
    title: "Green Goddess Chicken Salad",
    description:
      "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
  },
  {
    image: "/images/2.png",
    background: "hsla(103, 100%, 94%, 1)",
    color: "hsla(103, 65%, 45%, 1)",
    price: 35,
    title: "Asian Cucumber Salad",
    description:
      "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
  },
  {
    image: "/images/3.png",
    background: "hsla(0, 100%, 94%, 1)",
    color: "hsla(10, 100%, 59%, 1)",
    price: 32,
    title: "Green Goddess Chicken Salad",
    description:
      "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
  },
];

export type TFoodCircleItem = typeof FOOD_CIRCLE_ITEMS[number];

const Home = () => {
  const [activeItemIdx, setActiveItemIdx] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const activeItem =
    FOOD_CIRCLE_ITEMS[Math.abs(activeItemIdx) % FOOD_CIRCLE_ITEMS.length];

  const goTo = (skipAmount: number) => {
    setDirection(clamp(-1, 1, skipAmount));
    setActiveItemIdx((prev) => prev + skipAmount);
  };

  return (
    <DefaultLayout>
      <main className="container mt-auto">
        {/* Content */}
        <div className="flex items-start justify-between">
          {/* Left column */}
          <div className="relative mt-24">
            <AnimatePresence initial={false}>
              <motion.div
                key={`foodDescription-${activeItemIdx}`}
                exit={{ position: "absolute" }}
                style={{ inset: 0 }}
              >
                <motion.p
                  className="pb-4 font-sans text-5xl font-semibold origin-top-left"
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
                  style={{
                    color: activeItem?.color,
                  }}
                >
                  ${activeItem?.price}
                </motion.p>
                <motion.h1
                  key={activeItemIdx}
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
                  className="max-w-[344px] origin-top-left pb-4 font-sans text-3xl font-medium leading-[1.4] text-textPrimary"
                >
                  {activeItem?.title}
                </motion.h1>
                <motion.h2
                  key={activeItemIdx}
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
                  className="max-w-[344px] origin-top-left pb-8 font-sans text-[13px] font-normal leading-[1.4] text-textPrimary"
                >
                  {activeItem?.description}
                </motion.h2>
              </motion.div>
            </AnimatePresence>
            <button
              className="rounded-full px-10 py-[14px] font-sans text-[13px] font-bold uppercase leading-[20px] text-white transition-colors ease-linear"
              style={{
                background: activeItem?.color,
              }}
            >
              Order Now
            </button>
          </div>
          {/* End of Left column */}
          {/* Right column */}
          <div className="relative">
            <div
              className="relative z-10 flex items-center"
              style={{
                width: CIRCLE_WIDTH,
                height: CIRCLE_WIDTH,
              }}
            >
              <FoodCircle
                itemWidth={CIRCLE_ITEM_WIDTH}
                items={FOOD_CIRCLE_ITEMS}
                displayedItemsAmount={CIRCLE_ITEMS_AMOUNT}
                activeIdx={activeItemIdx}
              />
              <div className="flex items-end justify-between flex-1">
                <button
                  onClick={() => goTo(-1)}
                  className="rotate-90 rounded-full p-[14px] transition-colors ease-linear"
                  style={{ background: activeItem?.color }}
                >
                  <Image
                    src="/icons/arrow-down.svg"
                    width={12}
                    height={12}
                    alt=""
                  />
                </button>
                <div className="relative h-[288px] w-[288px] overflow-hidden">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={`foodImage-${activeItemIdx}`}
                      initial={{
                        opacity: 0,
                        scale: 0.2,
                        rotate: direction * -45,
                      }}
                      animate={{ opacity: 1, scale: 1, rotate: -0 }}
                      exit={{
                        opacity: 0,
                        scale: 0.2,
                        rotate: direction * 45,
                        position: "absolute",
                      }}
                      transition={{ type: "spring", stiffness: 50, mass: 0.5 }}
                    >
                      <Image
                        src={activeItem?.image || ""}
                        width={288}
                        height={288}
                        alt=""
                        className="rounded-full aspect-square"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button
                  onClick={() => goTo(1)}
                  className="-rotate-90 rounded-full p-[14px] transition-colors ease-linear"
                  style={{ background: activeItem?.color }}
                >
                  <Image
                    src="/icons/arrow-down.svg"
                    width={12}
                    height={12}
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* Background circle */}
            <div
              style={{
                background: activeItem?.background,
              }}
              className="absolute bottom-1/2 left-1/2 h-[300%] w-[300%] -translate-x-1/2 rounded-full transition-colors ease-linear"
            />
            {/* End of Background circle */}
          </div>
          {/* End of Right column */}
        </div>
        {/* End of Content */}
      </main>
    </DefaultLayout>
  );
};

export default Home;
