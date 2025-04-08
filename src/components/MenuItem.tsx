
import React from "react";
import { Plus } from "lucide-react";
import { MenuItem as MenuItemType } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  const { addToCart } = useCart();

  // Fallback image for any broken image links
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
  };

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border rounded-lg shadow-sm hover:shadow-md group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          <span className="font-medium text-brand-600">
            {formatCurrency(item.price)}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-end mt-4">
          <Button
            size="sm"
            className="gap-2 transition-all duration-300 hover:bg-brand-700"
            onClick={() => addToCart(item)}
          >
            <Plus className="w-4 h-4" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
