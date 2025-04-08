
import React from "react";
import { Category } from "@/types";

interface CategorySelectorProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySelector = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategorySelectorProps) => {
  return (
    <div className="py-4 border-b sticky top-16 bg-white z-10">
      <div className="container px-4 mx-auto">
        <div className="flex gap-2 pb-2 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => onSelectCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
