import { useParams } from 'react-router-dom';
import SkeletonLoader from "./SkeletonLoader.tsx";
import {useEffect, useState} from "react";
import supabase from "../utils/supabase.ts";
import { useNavigate } from 'react-router-dom';

export default function ProductCollection() {

    const [dealsData, setDealsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { category } = useParams<{ category: string }>();


    const getDeals = async () => {
        const { data, error } = await supabase
            .from("products")
            .select(`
            *,
            vendors (
                store_name
            )
            
        `)   .limit(5)
            .eq('category', category);

        console.log(data);
        if (error) {
            console.error("Error fetching deals: ", error);
        } else {
            setDealsData(data);
            setIsLoading(false);
        }
    };

    useEffect(() => {
            getDeals();
        },
        [category]);

    const navigate = useNavigate();
    const handleClick = (id: number) => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="mx-auto p-6 container justify-center flex-wrap flex">
            <h1 className="text-5xl">{category}</h1>

            <div className="flex flex-row gap-2 cursor-pointer mt-12">
                {isLoading ?
                    Array(5).fill(null).map((_, index) => (
                        <SkeletonLoader key={index}/>
                    ))
                    :
                    dealsData.map((product, i) => (
                        <div key={product.id} onClick={() => handleClick(product.id)}>
                            <div className="max-w-[320px] min-h-[340px] border-2 border-gray-200 rounded-lg shadow-md">
                                <img
                                    src={dealsData[i].Image_url}
                                    alt="Product Image"
                                    className="w-full h-[240px] object-cover"
                                />

                                <div className="p-4 flex flex-col justify-between h-full">
                                    <h2 className="text-xl font-semibold mb-2 line-clamp-1">{product.title}</h2>

                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 text-lg font-semibold">{product.price}</span>
                                        <span className="line-through text-gray-500">{product.originalPrice}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span>Sold by:</span>
                                        <span
                                            className="font-semibold text-gray-700">{product.vendors.store_name}</span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                <span className="material-symbols-outlined text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                </svg>
                                </span>
                                            <span className="material-symbols-outlined text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                                </svg>
                                </span>
                                            <span className="material-symbols-outlined text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                                </span>
                                        </div>

                                    </div>
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
)
}