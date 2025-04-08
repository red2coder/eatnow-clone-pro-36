
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

  return (
    <div className="overflow-hidden transition-shadow bg-white border rounded-lg shadow-sm hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{item.name}</h3>
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
            className="gap-2"
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
