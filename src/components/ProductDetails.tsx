import React from 'react';

interface ProductDetailsProps {
    description: string;
    quantity: number;
    category: string;
    tags: string[];
    sellerName: string;
    sellerRating: number;
    inStock: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> =
    ({
         description,
         quantity,
         category,
         tags,
         sellerName,
         sellerRating,
     }) => {
    return (
        <div className="space-y-4">
            {/* Description */}
            <p className="text-gray-700">{description}</p>

            {/* Quantity and Buttons */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md px-2">
                    <button className="px-2 py-1 text-lg font-bold">-</button>
                    <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="w-12 text-center border-none focus:ring-0"
                    />
                    <button className="px-2 py-1 text-lg font-bold">+</button>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-md">Add to cart</button>
                <button className="bg-yellow-600 text-white px-6 py-2 rounded-md">Buy Now</button>
                <button className="border border-gray-300 text-gray-700 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Category and Tags */}
            <div>
                <p className="text-gray-600"><span className="font-semibold">Category:</span> {category}</p>
                <p className="text-gray-600"><span className="font-semibold">Tags:</span> {tags.join(', ')}</p>
            </div>

            {/* Seller Info */}
            <div className="border-t border-gray-300 pt-4">
                <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
                            <span className="text-gray-700 font-bold">
                                {sellerName ? sellerName.slice(0, 3) : ''}
                            </span>
                    </div>
                    <div>
                        <p className="text-gray-700 font-semibold">{sellerName}</p>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-4 h-4 ${index < sellerRating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.374 2.454a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.374-2.454a1 1 0 00-1.175 0l-3.374 2.454c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.44 8.385c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.958z"
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    };

export default ProductDetails;
