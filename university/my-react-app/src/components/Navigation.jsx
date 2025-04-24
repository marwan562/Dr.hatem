import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Sidebar from "./Sidebar";

export default function Navigation() {
  const { cartItems, wishlist } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const handleSidebarOpen = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(true);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleSidebarOpen("wishlist")}
                className="relative"
              >
                <HeartIcon className="h-6 w-6 text-gray-600 hover:text-indigo-600 cursor-pointer" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleSidebarOpen("cart")}
                className="relative"
              >
                <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-indigo-600 cursor-pointer" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </button>
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-indigo-600">
                مشروع دكتور حاتيم
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
      />
    </>
  );
}
