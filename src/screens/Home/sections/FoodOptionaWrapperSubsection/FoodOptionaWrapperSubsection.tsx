import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const FoodOptionaWrapperSubsection = (): JSX.Element => {
  const foodCategories = [
    {
      name: "Pizza",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Pizza",
        src: "/pizza.avif",
      },
    },
    {
      name: "Burger",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Burger",
        src: "/burger.jpg",
      },
    },
    {
      name: "Biryani",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Biryani",
        src: "/biryani.webp",
      },
    },
    {
      name: "Noodles",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Noodles",
        src: "/noodles.webp",
      },
    },
    {
      name: "Salad",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Salad",
        src: "/salad.webp",
      },
    },
    {
      name: "Cake",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Cake",
        src: "/cake.webp",
      },
    },
    {
      name: "Rolls",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Rolls",
        src: "/rolls.webp",
      },
    },
    {
      name: "Momos",
      imageProps: {
        className: "w-[80px] h-[80px] mx-auto object-cover rounded-full",
        alt: "Momos",
        src: "/momos.webp",
      },
    },
  ];

  return (
    <Card className="w-full h-[130px] overflow-hidden border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <ScrollArea className="w-full h-full">
          <div className="flex items-center space-x-6 px-4 py-2 h-full">
            {foodCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[90px] h-full space-y-2"
              >
                <div className="flex items-center justify-center w-[80px] h-[80px] bg-white rounded-full shadow-sm">
                  <img {...category.imageProps} />
                </div>
                <div className="font-['Poppins',Helvetica] font-semibold text-[#000000] text-sm text-center">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
