import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share, Star, Clock, MapPin } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";

export const RestaurantDetails = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock restaurant data - in a real app, this would come from an API
  const restaurant = {
    id: id || "1",
    name: "Pasta Al Manal",
    cuisine: "North Indian",
    rating: "4.8",
    deliveryTime: "30-45 mins",
    deliveryFee: "Free",
    image: "/frame-45-5.png",
    address: "Sector 18, Noida",
    distance: "2.1 km",
    offers: [
      { text: "20% OFF", subtext: "Use code SAVE20" },
      { text: "Free Delivery", subtext: "On orders above ₹199" }
    ],
    categories: [
      "Recommended",
      "Starters",
      "Main Course",
      "Biryani",
      "Desserts",
      "Beverages"
    ],
    menuItems: [
      {
        id: 1,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice cooked with tender chicken pieces",
        price: "₹299",
        originalPrice: "₹399",
        image: "/biryani.webp",
        isVeg: false,
        rating: "4.5",
        category: "Biryani"
      },
      {
        id: 2,
        name: "Paneer Butter Masala",
        description: "Rich and creamy paneer curry with butter and spices",
        price: "₹249",
        originalPrice: "₹299",
        image: "/chicken.webp",
        isVeg: true,
        rating: "4.3",
        category: "Main Course"
      },
      {
        id: 3,
        name: "Chicken Tikka",
        description: "Grilled chicken marinated in yogurt and spices",
        price: "₹199",
        originalPrice: "₹249",
        image: "/grilledchicken.webp",
        isVeg: false,
        rating: "4.6",
        category: "Starters"
      }
    ]
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="w-[430px] max-w-[430px] min-h-screen bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        {/* Header with restaurant image */}
        <div className="relative h-[250px] overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          
          {/* Header overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Top navigation */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              >
                <Share className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Restaurant info overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h1 className="text-2xl font-bold mb-1">{restaurant.name}</h1>
            <p className="text-sm opacity-90 mb-2">{restaurant.cuisine}</p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{restaurant.distance}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-20">
          {/* Delivery info */}
          <Card className="mt-4 border-none shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Delivery Fee</p>
                  <p className="text-green-600 font-semibold">{restaurant.deliveryFee}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">Delivery Time</p>
                  <p className="text-gray-600">{restaurant.deliveryTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Offers */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-3">Offers</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {restaurant.offers.map((offer, index) => (
                <Card key={index} className="flex-none w-[200px] border border-orange-200 bg-orange-50">
                  <CardContent className="p-3">
                    <p className="font-semibold text-orange-600 text-sm">{offer.text}</p>
                    <p className="text-xs text-gray-600 mt-1">{offer.subtext}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Menu Categories */}
          <div className="mt-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {restaurant.categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`flex-none px-4 py-2 rounded-full ${
                    index === 0 
                      ? "bg-red-600 hover:bg-red-700 text-white" 
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Menu Items */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Recommended</h3>
            
            {restaurant.menuItems.map((item) => (
              <Link key={item.id} to={`/restaurant/${restaurant.id}/item/${item.id}`}>
                <Card className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="flex-1 p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-sm border-2 flex-none mt-1 ${
                          item.isVeg 
                            ? "border-green-600 bg-green-100" 
                            : "border-red-600 bg-red-100"
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full mx-auto mt-0.5 ${
                            item.isVeg ? "bg-green-600" : "bg-red-600"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base">{item.name}</h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg">{item.price}</span>
                        <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                      </div>
                    </div>
                    
                    <div className="relative w-[120px] h-[120px] p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border border-red-600 text-red-600 hover:bg-red-50 px-6 py-1 text-sm font-semibold"
                      >
                        ADD
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Cart Bar */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] bg-white border-t border-gray-200 p-4 rounded-b-3xl">
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold">
            View Cart • ₹0
          </Button>
          
          {/* Home indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-[134px] h-[5px] bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};