import React from "react";

// Simplified data for offer cards
const offerCards = [
  {
    id: 1,
    image: "one.webp",
    brandLogoUrl: "img_talabat_logo_2.png", // Replace with your logo image URL
    deal: "FLAT DEAL",
    discount: "₹100 OFF",
    condition: "ABOVE ₹399",
  },
  {
    id: 2,
    image: "breads.jpg",
    brandLogoUrl: "img_talabat_logo_2.png", // Replace with your logo image URL
    deal: "FLAT DEAL",
    discount: "₹100 OFF",
    condition: "ABOVE ₹399",
  },
  {
    id: 3,
    image: "pizzaone.webp",
    brandLogoUrl: "img_talabat_logo_2.png", // Replace with your logo image URL
    deal: "FLAT DEAL",
    discount: "₹100 OFF",
    condition: "ABOVE ₹399",
  },
  {
    id: 4,
    image: "burger.jpg",
    brandLogoUrl: "img_talabat_logo_2.png", // Replace with your logo image URL
    deal: "FLAT DEAL",
    discount: "₹100 OFF",
    condition: "ABOVE ₹399",
  },
  {
    id: 5,
    image: "tacos.webp",
    brandLogoUrl: "img_talabat_logo_2.png", // Replace with your logo image URL
    deal: "FLAT DEAL",
    discount: "₹100 OFF",
    condition: "ABOVE ₹399",
  },
];

export const OfferSectionSubsection = (): JSX.Element => {
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
      <div className="w-full">
        {/* Horizontal scrolling container */}
        <div className="flex overflow-x-auto gap-4 pb-4 white-scrollbar">
          {offerCards.map((offer) => (
            <div
              key={offer.id}
              className="relative w-[180px] h-[240px] flex-none rounded-xl overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-full object-cover"
                alt="Offer"
                src={offer.image}
                onError={(e) => {
                  e.target.src = "https://placehold.co/180x240/f7f7f7/000000?text=No+Image";
                }}
              />
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Top-left brand and free delivery badges */}
              <div className="absolute top-0 left-0 flex items-center bg-red-600 rounded-br-2xl pr-2 pl-1 py-">
                <img
                  src={offer.brandLogoUrl}
                  alt="Brand Logo"
                  className="w-6 h-6 object-contain mr-1"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/24x24/ffffff/ff4500?text=t"; // Fallback
                  }}
                />
                <div className="text-white text-xs font-semibold">
                  Free Delivery
                </div>
              </div>

              {/* Top-right heart icon */}
              <div className="absolute top-2 right-2 p-1">
                {/* Heart icon as inline SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>

              {/* Bottom text content */}
              <div className="absolute bottom-4 left-2 text-white">
                <p className="text-sm font-semibold tracking-wide">{offer.deal}</p>
                <p className="text-2xl font-bold tracking-wider">{offer.discount}</p>
                <p className="text-sm font-medium tracking-wide">{offer.condition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
