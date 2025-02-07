import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product = {} }) => {
  const {
    name = "Untitled Product",
    price = 0,
    image = "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg",
    rating = 0,
    reviews = 0,
  } = product;

  return (
    <div className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300 fill-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">{reviews} reviews</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          <button variant="outline" size="sm" className="flex items-center cursor-pointer">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
