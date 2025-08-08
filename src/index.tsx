import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Offers } from "./screens/Offers";
import { RestaurantDetails } from "./screens/RestaurantDetails";
import { FoodItemDetails } from "./screens/FoodItemDetails";
import { Orders } from "./screens/Orders";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/restaurant/:restaurantId/item/:itemId" element={<FoodItemDetails />} />
      </Routes>
    </Router>
  </StrictMode>,
);
