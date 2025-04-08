
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Navbar = ({ openCart }: { openCart: () => void }) => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-brand-600">EatNow</span>
        </a>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={openCart}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-brand-500 rounded-full">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
