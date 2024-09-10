import ProductInfo from "./ProductInfo.tsx";
import ProductDetails from "./ProductDetails.tsx";
import ImageGallery from "./ImageGallery";
import {ProductDescriptionTabs} from "./ProductDescriptionTabs.tsx";

import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from "../utils/supabase";

interface Product {
    id: number;
    title: string;
    price: string;
    original_price: string;
    image_url: string;
    vendors?: {
        store_name: string;
    };
}

export const ProductPage = (  ) => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from('products')
                .select(`
          *,
          vendors (
            store_name
          )
        `)
                .eq('id', id)
                .single();

            console.log(data);
            if (error) {
                console.error('Error fetching product:', error);
                setProduct(null);
            } else {
                setProduct(data);
            }
        };

        fetchProduct();

    }, [id]);

    return (
        <div className="bg-white h-full rounded-lg">
        <div className="container mx-auto p-4 flex gap-12">
            <div className="max-w-4xl mx-auto p-2">
                <ImageGallery images={[product?.Image_url]}/>
            </div>
            <div>
                <div className="p-4">
                    <ProductInfo
                        price={product?.price}
                        originalPrice={6880}
                        discount={11}
                        seller={product?.vendors?.store_name}
                        inStock={true}
                    />
                </div>

                <hr/>
                <div className="p-4">
                    <ProductDetails
                        description={product?.description}
                        quantity={1}
                        category={product?.category}
                        tags={["Everyday Wear", "Gift for Mother", "Just Because", "Mangalsutras", "Others Jewelry", "Wings of Wonder"]}
                        sellerName={product?.vendors?.store_name}
                        sellerRating={1}
                        inStock={true}
                    />
                </div>

            </div>
        </div>
        <div className="container mx-auto p-4">
          <ProductDescriptionTabs
              description={product?.description}
              shipping={"Ready to ship in 1-3 business days from India"}
          />
        </div>
        </div>
    )
}