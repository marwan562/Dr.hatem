import { useState } from "react";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Navigation from "./components/Navigation";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full ${
                    category === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  } transition-colors duration-200`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
