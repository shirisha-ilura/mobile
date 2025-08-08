import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share, Star, Plus, Minus, Clock, MapPin } from "lucide-react";
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
    restaurantRating: "4.8",
    restaurantReviews: "2.1k",
    deliveryTime: "30-45 mins",
    isBestseller: true,
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
    },
    ingredients: [
      "Basmati Rice", "Chicken", "Onions", "Yogurt", "Ginger-Garlic Paste", 
      "Biryani Masala", "Saffron", "Mint Leaves", "Coriander Leaves"
    ]
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

  const getSavings = () => {
    return getOriginalPrice() - getCurrentPrice();
  };

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

        {/* Header with food image */}
        <div className="relative h-[320px] overflow-hidden">
          <img
            src={foodItem.image}
            alt={foodItem.name}
            className="w-full h-full object-cover"
          />
          
          {/* Header overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
          
          {/* Top navigation */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-10 h-10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-10 h-10"
              >
                <Share className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-10 h-10"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Veg/Non-veg indicator */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <div className={`w-7 h-7 rounded-sm border-2 flex items-center justify-center bg-white ${
              foodItem.isVeg 
                ? "border-green-600" 
                : "border-red-600"
            }`}>
              <div className={`w-4 h-4 rounded-full ${
                foodItem.isVeg ? "bg-green-600" : "bg-red-600"
              }`} />
            </div>
          </div>

          {/* Bestseller badge */}
          {foodItem.isBestseller && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                ⭐ Bestseller
              </Badge>
            </div>
          )}

          {/* Food item info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">{foodItem.name}</h1>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{foodItem.rating}</span>
                <span className="text-sm opacity-80">({foodItem.reviewCount})</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 opacity-80" />
                <span className="opacity-80">{foodItem.prepTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">₹{getCurrentPrice()}</span>
                {getSavings() > 0 && (
                  <span className="text-lg text-gray-300 line-through">₹{getOriginalPrice()}</span>
                )}
              </div>
              {getSavings() > 0 && (
                <Badge className="bg-green-500 hover:bg-green-500 text-white px-2 py-1 text-xs">
                  Save ₹{getSavings()}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-32">
          {/* Restaurant info */}
          <div className="py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">{foodItem.restaurant}</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{foodItem.restaurantRating}</span>
                    <span className="text-sm text-gray-500">({foodItem.restaurantReviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="text-sm text-gray-500">{foodItem.deliveryTime}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                View Restaurant
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="py-6">
            <h3 className="font-semibold text-lg mb-3">About this dish</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {foodItem.description}
            </p>

            {/* Nutrition info */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Calories</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.calories}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Protein</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.protein}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Carbs</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.carbs}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 mb-1">Fat</p>
                <p className="font-semibold text-sm">{foodItem.nutritionInfo.fat}</p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {foodItem.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="outline" className="text-xs px-3 py-1">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Size selection */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Choose Size</h3>
            <div className="space-y-3">
              {foodItem.sizes.map((size) => (
                <Card 
                  key={size.name}
                  className={`cursor-pointer transition-all border-2 ${
                    selectedSize === size.name 
                      ? "border-red-600 bg-red-50 shadow-md" 
                      : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }`}
                  onClick={() => handleSizeSelect(size.name)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedSize === size.name 
                            ? "border-red-600 bg-red-600" 
                            : "border-gray-300"
                        }`}>
                          {selectedSize === size.name && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">{size.name}</span>
                          {size.name === "Family Pack" && (
                            <p className="text-xs text-gray-500">Serves 4-5 people</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-800">₹{size.price}</span>
                          <span className="text-sm text-gray-500 line-through">₹{size.originalPrice}</span>
                        </div>
                        <p className="text-xs text-green-600">
                          Save ₹{size.originalPrice - size.price}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Add-ons */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Add-ons</h3>
            <p className="text-sm text-gray-600 mb-4">Make it even more delicious</p>
            <div className="space-y-3">
              {foodItem.addons.map((addon) => (
                <Card 
                  key={addon.name}
                  className={`cursor-pointer transition-all border ${
                    selectedAddons.includes(addon.name)
                      ? "border-red-600 bg-red-50 shadow-sm" 
                      : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }`}
                  onClick={() => handleAddonToggle(addon.name)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedAddons.includes(addon.name)
                            ? "border-red-600 bg-red-600" 
                            : "border-gray-300"
                        }`}>
                          {selectedAddons.includes(addon.name) && (
                            <div className="text-white text-xs">✓</div>
                          )}
                        </div>
                        <span className="font-medium text-gray-800">{addon.name}</span>
                      </div>
                      <span className="font-semibold text-gray-800">+₹{addon.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Quantity selector */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Quantity</h3>
            <div className="flex items-center justify-center gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="h-12 w-12 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-50 disabled:border-gray-300 disabled:text-gray-400"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-800">{quantity}</span>
                <p className="text-sm text-gray-500">item{quantity > 1 ? 's' : ''}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
                className="h-12 w-12 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-50"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Add to Cart Bar */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] bg-white border-t border-gray-200 rounded-b-3xl shadow-lg">
          <div className="p-4">
            {/* Price summary */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-800">₹{getCurrentPrice()}</span>
                  {getSavings() > 0 && (
                    <span className="text-lg text-gray-500 line-through">₹{getOriginalPrice()}</span>
                  )}
                </div>
              </div>
              {getSavings() > 0 && (
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1">
                  You save ₹{getSavings()}
                </Badge>
              )}
            </div>
            
            {/* Add to cart button */}
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
              Add {quantity} to Cart • ₹{getCurrentPrice()}
            </Button>
          </div>
          
          {/* Home indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-[134px] h-[5px] bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};