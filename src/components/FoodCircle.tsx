import Image from "next/image";
import { motion } from "framer-motion";

import { type TFoodCircleItem } from "~/pages";

const CIRCLE = 2 * Math.PI;

type TFoodCircleProps = {
  itemWidth?: number;
  items: TFoodCircleItem[];
  displayedItemsAmount: number;
  activeIdx: number;
};

const FoodCircle = ({
  itemWidth = 94,
  items,
  displayedItemsAmount,
  activeIdx,
}: TFoodCircleProps) => (
  <div
    className="absolute inset-0 flex flex-column"
    style={{
      clipPath: "circle(150% at 50% -100%)",
    }}
  >
    <motion.div
      className="flex-1 border-2 border-dashed rounded-full border-primary"
      animate={{
        rotate: `${(activeIdx / displayedItemsAmount) * CIRCLE}rad`,
      }}
      transition={{ type: "spring", mass: 0.5 }}
    >
      {[...Array(displayedItemsAmount)].map((_, idx) => {
        const item = items[idx % items.length];

        if (!item) return null;

        return (
          <div
            key={`foodCircle-item-${idx}`}
            style={{
              width: itemWidth * 2,
              transform: `translateX(-50%) rotate(${
                (idx / displayedItemsAmount) * CIRCLE
              }rad)`,
            }}
            className="absolute top-0 flex items-start justify-center origin-bottom left-1/2 h-1/2"
          >
            <Image
              src={item.image}
              width={itemWidth}
              height={itemWidth}
              alt=""
              className="-translate-y-1/2 rounded-full"
            />
          </div>
        );
      })}
    </motion.div>
  </div>
);

export default FoodCircle;
