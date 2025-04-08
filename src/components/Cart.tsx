
import React from "react";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { CartItem } from "./CartItem";
import { formatCurrency } from "@/lib/utils";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, getCartTotal, clearCart } = useCart();
  const cartTotal = getCartTotal();
  
  // Delivery and service fees
  const deliveryFee = 15;
  const serviceFee = cartTotal * 0.05; // 5% service fee
  const total = cartTotal + deliveryFee + serviceFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      <div className="relative flex flex-col w-full max-w-md h-full bg-white shadow-xl md:max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-1 transition-colors rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
            <div className="w-20 h-20 mb-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
            <p className="mt-1 text-sm text-gray-500">
              Add some delicious items from the menu
            </p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 border-t">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatCurrency(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>{formatCurrency(deliveryFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span>{formatCurrency(serviceFee)}</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
                <Button>
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
