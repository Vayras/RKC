import ProductInfo from "./ProductInfo.tsx";
import ProductDetails from "./ProductDetails.tsx";
import ImageGallery from "./ImageGallery";
import {ProductDescriptionTabs} from "./ProductDescriptionTabs.tsx";
export const ProductPage = (  ) => {
    const images = [
        // Replace these with your actual image URLs
        "https://i.etsystatic.com/48321112/r/il/f02b3c/5660901723/il_794xN.5660901723_1an6.jpg",
        "https://i.etsystatic.com/48321112/r/il/564be6/5660901741/il_794xN.5660901741_jhcq.jpg",
        "https://i.etsystatic.com/48321112/r/il/80c46e/5612814002/il_794xN.5612814002_bqh8.jpg",
        // Add more images as needed
    ];
    return (
        <>
        <div className="container mx-auto p-4 flex gap-12">
            <div className="max-w-4xl mx-auto p-2">
                <ImageGallery images={images}/>
            </div>
            <div>
                <div className="p-4">
                    <ProductInfo
                        price={3440}
                        originalPrice={3880}
                        discount={11}
                        seller="ETERNAL SPARKLES INC"
                        inStock={true}
                    />
                </div>

                <hr/>
                <div className="p-4">
                    <ProductDetails
                        description="A mangalsutra is a traditional necklace worn by married Hindu women, symbolizing their marital status and union with their husband. It typically features black and gold beads with a central pendant, serving as a sacred and culturally significant piece of jewelry in Indian weddings and married life."
                        quantity={1}
                        category="Mangalsutra"
                        tags={["Everyday Wear", "Gift for Mother", "Just Because", "Mangalsutras", "Others Jewelry", "Wings of Wonder"]}
                        sellerName="Eternal Sparkles Inc"
                        sellerRating={0}
                        inStock={true}
                    />
                </div>

            </div>
        </div>
        <div className="container mx-auto p-4">
          <ProductDescriptionTabs
              description={"Add a touch of class to your outfit with this stylish business quartz sport watch designed for men. The brown leather strap complements the brown dial and bezel, giving it a casual and sophisticated look. With a stainless steel case material, this watch is built to last. It has a 12-hour dial, chronograph, and day/night indicator, making it a perfect accessory for all occasions."}
              shipping={"Ready to ship in 1-3 business days from India"}
          />
        </div>
        </>
    )
}