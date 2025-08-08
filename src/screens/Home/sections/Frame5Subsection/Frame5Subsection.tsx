import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame5Subsection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/restaurant/4");
  };

  // Delivery service logos data
  const deliveryServices = [
    { alt: "Talabat logo" },
    { alt: "Careem logo", className: "object-cover" },
    { alt: "Noon logo" },
  ];

  return (
    <Card 
      className="w-full max-w-[383px] rounded-[15px_15px_16.54px_16.54px] shadow-[0px_4.76px_4.76px_#0000004c] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      <div className="rounded-[15px_15px_0px_0px] [background:url(..//frame-45-7.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,245,245,1)_0%,rgba(245,245,245,1)_100%)] relative w-full h-[193px] overflow-hidden">
        <div className="flex items-start gap-[7.82px] absolute top-0 left-0">
          <div className="relative w-[168.99px] h-[40.46px]">
            <Badge className="relative w-[169px] h-10 bg-[#ffcc17] rounded-[7.82px] p-0 hover:bg-[#ffcc17] hover:text-themewhite">
              <img className="w-[41px] h-10" alt="Noon logo" src="/img_noon_logo_2.png" />
              <div className="flex items-center h-[27px] ml-[19px]">
                <img 
                  className="w-4 h-4" 
                  alt="Tag" 
                  src="/img_icon_white_a700.svg"
                />
                <div className="ml-1 [font-family:'Source_Sans_Pro',Helvetica] font-bold text-themewhite text-[21.5px] tracking-[0] leading-[25.8px] whitespace-nowrap hover:text-themewhite pointer-events-none">
                  20% off
                </div>
              </div>
            </Badge>
          </div>
        </div>

        <img
          className="absolute w-[25px] h-[46px] -top-1 left-[180px]"
          alt="Vector"
          src="/vector-6.svg"
        />
      </div>

      <CardContent className="p-0">
        <div className="min-h-[110px] relative w-full">
          <div className="relative w-[353px] h-[92px] left-[18px]">
            <div className="absolute w-[353px] h-[89px] top-0 left-0">
              <div className="absolute w-[348px] h-[63px] top-0 left-0">
                <div className="flex w-[346px] items-center justify-center gap-[23.89px] left-0 h-[41px] absolute top-0">
                  <h3 className="relative flex-1 [font-family:'Nunito',Helvetica] font-medium text-[#000000] text-[28.5px] tracking-[0] leading-[34.2px]">
                    Pasta Al Manal
                  </h3>
                </div>

                <p className="top-[42px] left-px text-[14.3px] absolute [font-family:'Poppins',Helvetica] font-medium text-[#636363] tracking-[0] leading-[normal]">
                  North Indian
                </p>
              </div>

              <div className="top-[53px] left-[266px] absolute w-[87px] h-9">
                <div className="relative h-9">
                  <img
                    className="absolute w-9 h-9 top-0 left-0"
                    alt="Talabat logo"
                    src="/img_talabat_logo_2.png"
                  />
                  <img
                    className="absolute w-9 h-9 top-0 left-[26px] object-cover"
                    alt="Careem logo"
                    src="/img_careem_logo_1.png"
                  />
                  <img
                    className="absolute w-9 h-9 top-0 left-[52px]"
                    alt="Noon logo"
                    src="/img_noon_logo_2.png"
                  />
                </div>
              </div>
            </div>

            <div className="absolute w-[215px] h-6 top-[69px] left-0">
              <div className="justify-between flex w-[89px] items-center absolute top-1.5 left-0">
                <div className="gap-[6.67px] inline-flex items-center justify-center relative flex-[0_0_auto]">
                  <img
                    className="w-[18.56px] relative h-[12.95px]"
                    alt="Subtract"
                    src="/subtract.svg"
                  />

                  <div className="relative w-[22.87px] h-[13.34px] mt-[-0.95px] [font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] whitespace-nowrap tracking-[0] leading-[normal]">
                    Free
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-[3.81px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[12.39px] h-[11.83px]"
                    alt="Vector"
                    src="/vector-9.svg"
                  />

                  <div className="relative w-[17.15px] h-[13.34px] mt-[-0.95px] [font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] tracking-[0] leading-[normal] whitespace-nowrap">
                    4.8
                  </div>
                </div>
              </div>

              <div className="absolute top-2 left-[118px] [font-family:'Poppins',Helvetica] font-medium text-[#828282] text-[6.6px] tracking-[0] leading-[normal]">
                30-45 mins.
              </div>

              <img
                className="absolute w-[17px] h-[17px] top-[5px] left-[100px]"
                alt="Icons"
                src="/icons.svg"
              />

              <img
                className="absolute w-px h-[13px] top-[7px] left-[95px]"
                alt="Line"
                src="/line-3.svg"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
