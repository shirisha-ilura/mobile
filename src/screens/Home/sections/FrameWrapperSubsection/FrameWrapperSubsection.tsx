import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperSubsection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleOrdersClick = () => {
    navigate("/orders");
  };

  const navigationItems = [
    {
      name: "Home",
      isActive: true,
      onClick: () => navigate("/"),
      icon: (
        <div className="relative w-[23px] h-[27px]">
          <img
            className="absolute w-[23px] h-[25px] top-0 left-0"
            alt="Home icon"
            src="/vector-4.svg"
          />
          <img
            className="absolute w-[9px] h-2.5 top-4 left-[7px]"
            alt="Home icon detail"
            src="/vector-1.svg"
          />
        </div>
      ),
    },
    {
      name: "Offers",
      isActive: false,
      onClick: () => {},
      icon: (
        <img
          className="w-[29px] h-[29px]"
          alt="Offers icon"
          src="/favourite-things---iconsvg-co.svg"
        />
      ),
    },
    {
      name: "Orders",
      isActive: false,
      onClick: handleOrdersClick,
      icon: (
        <div className="relative w-7 h-[26px]">
          <img
            className="absolute w-2.5 h-[9px] top-0.5 left-[3px]"
            alt="Orders icon part 1"
            src="/vector-2.svg"
          />
          <img
            className="absolute w-2.5 h-[9px] top-0.5 left-4"
            alt="Orders icon part 2"
            src="/vector-2.svg"
          />
          <img
            className="absolute w-2.5 h-[9px] top-3.5 left-4"
            alt="Orders icon part 3"
            src="/vector-2.svg"
          />
          <img
            className="absolute w-2.5 h-[9px] top-3.5 left-[3px]"
            alt="Orders icon part 4"
            src="/vector-2.svg"
          />
        </div>
      ),
    },
    {
      name: "Favourites",
      isActive: false,
      onClick: () => {},
      icon: (
        <div className="w-[26px] h-6 bg-[url(/vector-8.svg)] bg-[100%_100%]" />
      ),
    },
    {
      name: "Profiles",
      isActive: false,
      onClick: () => {},
      icon: (
        <div className="relative w-[29px] h-[27px]">
          <img
            className="absolute w-[21px] h-[9px] top-4 left-1"
            alt="Profile icon part 1"
            src="/vector-5.svg"
          />
          <img
            className="absolute w-3 h-[11px] top-0.5 left-[9px]"
            alt="Profile icon part 2"
            src="/vector-11.svg"
          />
        </div>
      ),
    },
  ];

  return (
    <Card className="w-full border-none shadow-none bg-white">
      <CardContent className="p-0 px-4 py-3">
        <nav className="w-full">
          <ul className="flex items-center justify-between">
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
                onClick={item.onClick}
              >
                <div className="flex justify-center items-center h-7">
                  {item.icon}
                </div>
                <span
                  className={`font-medium text-xs ${
                    item.isActive ? "text-red-600" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
};
