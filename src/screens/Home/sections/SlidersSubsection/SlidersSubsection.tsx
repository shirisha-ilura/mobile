import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const SlidersSubsection = (): JSX.Element => {
  // Data for restaurant promotion cards
  const restaurantCards = [
    {
      name: "Tandan Bakers",
      tagline: "Savour the flavour",
      taglineColor: "text-[#e50300]",
      description: "of delightful treats",
      buttonColor: "bg-[#e50300]",
      hoverButtonColor: "hover:bg-[#e50300]",
      blurColor: "bg-[#f5474845]",
      image: {
        src: "/icecream.webp",
        alt: "Coold sweet ice",
      },
    },
    {
      name: "Domino's Pizza",
      tagline: "Pizzas at Rs179*",
      taglineColor: "text-[#334077]",
      description: "CheeseBurst Pizzas at Rs249*",
      buttonColor: "bg-[#334077]",
      hoverButtonColor: "hover:bg-[#334077]",
      blurColor: "bg-[#f54748]",
      image: {
        src: "/icecream.webp",
        alt: "Freshly baked pizza",
      },
    },
    {
      name: "Desoan",
      tagline: "Enjoy the flavours",
      taglineColor: "text-[#2e5683]",
      description: "of delicious dishes",
      buttonColor: "bg-[#2e5683]",
      hoverButtonColor: "hover:bg-[#2e5683]",
      blurColor: "bg-[#e50300]",
      image: {
        src: "/icecream.webp",
        alt: "Delicious indian",
      },
    },
    {
      name: "Pizza Hut",
      tagline: "Get 60% OFF*",
      taglineColor: "text-[#95380c]",
      description: "Order fantastic food",
      buttonColor: "bg-[#95380c]",
      hoverButtonColor: "hover:bg-[#95380c]",
      blurColor: "bg-[#e50300]",
      image: {
        src: "/icecream.webp",
        alt: "Element",
      },
    },
    {
      name: "The Burger World",
      tagline: "Snack celebration",
      taglineColor: "text-[#8b610c]",
      description: "Enjoy the taste",
      buttonColor: "bg-[#8b610c]",
      hoverButtonColor: "hover:bg-[#8b610c]",
      blurColor: "bg-[#e50300]",
      image: {
        src: "/icecream.webp",
        alt: "Top view delicious",
      },
    },
  ];

  return (
    <div className="w-full h-[137px] relative px-2">
      <Carousel className="w-full">
        <CarouselContent>
          {restaurantCards.map((card, index) => (
            <CarouselItem key={`restaurant-card-${index}`}>
              <Card className="w-full max-w-[389px] h-[137px] bg-white rounded-xl overflow-hidden border border-gray-300 shadow-lg mx-auto">
                <CardContent className="p-0 h-full relative">
                  <div className="absolute w-[232px] h-[164px] top-[-39px] left-[-21px]">
                    <div
                      className={`absolute w-[142px] h-[142px] top-0 left-0 ${card.blurColor} rounded-[70.78px] blur-[28.54px]`}
                    />

                    <div className="absolute top-[49px] left-[37px] [font-family:'Poppins',Helvetica] font-semibold text-[#494949] text-base tracking-[0] leading-[normal]">
                      {card.name}
                    </div>

                    <div className="absolute top-[99px] left-[37px] [font-family:'Poppins',Helvetica] font-medium text-[#494949] text-[13.7px] tracking-[0] leading-[normal]">
                      {card.description}
                    </div>

                    <div
                      className={`absolute top-[68px] left-[37px] [font-family:'Poppins',Helvetica] font-bold ${card.taglineColor} text-[20.5px] tracking-[0] leading-[normal]`}
                    >
                      {card.tagline}
                    </div>

                    <Button
                      className={`absolute top-[134px] left-[37px] ${card.buttonColor} ${card.hoverButtonColor} rounded-[25.12px] h-auto px-[7.99px] py-[4.57px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[13.7px]`}
                    >
                      ORDER NOW
                    </Button>
                  </div>

                  <div className="absolute w-[177px] h-[120px] top-2.5 left-[212px]">
                    <div className="absolute w-[103px] h-6 top-24 left-[23px]" />
                    <img
                      className="absolute w-[177px] h-[118px] top-0 left-0 object-cover"
                      alt={card.image.alt}
                      src={card.image.src}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white shadow-md" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white shadow-md" />
      </Carousel>
    </div>
  );
};
