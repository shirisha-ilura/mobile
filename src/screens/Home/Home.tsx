import React from "react";
import { Separator } from "../../components/ui/separator";
import { ContainerSubsection } from "./sections/ContainerSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FoodOptionaWrapperSubsection } from "./sections/FoodOptionaWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";
import { Frame4Subsection } from "./sections/Frame4Subsection";
import { Frame5Subsection } from "./sections/Frame5Subsection";
import { Frame6Subsection } from "./sections/Frame6Subsection/Frame6Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { OfferSectionSubsection } from "./sections/OfferSectionSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import { SlidersSubsection } from "./sections/SlidersSubsection";
import { SortSubsection } from "./sections/SortSubsection";

export const Home = (): JSX.Element => {
  // Carousel indicator dots data
  const carouselDots = [
    { className: "w-1.5 h-1.5 bg-[#aea4a4] rounded-full" },
    { className: "w-1.5 h-1.5 bg-[#343030b2] rounded-full" },
    { className: "w-2.5 h-2.5 bg-[#0b0b0b] rounded-full" },
    { className: "w-1.5 h-1.5 bg-[#343030b2] rounded-full" },
    { className: "w-1.5 h-1.5 bg-[#aea4a4] rounded-full" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="w-[430px] max-w-[430px] min-h-screen bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        {/* Status bar and header */}
        <div className="sticky top-0 z-50">
          <SectionComponentNodeSubsection />
        </div>
        
        {/* Main content container with proper spacing */}
        <div className="px-4 pb-20">
          {/* Red rectangle box - moved above carousel */}
          <div className="mb-4 mt-4">
            <ContainerSubsection />
          </div>

          {/* ORDER NOW carousel section */}
          <div className="mb-6">
            <SlidersSubsection />
          </div>
          
          {/* Carousel indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {carouselDots.map((dot, index) => (
              <div key={`dot-${index}`} className={dot.className} />
            ))}
          </div>

          {/* FOR YOU section */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-6">
              <Separator className="flex-1 max-w-[120px]" />
              <span className="mx-4 font-medium text-sm text-gray-600 whitespace-nowrap">FOR YOU</span>
              <Separator className="flex-1 max-w-[120px]" />
            </div>
            
            <Frame1Subsection />
          </div>

          {/* WHAT'S ON YOUR MIND section */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-6">
              <Separator className="flex-1 max-w-[100px]" />
              <span className="mx-4 font-medium text-sm text-gray-600 whitespace-nowrap text-center">
                WHAT'S ON YOUR MIND
              </span>
              <Separator className="flex-1 max-w-[100px]" />
            </div>
            
            <FoodOptionaWrapperSubsection />
          </div>

          {/* TOP RATED OFFERS section */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="font-bold text-sm tracking-wider text-gray-800 whitespace-nowrap">
                TOP RATED OFFERS FOR YOU
              </span>
              <Separator className="flex-1 ml-4" />
            </div>
            
            <OfferSectionSubsection />
          </div>

          {/* Restaurants Near You section */}
          <div className="mb-6">
            <h2 className="font-bold text-xl text-center mb-4 text-gray-800">
              Restaurants Near You
            </h2>
            
            <div className="mb-6">
              <SortSubsection />
            </div>
          </div>

          {/* Restaurant cards list */}
          <div className="space-y-4">
            <Frame2Subsection />
            <Frame3Subsection />
            <Frame4Subsection />
            <Frame5Subsection />
            <Frame6Subsection />
            <FrameSubsection />
            <DivWrapperSubsection />
          </div>
        </div>

        {/* Bottom navigation - fixed at bottom */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] bg-white border-t border-gray-200 rounded-b-3xl">
          <FrameWrapperSubsection />
          
          {/* Home indicator */}
          <div className="flex justify-center py-2">
            <div className="w-[134px] h-[5px] bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};