import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share, Star, Plus, Minus } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";

export const FoodItemDetails = (): JSX.Element => {
  const navigate = useNavigate();
  const { restaurantId, itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Regular");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Mock food item data - in a real app, this would come from an API
  const foodItem = {
    id: itemId || "1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken pieces, fragrant spices, and garnished with fried onions and fresh herbs. Served with raita and shorba.",
    price: 299,
    originalPrice: 399,
    image: "/biryani.webp",
    isVeg: false,
    rating: "4.5",
    reviewCount: "1.2k",
    prepTime: "25-30 mins",
    restaurant: "Pasta Al Manal",
    sizes: [
      { name: "Regular", price: 299, originalPrice: 399 },
      { name: "Large", price: 399, originalPrice: 499 },
      { name: "Family Pack", price: 699, originalPrice: 899 }
    ],
    addons: [
      { name: "Extra Chicken", price: 99 },
      { name: "Boiled Egg", price: 25 },
      { name: "Extra Raita", price: 35 },
      { name: "Pickle", price: 15 },
      { name: "Papad", price: 20 }
    ],
    nutritionInfo: {
      calories: "650 kcal",
      protein: "35g",
      carbs: "75g",
      fat: "18g"
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddonToggle = (addon: string) => {
    setSelectedAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  const getCurrentPrice = () => {
    const sizePrice = foodItem.sizes.find(s => s.name === selectedSize)?.price || foodItem.price;
    const addonsPrice = selectedAddons.reduce((total, addon) => {
      const addonItem = foodItem.addons.find(a => a.name === addon);
      return total + (addonItem?.price || 0);
    }, 0);
    return (sizePrice + addonsPrice) * quantity;
  };

  const getOriginalPrice = () => {
    const sizeOriginalPrice = foodItem.sizes.find(s => s.name === selectedSize)?.originalPrice || foodItem.originalPrice;
    const addonsPrice = selectedAddons.reduce((total, addon) => {
      const addonItem = foodItem.addons.find(a => a.name === addon);
      return total + (addonItem?.price || 0);
    }, 0);
    return (sizeOriginalPrice + addonsPrice) * quantity;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="w-[430px] max-w-[430px] min-h-screen bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        {/* Header with food image */}
        <div className="relative h-[300px] overflow-hidden">
          <img
            src={foodItem.image}
            alt={foodItem.name}
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

          {/* Veg/Non-veg indicator */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center ${
              foodItem.isVeg 
                ? "border-green-600 bg-white" 
                : "border-red-600 bg-white"
            }`}>
              <div className={`w-3 h-3 rounded-full ${
                foodItem.isVeg ? "bg-green-600" : "bg-red-600"
              }`} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-24">
          {/* Food item info */}
          <div className="py-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{foodItem.name}</h1>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-700">{foodItem.rating}</span>
                <span className="text-sm text-gray-500">({foodItem.reviewCount} reviews)</span>
              </div>
              <span className="text-sm text-gray-500">{foodItem.prepTime}</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {foodItem.description}
            </p>

            {/* Nutrition info */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Calories</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.calories}</p>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Protein</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.protein}</p>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Carbs</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.carbs}</p>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Fat</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.fat}</p>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Size selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Choose Size</h3>
            <div className="space-y-2">
              {foodItem.sizes.map((size) => (
                <Card 
                  key={size.name}
                  className={`cursor-pointer transition-all ${
                    selectedSize === size.name 
                      ? "border-red-600 bg-red-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleSizeSelect(size.name)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedSize === size.name 
                            ? "border-red-600 bg-red-600" 
                            : "border-gray-300"
                        }`}>
                          {selectedSize === size.name && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                          )}
                        </div>
                        <span className="font-medium">{size.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">₹{size.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₹{size.originalPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* Add-ons */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Add-ons</h3>
            <div className="space-y-2">
              {foodItem.addons.map((addon) => (
                <Card 
                  key={addon.name}
                  className={`cursor-pointer transition-all ${
                    selectedAddons.includes(addon.name)
                      ? "border-red-600 bg-red-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleAddonToggle(addon.name)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border ${
                          selectedAddons.includes(addon.name)
                            ? "border-red-600 bg-red-600" 
                            : "border-gray-300"
                        }`}>
                          {selectedAddons.includes(addon.name) && (
                            <div className="text-white text-xs flex items-center justify-center h-full">✓</div>
                          )}
                        </div>
                        <span className="font-medium">{addon.name}</span>
                      </div>
                      <span className="font-semibold">+₹{addon.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* Quantity selector */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="h-10 w-10 rounded-full"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold min-w-[2rem] text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
                className="h-10 w-10 rounded-full"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Add to Cart Bar */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] bg-white border-t border-gray-200 p-4 rounded-b-3xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-800">₹{getCurrentPrice()}</span>
                <span className="text-sm text-gray-500 line-through">₹{getOriginalPrice()}</span>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              Save ₹{getOriginalPrice() - getCurrentPrice()}
            </Badge>
          </div>
          
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold">
            Add to Cart • {quantity} {quantity === 1 ? 'item' : 'items'}
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