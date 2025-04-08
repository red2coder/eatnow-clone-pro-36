
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-start space-x-3 p-3 bg-white rounded-md border">
      <img 
        src={item.image} 
        alt={item.name} 
        className="object-cover w-16 h-16 rounded"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900">{item.name}</h4>
        <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="font-medium">
            {formatCurrency(item.price * item.quantity)}
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-1 text-gray-400 transition-colors rounded-full hover:bg-gray-100 hover:text-red-500"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            
            <div className="flex items-center border rounded">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1"
              >
                <Minus className="w-3 h-3" />
              </button>
              
              <span className="w-6 text-center text-sm">{item.quantity}</span>
              
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
