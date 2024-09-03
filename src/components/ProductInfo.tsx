import React from "react";

interface ProductInfoProps {
    price: number;
    originalPrice: number;
    discount: number;
    seller: string;
    inStock: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> =
    ({
         price,
         originalPrice,
         discount,
         seller,
         inStock
    }) => {
    return (
        <div className="flex flex-col space-y-1">
            <div className="text-red-700 text-2xl font-bold">
                ₹{price.toLocaleString('en-IN')}
            </div>
            <div className="text-gray-500 line-through text-lg">
                ₹{originalPrice.toLocaleString('en-IN')}
            </div>
            <div className="text-red-600 text-sm">
                ({discount}%)
            </div>
            <div className="flex items-center space-x-2">
        <span className="text-blue-700 font-bold">
          Sold By: {seller}
        </span>
            </div>
            <div className="text-green-700 font-semibold">
                Status: {inStock ? "In stock" : "Out of stock"}
            </div>
        </div>
    );
};

export default ProductInfo;
