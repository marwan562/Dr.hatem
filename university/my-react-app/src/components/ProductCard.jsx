import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-2">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => addToCart(product)}
            className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-1" />
            Add to Cart
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            className="p-2 text-gray-600 hover:text-red-500 transition-colors"
          >
            {isInWishlist ? (
              <HeartSolidIcon className="h-6 w-6 text-red-500" />
            ) : (
              <HeartIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
