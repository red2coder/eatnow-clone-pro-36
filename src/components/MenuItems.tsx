
import React from "react";
import { MenuItem as MenuItemType } from "@/types";
import { MenuItem } from "./MenuItem";

interface MenuItemsProps {
  items: MenuItemType[];
  categoryId: string;
}

export const MenuItems = ({ items, categoryId }: MenuItemsProps) => {
  const filteredItems = categoryId === "all" 
    ? items 
    : items.filter((item) => item.categoryId === categoryId);

  // Display message if no items found in the category
  if (filteredItems.length === 0) {
    return (
      <div className="container px-4 py-6 mx-auto">
        <p className="text-center text-lg text-gray-500">No items found in this category</p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-6 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
