import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Heart, Star, Clock } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Offers = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  // Mock offers data
  const featuredOffers = [
    {
      id: 1,
      title: "FLAT DEAL",
      discount: "₹100 OFF",
      condition: "ABOVE ₹399",
      image: "/one.webp",
      brandLogo: "/img_talabat_logo_2.png",
      backgroundColor: "bg-red-600"
    },
    {
      id: 2,
      title: "MEGA DEAL",
      discount: "₹150 OFF",
      condition: "ABOVE ₹499",
      image: "/pizzaone.webp",
      brandLogo: "/img_careem_logo_1.png",
      backgroundColor: "bg-green-600"
    },
    {
      id: 3,
      title: "SUPER DEAL",
      discount: "₹200 OFF",
      condition: "ABOVE ₹599",
      image: "/burger.jpg",
      brandLogo: "/img_noon_logo_2.png",
      backgroundColor: "bg-yellow-600"
    }
  ];

  const restaurantOffers = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: "4.5",
      deliveryTime: "25-30 mins",
      offer: "40% OFF",
      offerDetails: "Up to ₹120",
      image: "/pizza.avif",
      isVeg: false
    },
    {
      id: 2,
      name: "Burger King",
      cuisine: "Fast Food",
      rating: "4.2",
      deliveryTime: "20-25 mins",
      offer: "50% OFF",
      offerDetails: "Up to ₹100",
      image: "/burger.jpg",
      isVeg: false
    },
    {
      id: 3,
      name: "Biryani House",
      cuisine: "North Indian",
      rating: "4.6",
      deliveryTime: "30-35 mins",
      offer: "30% OFF",
      offerDetails: "Up to ₹150",
      image: "/biryani.webp",
      isVeg: false
    },
    {
      id: 4,
      name: "Sweet Treats",
      cuisine: "Desserts",
      rating: "4.3",
      deliveryTime: "15-20 mins",
      offer: "25% OFF",
      offerDetails: "Up to ₹80",
      image: "/cake.webp",
      isVeg: true
    }
  ];

  const categories = [
    { name: "All Offers", isActive: true },
    { name: "Restaurant", isActive: false },
    { name: "Food", isActive: false },
    { name: "Grocery", isActive: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="w-[430px] max-w-[430px] min-h-screen bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <h1 className="text-xl font-bold text-gray-800">Offers</h1>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for offers, restaurants..."
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="px-4 pb-4">
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={category.isActive ? "default" : "outline"}
                  className={`flex-none px-4 py-2 rounded-full ${
                    category.isActive 
                      ? "bg-red-600 hover:bg-red-700 text-white" 
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-24">
          {/* Featured Offers */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Featured Offers</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {featuredOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="relative w-[200px] h-[280px] flex-none rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    className="w-full h-full object-cover"
                    alt="Offer"
                    src={offer.image}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Top-left brand badge */}
                  <div className={`absolute top-0 left-0 flex items-center ${offer.backgroundColor} rounded-br-2xl pr-2 pl-1 py-1`}>
                    <img
                      src={offer.brandLogo}
                      alt="Brand Logo"
                      className="w-6 h-6 object-contain mr-1"
                    />
                    <div className="text-white text-xs font-semibold">
                      Free Delivery
                    </div>
                  </div>

                  {/* Top-right heart icon */}
                  <div className="absolute top-2 right-2 p-1">
                    <Heart className="h-4 w-4 text-white" />
                  </div>

                  {/* Bottom text content */}
                  <div className="absolute bottom-4 left-3 text-white">
                    <p className="text-sm font-semibold tracking-wide">{offer.title}</p>
                    <p className="text-2xl font-bold tracking-wider">{offer.discount}</p>
                    <p className="text-sm font-medium tracking-wide">{offer.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Restaurant Offers */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Restaurant Offers</h2>
            <div className="space-y-4">
              {restaurantOffers.map((restaurant) => (
                <Card key={restaurant.id} className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="relative w-[120px] h-[120px] flex-none">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                        
                        {/* Offer badge */}
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {restaurant.offer}
                        </div>
                        
                        {/* Veg/Non-veg indicator */}
                        <div className="absolute bottom-2 left-2">
                          <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${
                            restaurant.isVeg 
                              ? "border-green-600 bg-white" 
                              : "border-red-600 bg-white"
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              restaurant.isVeg ? "bg-green-600" : "bg-red-600"
                            }`} />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-base text-gray-800">{restaurant.name}</h3>
                            <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                          </div>
                          <Heart className="h-4 w-4 text-gray-400" />
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{restaurant.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-gray-500" />
                            <span className="text-sm text-gray-500">{restaurant.deliveryTime}</span>
                          </div>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                          <p className="text-sm font-semibold text-orange-600">{restaurant.offerDetails}</p>
                          <p className="text-xs text-gray-600">Use code SAVE{restaurant.offer.replace(/[^0-9]/g, '')}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* More Offers Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">More Offers</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">Free Delivery</h3>
                  <p className="text-xs text-gray-600">On orders above ₹199</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">Cashback</h3>
                  <p className="text-xs text-gray-600">Up to 20% cashback</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom navigation space */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};