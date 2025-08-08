import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Restaurant data for mapping
const restaurants = [
  {
    id: 1,
    name: "The Royal Grill",
    cuisine: "North Indian",
    rating: "4.5",
    deliveryTime: "30-45 mins.",
    discount: "40% OFF",
    discountDetails: "Upto ₹150 OFF",
    image: "/image2-1.svg",
  },
  {
    id: 2,
    name: "La Pinoz Pizza",
    cuisine: "North Indian",
    rating: "4.6",
    deliveryTime: "30-35 mins.",
    discount: "35% OFF",
    discountDetails: "Upto ₹125 OFF",
    image: "/image2.svg",
  },
  {
    id: 3,
    name: "Biryani House",
    cuisine: "North Indian",
    rating: "4.3",
    deliveryTime: "20-35 mins.",
    discount: "40% OFF",
    discountDetails: "Upto ₹150 OFF",
    image: "/image2-3.svg",
  },
  {
    id: 4,
    name: "Burger Bae",
    cuisine: "North Indian",
    rating: "3.6",
    deliveryTime: "30-35 mins.",
    discount: "20% OFF",
    discountDetails: "Upto ₹80 OFF",
    image: "/image2-2.svg",
  },
];

export const Frame1Subsection = (): JSX.Element => {
  // Split the restaurants array into two halves for two rows
  const row1 = restaurants.slice(0, 2);
  const row2 = restaurants.slice(2, 4);

  return (
    <>
      <style>
        {`
        /* Custom scrollbar styles for WebKit browsers (Chrome, Safari) */
        .white-scrollbar::-webkit-scrollbar {
          height: 8px;
          background-color: transparent;
        }

        .white-scrollbar::-webkit-scrollbar-thumb {
          background-color: #ffffff; /* White scrollbar thumb */
          border-radius: 4px;
          border: 1px solid #e5e5e5;
        }

        /* Hide the scrollbar arrows for WebKit browsers */
        .white-scrollbar::-webkit-scrollbar-button {
          display: none;
        }
        
        /* Custom scrollbar styles for Firefox */
        .white-scrollbar {
          scrollbar-color: #ffffff transparent; /* White thumb, transparent track */
          scrollbar-width: thin;
        }
      `}
      </style>
      <section className="w-full py-4">
        <div className="mb-6">
          <div className="flex justify-center gap-4">
            <Badge
              variant="outline"
              className="py-2 px-4 bg-red-50 text-red-600 border-red-300 rounded-full font-medium text-sm shadow-sm"
            >
              Recommended
            </Badge>

            <Badge
              variant="outline"
              className="py-2 px-4 bg-gray-50 text-gray-600 border-gray-300 rounded-full font-medium text-sm shadow-sm flex items-center gap-2"
            >
              <img
                className="w-[14px] h-[12px]"
                alt="Heart"
                src="/heart.svg"
              />
              Favourites
            </Badge>
          </div>
        </div>

        {/* Main container for horizontal scrolling with custom scrollbar */}
        <div className="overflow-x-auto pb-4 px-4 white-scrollbar">
          <div className="flex flex-col gap-4">
            {/* First row */}
            <div className="flex gap-4">
              {row1.map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className="w-[270px] flex-none h-[110px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex border border-gray-100"
                >
                  <CardContent className="p-0 flex w-full">
                    <div className="relative w-[110px] h-full overflow-hidden rounded-l-xl">
                      <img
                        className="w-full h-full object-cover"
                        alt={restaurant.name}
                        src={restaurant.image}
                      />
                      <div className="bg-gradient-to-br from-white/20 to-black/20 absolute w-full h-full top-0 left-0" />
                      <img
                        className="absolute w-4 h-4 top-2 left-2"
                        alt="Heart"
                        src="/heart.svg"
                      />
                      <div className="absolute bottom-2 left-2 text-xs">
                        <p className="font-semibold text-white">
                          {restaurant.discount}
                        </p>
                        <p className="font-medium text-white">
                          {restaurant.discountDetails}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-3 flex-1">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 leading-tight">
                          {restaurant.name}
                        </h3>
                        <p className="text-xs font-medium text-gray-500 mt-0.5">
                          {restaurant.cuisine}
                        </p>
                      </div>

                      <div className="flex items-center text-xs">
                        <div className="flex items-center">
                          <img
                            className="w-2.5 h-[9px]"
                            alt="Star"
                            src="/vector.svg"
                          />
                          <span className="ml-1 font-medium text-gray-700">
                            {restaurant.rating}
                          </span>
                        </div>

                        <img
                          className="mx-2 w-px h-3 bg-gray-300"
                          alt="Divider"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMSA3Ij4gIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjREREREREIiAvPjwvc3ZnPg=="
                        />

                        <div className="flex items-center">
                          <img
                            className="w-3.5 h-3.5"
                            alt="Clock"
                            src="/icons.svg"
                          />
                          <span className="ml-1 font-medium text-[10px] text-gray-500">
                            {restaurant.deliveryTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Second row */}
            <div className="flex gap-4">
              {row2.map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className="w-[270px] flex-none h-[110px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex border border-gray-100"
                >
                  <CardContent className="p-0 flex w-full">
                    <div className="relative w-[110px] h-full overflow-hidden rounded-l-xl">
                      <img
                        className="w-full h-full object-cover"
                        alt={restaurant.name}
                        src={restaurant.image}
                      />
                      <div className="bg-gradient-to-br from-white/20 to-black/20 absolute w-full h-full top-0 left-0" />
                      <img
                        className="absolute w-4 h-4 top-2 left-2"
                        alt="Heart"
                        src="/heart.svg"
                      />
                      <div className="absolute bottom-2 left-2 text-xs">
                        <p className="font-semibold text-white">
                          {restaurant.discount}
                        </p>
                        <p className="font-medium text-white">
                          {restaurant.discountDetails}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-3 flex-1">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 leading-tight">
                          {restaurant.name}
                        </h3>
                        <p className="text-xs font-medium text-gray-500 mt-0.5">
                          {restaurant.cuisine}
                        </p>
                      </div>

                      <div className="flex items-center text-xs">
                        <div className="flex items-center">
                          <img
                            className="w-2.5 h-[9px]"
                            alt="Star"
                            src="/vector.svg"
                          />
                          <span className="ml-1 font-medium text-gray-700">
                            {restaurant.rating}
                          </span>
                        </div>

                        <img
                          className="mx-2 w-px h-3 bg-gray-300"
                          alt="Divider"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMSA3Ij4gIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjREREREREIiAvPjwvc3ZnPg=="
                        />

                        <div className="flex items-center">
                          <img
                            className="w-3.5 h-3.5"
                            alt="Clock"
                            src="/icons.svg"
                          />
                          <span className="ml-1 font-medium text-[10px] text-gray-500">
                            {restaurant.deliveryTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
