import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Plus, Minus, Star } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Orders = (): JSX.Element => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 2,
    2: 3,
    3: 5
  });

  const handleBack = () => {
    navigate(-1);
  };

  const updateQuantity = (itemId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, prev[itemId] + change)
    }));
  };

  const orderItems = [
    {
      id: 1,
      name: "Gunpowder chicken wings",
      price: 225,
      originalPrice: 280,
      rating: 4.5,
      deliveryPrices: {
        talabat: { price: 225, originalPrice: 280 },
        careem: { price: 260, originalPrice: 280 },
        noon: { price: 270, originalPrice: 280 }
      }
    },
    {
      id: 2,
      name: "Lamb and halloumi kebabs",
      price: 324,
      originalPrice: 0,
      rating: 4.5,
      deliveryPrices: {
        talabat: { price: 225, originalPrice: 280 },
        careem: { price: 260, originalPrice: 280 },
        noon: { price: 270, originalPrice: 280 }
      }
    },
    {
      id: 3,
      name: "Smash Zinger Burgers",
      price: 224,
      originalPrice: 0,
      rating: 4.5,
      deliveryPrices: {
        talabat: { price: 225, originalPrice: 280 },
        careem: { price: 260, originalPrice: 280 },
        noon: { price: 270, originalPrice: 280 }
      }
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * quantities[item.id]), 0);
  const deliveryCharge = 10;
  const discount = 110;
  const total = subtotal + deliveryCharge - discount;

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

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="hover:bg-gray-100 p-2"
          >
            <X className="h-6 w-6 text-gray-700" />
          </Button>
          <h1 className="text-[18px] font-semibold text-gray-900">Your order</h1>
          <div className="w-8 h-8" />
        </div>

        {/* Content */}
        <div className="px-4 pb-32">
          {/* Offers & Benefits Section */}
          <div className="mb-6 pt-4">
            <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Offers & Benefits</h2>
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-[12px] font-bold">%</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-[14px]">STEALDEAL</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">Save another 110 AED on this order</p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-red-600 hover:text-red-700 hover:bg-red-50 text-[13px] font-semibold px-4 py-2 h-auto"
              >
                APPLY
              </Button>
            </div>
            <div className="text-center mt-4">
              <Button variant="ghost" className="text-gray-500 text-[13px] hover:text-gray-700 h-auto py-2">
                View more coupons &gt;
              </Button>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  {/* Left side - Item details */}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-[16px] leading-tight mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[18px] font-semibold text-gray-900 mb-4">
                      {item.price} AED
                    </p>

                    {/* Quantity and Rating (rating below quantity) */}
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-white shadow-sm hover:bg-gray-50 p-0"
                        >
                          <Minus className="h-4 w-4 text-gray-600" />
                        </Button>
                        <span className="font-semibold text-[18px] min-w-[24px] text-center text-gray-900">
                          {quantities[item.id]}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-white shadow-sm hover:bg-gray-50 p-0"
                        >
                          <Plus className="h-4 w-4 text-gray-600" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded text-[12px] font-semibold">
                        <Star className="h-3 w-3 fill-white" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Delivery Services */}
                  <div className="space-y-3 ml-6">
                    {/* Talabat */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9">
                        <img
                          src="/img_talabat_logo_2.png"
                          alt="Talabat"
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-[15px] font-bold text-gray-900">
                          {item.deliveryPrices.talabat.price} AED
                        </div>
                        <div className="text-[13px] text-red-500 line-through font-medium">
                          {item.deliveryPrices.talabat.originalPrice} AED
                        </div>
                      </div>
                    </div>

                    {/* Careem */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9">
                        <img
                          src="/img_careem_logo_1.png"
                          alt="Careem"
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-[15px] font-bold text-gray-900">
                          {item.deliveryPrices.careem.price} AED
                        </div>
                        <div className="text-[13px] text-red-500 line-through font-medium">
                          {item.deliveryPrices.careem.originalPrice} AED
                        </div>
                      </div>
                    </div>

                    {/* Noon */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9">
                        <img
                          src="/img_noon_logo_2.png"
                          alt="Noon"
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-[15px] font-bold text-gray-900">
                          {item.deliveryPrices.noon.price} AED
                        </div>
                        <div className="text-[13px] text-red-500 line-through font-medium">
                          {item.deliveryPrices.noon.originalPrice} AED
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add more items */}
          <div className="mt-8">
            <Button
              variant="ghost"
              className="w-full text-gray-600 hover:text-gray-800 hover:bg-gray-50 py-4 flex items-center justify-center gap-2 text-[14px] font-medium"
            >
              Add more items
              <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center ml-2">
                <Plus className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>

        {/* Fixed Bottom Order Summary */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] bg-white">
          <div className="px-4 pb-6">
            <Card className="bg-red-600 text-white border-none rounded-xl overflow-hidden shadow-lg w-[381px] h-[157px] mx-auto">

              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white text-[14px] font-medium">Sub-Total</span>
                  <span className="font-semibold text-[14px]">{subtotal} AED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-[14px] font-medium">Delivery Charge</span>
                  <span className="font-semibold text-[14px]">{deliveryCharge} AED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-[14px] font-medium">Discount</span>
                  <span className="font-semibold text-[14px]">{discount} AED</span>
                </div>
                <Separator className="bg-white/20 my-3" />
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-[18px]">Total</span>
                  <span className="font-bold text-[20px]">{total} AED</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center py-2 bg-white">
            <div className="w-[134px] h-[5px] bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};