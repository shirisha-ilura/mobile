import React from "react";
import { Card } from "../../../../components/ui/card";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <div className="w-full h-[153px] bg-[#e50300] relative">
      <div className="w-[407px] h-[88px] absolute top-12 left-3.5">
        <img
          className="w-[23px] h-[22px] absolute top-[3px] left-0"
          alt="Location icon"
          src="/mdi-location.svg"
        />

        <div className="w-[401px] h-[45px] absolute top-[43px] left-0.5">
          <Card className="w-[399px] h-[45px] relative rounded-lg border border-solid border-[#bebebe] shadow-[0px_2px_4px_#0000001a] bg-white">
            <div className="absolute w-[83px] top-[15px] left-[43px] [font-family:'Lato',Helvetica] font-medium text-[#979797] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Search Cuisines
            </div>

            <img
              className="absolute w-6 h-[23px] top-2.5 left-[11px]"
              alt="Search icon"
              src="/icons-search.svg"
            />

            <img
              className="absolute w-[15px] h-3.5 top-3.5 left-[372px]"
              alt="Microphone icon"
              src="/iconoir-microphone.svg"
            />
          </Card>

          <img
            className="absolute w-px h-7 top-[9px] left-[360px] object-cover"
            alt="Divider"
            src="/divider.svg"
          />
        </div>

        <div className="w-60 h-[30px] absolute top-0 left-[23px]">
          <div className="w-60 h-[30px] absolute top-0 left-0">
            <div className="w-[45px] absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Hotel
            </div>

            <div className="w-60 absolute top-[17px] left-0 [font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              Hyatt Regency, Delhi Ring road ,Bhikaji...
            </div>
          </div>

          <img
            className="w-2 h-2 absolute top-2 left-[45px]"
            alt="Chevron right icon"
            src="/ic-round-chevron-right.svg"
          />
        </div>

        <div className="w-[46px] h-[22px] absolute top-[5px] left-[317px] bg-white rounded-[28.57px]">
          <div className="relative w-10 h-[17px] top-[3px] left-0.5">
            <div className="absolute top-0 left-0.5 bg-[linear-gradient(111deg,rgba(229,3,0,1)_0%,rgba(201,72,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Sinhala_MN-Bold',Helvetica] font-bold text-transparent text-[14.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              PLUS
            </div>

            <img
              className="w-[7px] h-[7px] absolute top-px left-0"
              alt="Ellipse"
              src="/ellipse-10.svg"
            />
          </div>
        </div>

        <div className="w-[31px] h-[29px] absolute top-0.5 left-[371px] bg-[url(/ellipse-61.svg)] bg-[100%_100%]">
          <div className="w-3 absolute top-0 left-[9px] [font-family:'Lateef',Helvetica] font-normal text-[#000000] text-[21.6px] tracking-[0] leading-[normal]">
            Y
          </div>
        </div>
      </div>

      <div className="flex w-full h-[22px] items-center justify-between px-[15.45px] py-0 absolute top-2 left-0">
        <div className="relative w-fit [font-family:'Lato',Helvetica] font-black text-white text-[15.4px] text-center tracking-[0] leading-[normal]">
          8:35
        </div>

        <img
          className="relative flex-[0_0_auto]"
          alt="Status icons"
          src="/frame-1.svg"
        />
      </div>
    </div>
  );
};
