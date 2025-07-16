import { ShoppingCart, Star, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    category: string;
}

const ProductCard = ({ name, price, originalPrice, image, rating, category }: ProductCardProps) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-400"
                    }`}
            />
        ));
    };

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                    <Heart
                        className={`h-5 w-5 ${isWishlisted ? "text-red-400 fill-current" : "text-white"
                            }`}
                    />
                </button>
                <span className="absolute top-2 left-2 bg-green-400 text-black px-2 py-1 rounded text-sm font-semibold">
                    {category}
                </span>
            </div>

            <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2 hover:text-green-400 transition-colors">
                    {name}
                </h3>

                <div className="flex items-center mb-2">
                    {renderStars(rating)}
                    <span className="text-gray-400 text-sm ml-2">({rating}.0)</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-green-400 font-bold text-lg">
                            R$ {price.toFixed(2)}
                        </span>
                        {originalPrice && (
                            <span className="text-gray-500 line-through text-sm">
                                R$ {originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <div className="bg-green-400 hover:bg-green-500 text-black px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 cursor-pointer">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Comprar</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;