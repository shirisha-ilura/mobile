import React from "react";
import { Card } from "../../../../components/ui/card";

export const ContainerSubsection = (): JSX.Element => {
  // Promotional food items data - 7 items in red banner
  const promotionalFoods = [
    {
      name: "Chicago Deep Pizza",
      image: "/pizza.avif",
      className: "left-[0px]",
    },
    {
      name: "Fast Food Combo",
      image: "/fastfoodcombo.jpg",
      className: "left-[55px]",
    },
    {
      name: "Grilled Chicken",
      image: "/grilledchicken.webp",
      className: "left-[110px]",
    },
    {
      name: "Whopper Burger King",
      image: "/burger.jpg",
      className: "left-[165px]",
    },
    {
      name: "Chicken",
      image: "/chicken.webp",
      className: "left-[220px]",
    },
    {
      name: "Beef",
      image: "/beef.webp",
      className: "left-[275px]",
    },
    {
      name: "Shawarma",
      image: "/shawarma.webp",
      className: "left-[330px]",
    },
  ];

  return (
    <Card className="relative w-full h-[77px] bg-[#e50300] overflow-hidden border-none rounded-none">
      <div className="relative w-full h-full">
        {/* Food promotional items */}
        <div className="absolute w-[395px] h-[60px] top-[8px] left-[17px]">
          {promotionalFoods.map((food, index) => (
            <div
              key={`promo-food-${index}`}
              className={`absolute w-[46px] h-[60px] ${food.className}`}
            >
              {/* Circular food image */}
              <div className="relative w-[46px] h-[46px] top-0 left-0">
                <img
                  className="w-[46px] h-[46px] object-cover rounded-full bg-white shadow-sm border border-white/20"
                  alt={food.name}
                  src={food.image}
                />
              </div>
              
              {/* Food name text */}
              <div className="absolute top-[48px] left-0 w-[46px] flex items-center justify-center">
                <span className="text-white text-[7px] font-semibold text-center leading-tight [font-family:'Poppins',Helvetica] tracking-tight">
                  {food.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
