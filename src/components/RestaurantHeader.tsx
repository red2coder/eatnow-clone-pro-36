
import React from "react";

export const RestaurantHeader = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
      <div 
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="container relative flex flex-col justify-end h-full px-4 pb-6 mx-auto text-white">
          <h1 className="text-3xl font-bold md:text-4xl">Yamakan Restaurant</h1>
          <div className="flex items-center mt-2 space-x-2">
            <span className="px-2 py-1 text-xs bg-yellow-500 rounded-full">⭐ 4.8</span>
            <span className="text-sm opacity-90">Moroccan & International Cuisine</span>
          </div>
          <p className="max-w-xl mt-2 text-sm opacity-90">
            Authentic Moroccan flavors with a modern twist. Enjoy our wide selection of dishes prepared with fresh local ingredients.
          </p>
        </div>
      </div>
    </div>
  );
};
