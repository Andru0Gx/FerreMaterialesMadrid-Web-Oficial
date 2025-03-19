// components/ProductGallery.tsx
"use client";

import { useState } from "react";
import { CustomImage } from "@/components/Image";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({
    images,
    productName,
}: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col space-y-5 items-center">
            <div className="sm:size-[20rem] xl:size-[36rem] rounded-2xl overflow-hidden bg-section size-72 relative">
                <CustomImage
                    src={selectedImage}
                    alt={productName}
                    fill={true}
                    class_name="object-contain"
                />
            </div>

            {images && images.length > 1 && (
                <div className="flex space-x-5 overflow-x-auto pb-2 max-w-full">
                    {images.map((img: string, index: number) => (
                        <div
                            key={index}
                            className={`size-16 rounded-xl cursor-pointer bg-section relative border-2 ${
                                selectedImage === img
                                    ? "border-primary"
                                    : "border-transparent"
                            } hover:border-primary transition-all`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <CustomImage
                                src={img}
                                alt={`${productName} - imagen ${index + 1}`}
                                fill={true}
                                class_name="object-contain"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
