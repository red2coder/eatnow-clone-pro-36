
import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { RestaurantHeader } from "@/components/RestaurantHeader";
import { CategorySelector } from "@/components/CategorySelector";
import { MenuItems } from "@/components/MenuItems";
import { Cart } from "@/components/Cart";
import { categories, menuItems } from "@/data/mockData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar openCart={toggleCart} />
        <RestaurantHeader />
        
        <main className="flex-1">
          <CategorySelector
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          
          <MenuItems items={menuItems} categoryId={activeCategory} />
        </main>
        
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
