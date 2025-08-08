import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share, Star, MapPin, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Input } from "../../components/ui/input";

export const RestaurantDetails = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState("Recommended");
  const [cartItems, setCartItems] = useState<{[key: number]: number}>({});

  const handleBack = () => {
    navigate(-1);
  };

  const addToCart = (itemId: number) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const updateCartQuantity = (itemId: number, change: number) => {
    setCartItems(prev => {
      const newQuantity = (prev[itemId] || 0) + change;
      if (newQuantity <= 0) {
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newQuantity };
    });
  };

  // Categories for horizontal scroll
  const categories = [
    "Recommended",
    "Starters", 
    "Main Course",
    "Biryani",
    "Desserts",
    "Beverages",
    "Chinese",
    "South Indian"
  ];

  // Menu items exactly as shown in Figma
  const menuItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice cooked with tender chicken pieces and fragrant spices",
      price: 299,
      originalPrice: 399,
      image: "/biryani.webp",
      isVeg: false,
      rating: "4.5",
      reviewCount: "156",
      category: "Recommended",
      isBestseller: true,
      isCustomizable: true
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      description: "Rich and creamy paneer curry with butter and aromatic spices",
      price: 249,
      originalPrice: 299,
      image: "/chicken.webp",
      isVeg: true,
      rating: "4.3",
      reviewCount: "89",
      category: "Recommended",
      isBestseller: false,
      isCustomizable: true
    },
    {
      id: 3,
      name: "Chicken Tikka",
      description: "Grilled chicken marinated in yogurt and spices",
      price: 199,
      originalPrice: 249,
      image: "/grilledchicken.webp",
      isVeg: false,
      rating: "4.6",
      reviewCount: "203",
      category: "Recommended",
      isBestseller: true,
      isCustomizable: false
    },
    {
      id: 4,
      name: "Dal Makhani",
      description: "Creamy black lentils cooked with butter and cream",
      price: 179,
      originalPrice: 229,
      image: "/chicken.webp",
      isVeg: true,
      rating: "4.4",
      reviewCount: "124",
      category: "Recommended",
      isBestseller: false,
      isCustomizable: true
    },
    {
      id: 5,
      name: "Mutton Biryani",
      description: "Tender mutton pieces cooked with basmati rice",
      price: 399,
      originalPrice: 499,
      image: "/biryani.webp",
      isVeg: false,
      rating: "4.7",
      reviewCount: "267",
      category: "Biryani",
      isBestseller: true,
      isCustomizable: true
    }
  ];

  const filteredItems = activeCategory === "Recommended" 
    ? menuItems.filter(item => item.category === "Recommended")
    : menuItems.filter(item => item.category === activeCategory);

  const totalCartItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  const totalCartValue = Object.entries(cartItems).reduce((sum, [itemId, qty]) => {
    const item = menuItems.find(i => i.id === parseInt(itemId));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="w-[430px] max-w-[430px] min-h-screen bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        
        {/* Status Bar */}
        <div className="flex w-full h-[22px] items-center justify-between px-[15.45px] py-0 bg-white">
          <div className="[font-family:'Lato',Helvetica] font-black text-black text-[15.4px] text-center">
            9:41
          </div>
          <img
            className="relative flex-[0_0_auto]"
            alt="Status icons"
            src="/frame-1.svg"
          />
        </div>

        {/* Header Navigation */}
        <div className="bg-white px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="hover:bg-gray-100 text-gray-800 rounded-full w-10 h-10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div>
                <h1 className="text-xl font-bold text-gray-900">KFC</h1>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span>Non vegetarian, Asian, Fast Food</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                  <MapPin className="h-3 w-3" />
                  <span>Karapitiya</span>
                  <span>|</span>
                  <span>4.5 km</span>
                  <span className="text-orange-500">⭐</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 text-gray-800 rounded-full w-10 h-10"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 text-gray-800 rounded-full w-10 h-10"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 text-gray-800 rounded-full w-10 h-10"
              >
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Restaurant Image */}
        <div className="relative h-[200px] overflow-hidden">
          <img
            src="/frame-45-5.png"
            alt="KFC Restaurant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Restaurant Stats */}
        <div className="bg-white px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Rating */}
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <Star className="h-4 w-4 fill-black text-black" />
                  <span className="text-lg font-bold text-black">4.0</span>
                  <span className="text-lg font-bold text-black">›</span>
                </div>
                <p className="text-xs text-gray-600">100+ ratings</p>
              </div>

              {/* Delivery Time */}
              <div className="text-center">
                <div className="text-lg font-bold text-black mb-1">30 mins</div>
                <p className="text-xs text-gray-600">Delivery Time</p>
              </div>

              {/* Availability */}
              <div className="text-center">
                <div className="text-lg font-bold text-black mb-1">Until 10 PM</div>
                <p className="text-xs text-gray-600">Availability</p>
              </div>
            </div>

            {/* Check Offers Button */}
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium">
              Check Offers
            </Button>
          </div>
          
          {/* Dotted separator */}
          <div className="border-b border-dotted border-gray-300 my-4"></div>
        </div>

        {/* Restaurant Details Card */}
        {/* Offers Section */}
        <div className="px-4 pb-4 bg-white">
          <div className="flex gap-3 overflow-x-auto">
            {/* First Offer */}
            <div className="flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 min-w-[280px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm font-bold">%</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-black">60% OFF UPTO Rs.2000</div>
                  <div className="text-sm text-gray-600">USE TRYNEW | ABOVE Rs.2000</div>
                </div>
              </div>
            </div>

            {/* Second Offer */}
            <div className="flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 min-w-[280px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm font-bold">%</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-black">50% OFF + Rs.200 CASHBACK</div>
                  <div className="text-sm text-gray-600">USE WELCOME50 | New Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3 bg-gray-50 border-y border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for dishes..."
              className="pl-10 bg-white border-gray-300 rounded-lg h-10"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-40">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 py-4 pb-32 bg-white">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">{activeCategory}</h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {filteredItems.length} items
            </span>
          </div>

          <div className="space-y-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="relative">
                <div className="flex gap-4">
                  {/* Item Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      {/* Veg/Non-veg indicator */}
                      <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center flex-none mt-0.5 ${
                        item.isVeg 
                          ? "border-green-600 bg-white" 
                          : "border-red-600 bg-white"
                      }`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${
                          item.isVeg ? "bg-green-600" : "bg-red-600"
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Link to={`/restaurant/${id}/item/${item.id}`}>
                            <h4 className="font-semibold text-base text-gray-800 hover:text-red-600 transition-colors cursor-pointer">
                              {item.name}
                            </h4>
                          </Link>
                          {item.isBestseller && (
  <div className="flex items-center space-x-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FBBF24" // Tailwind yellow-400
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.162L12 18.896l-7.334 3.858 1.4-8.162L.132 9.21l8.2-1.192z" />
    </svg>
    <span className="text-gray-700 font-medium text-sm">Bestseller</span>
  </div>
)}

                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-lg text-gray-800">₹{item.price}</span>
                      {item.originalPrice > item.price && (
                        <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                      )}
                      {item.originalPrice > item.price && (
                        <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5 hover:bg-green-100">
                          {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                        </Badge>
                      )}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                      <span className="text-sm text-gray-500">({item.reviewCount})</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Customizable tag */}
                    {item.isCustomizable && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span>🔧</span>
                        <span>Customisable</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Food Image with Add Button */}
                  <div className="relative w-[140px] h-[140px] flex-none">
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl border border-gray-200"
                      />
                      
                      {/* Add Button or Quantity Controls */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        {!cartItems[item.id] ? (
                          <Button
  size="sm"
  onClick={() => addToCart(item.id)}
  className="flex items-center justify-center gap-1 bg-white text-green-700 font-bold text-base px-6 py-2 border border-gray-300 rounded-xl shadow-md hover:shadow-md hover:text-green-700 focus:outline-none focus:ring-0 active:shadow-md"
>
  ADD <span className="text-green-700 text-xl font-bold">+</span>
</Button>



                        ) : (
                          <div className="flex items-center gap-2 bg-white border-2 border-red-600 rounded-lg shadow-lg">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => updateCartQuantity(item.id, -1)}
                              className="text-red-600 hover:bg-red-50 px-2 py-1 h-8 w-8"
                            >
                              -
                            </Button>
                            <span className="font-bold text-red-600 min-w-[20px] text-center">
                              {cartItems[item.id]}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => updateCartQuantity(item.id, 1)}
                              className="text-red-600 hover:bg-red-50 px-2 py-1 h-8 w-8"
                            >
                              +
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {filteredItems.indexOf(item) < filteredItems.length - 1 && (
                  <Separator className="mt-6" />
                )}
              </div>
            ))}
          </div>

          {/* Show message if no items in category */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No items found</p>
              <p className="text-gray-400 text-sm">Try searching in a different category</p>
            </div>
          )}
        </div>

        {/* Bottom Cart Bar */}
        {totalCartItems > 0 && (
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] bg-white border-t border-gray-200 rounded-b-3xl shadow-lg">
            <div className="px-4 py-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{totalCartItems}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {totalCartItems} item{totalCartItems > 1 ? 's' : ''} added
                    </p>
                    <p className="text-xs text-gray-500">Extra charges may apply</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">₹{totalCartValue}</p>
                  <p className="text-xs text-green-600">You saved ₹{
                    Object.entries(cartItems).reduce((savings, [itemId, qty]) => {
                      const item = menuItems.find(i => i.id === parseInt(itemId));
                      return savings + (item ? (item.originalPrice - item.price) * qty : 0);
                    }, 0)
                  }</p>
                </div>
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all">
                View Cart
              </Button>
            </div>
            
            {/* Home indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-[134px] h-[5px] bg-black rounded-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};