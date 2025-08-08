import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivSubsection = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full max-w-[383px] rounded-[15px_15px_16.54px_16.54px] shadow-[0px_4.76px_4.76px_#0000004c] overflow-hidden">
      <div className="relative w-full h-[193px] rounded-[15px_15px_0px_0px] overflow-hidden [background:url(..//frame-45-5.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,245,245,1)_0%,rgba(245,245,245,1)_100%)]">
        <div className="flex w-[169px] items-start gap-[7.82px] absolute top-0 left-0">
          <div className="relative w-[168.9px] h-[40.44px]">
            <Badge className="relative w-[169px] h-10 bg-[#f17228] rounded-[7.82px] p-0">
              <img
                className="absolute w-10 h-10 top-0 left-0"
                alt="Talabat logo"
                src="/img_talabat_logo_2.png"
              />

              <div className="absolute w-[99px] h-[27px] top-[7px] left-[59px]">
                <div className="absolute w-[19px] h-[23px] top-1 left-0 [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-themewhite text-[17.6px] tracking-[0] leading-[21.1px] whitespace-nowrap">
                  tag
                </div>

                <div className="absolute top-0 left-[23px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-themewhite text-[21.5px] tracking-[0] leading-[25.8px] whitespace-nowrap">
                  20% off
                </div>
              </div>
            </Badge>
          </div>
        </div>

        <img
          className="absolute w-[25px] h-[33px] -top-px left-[180px]"
          alt="Vector"
          src="/vector-6.svg"
        />
      </div>

      <CardContent className="p-0">
        <div className="min-h-[110px] relative w-full">
          <div className="relative w-[354px] h-[91px] left-[18px]">
            <div className="absolute w-[354px] h-[91px] top-0 left-0">
              <div className="absolute w-[207px] h-[62px] top-0 left-0">
                <div className="flex w-[207px] items-center justify-center gap-[23.89px] left-0 h-[41px] absolute top-0">
                  <div className="relative flex-1 [font-family:'Nunito',Helvetica] font-medium text-[#000000] text-[28.5px] tracking-[0] leading-[34.2px]">
                    Pasta Al Manal
                  </div>
                </div>

                <div className="absolute top-[41px] left-0 [font-family:'Poppins',Helvetica] font-medium text-[#636363] text-[14.3px] tracking-[0] leading-[normal]">
                  North Indian
                </div>
              </div>

              <div className="top-[55px] left-[265px] absolute w-[87px] h-9">
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

            <div className="absolute w-[215px] h-6 top-[67px] left-0">
              <div className="flex w-[89px] items-center gap-[5.9px] absolute top-1.5 left-0">
                <div className="inline-flex items-center justify-center gap-[2.95px] relative flex-[0_0_auto]">
                  <img
                    className="w-[18.56px] relative h-[12.95px]"
                    alt="Subtract"
                    src="/subtract.svg"
                  />

                  <div className="relative w-[31px] h-[14.02px] mt-[-0.95px] [font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] tracking-[0] leading-[normal]">
                    7 AED
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-[3.81px] relative flex-[0_0_auto] mr-[-2.93px]">
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

              <div className="absolute top-[7px] left-[124px] [font-family:'Poppins',Helvetica] font-medium text-[#e50300] text-[6.6px] tracking-[0] leading-[normal]">
                50 mins
              </div>

              <div className="absolute w-[17px] h-[17px] top-1 left-[105px]">
                <div className="relative w-[13px] h-[15px] top-px left-0.5 bg-[url(/vector-14.svg)] bg-[100%_100%]">
                  <img
                    className="top-[5px] left-0.5 absolute w-2 h-2"
                    alt="Element"
                    src="/50mins.svg"
                  />
                </div>
              </div>

              <img
                className="absolute w-px h-[13px] top-1.5 left-[97px]"
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
