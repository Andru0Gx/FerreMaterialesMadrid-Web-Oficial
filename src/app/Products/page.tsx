"use client";
import { AddToCartButton } from "./components/AddToCarbutton";
import { Filters } from "./sections/Filters";
import { ImageOff, Heart } from "lucide-react";
import { products } from "@/consts/ProductList";
import { useState } from "react";

import { CustomImage } from "@/components/Image";

export default function Products() {
    const [favoritedItems, setFavoritedItems] = useState<Set<string>>(
        new Set()
    );

    const toggleFavorite = (productId: string) => {
        setFavoritedItems((prev) => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId);
            } else {
                newFavorites.add(productId);
            }
            return newFavorites;
        });
    };

    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-col sm:flex-row w-full">
                <Filters />

                <div className="m-auto">
                    <div className="grid grid-cols-1 gap-5 xl:gap-10 xl:grid-cols-3 desktop:grid-cols-4 desktop:gap-5 2xl:grid-cols-6 p-5">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="shadow-lg rounded-xl w-full xl:max-w-96 xl:w-64 flex overflow-hidden"
                            >
                                <div className="flex flex-row xl:flex-col items-center w-full">
                                    <div className="min-w-28 h-48 sm:h-52 lg:w-32 xl:size-64 content-center bg-section">
                                        {product.img === "" ? (
                                            <a href={`/products/${product.id}`}>
                                                <div className="flex flex-col items-center justify-center size-full text-center xl:space-y-5 space-y-2 p-1 ">
                                                    <ImageOff
                                                        color="var(--color-1)"
                                                        strokeWidth={1.5}
                                                    />
                                                    <span className="text-color-1 text-xs lg:text-base">
                                                        Imagen no disponible
                                                    </span>
                                                </div>
                                            </a>
                                        ) : (
                                            <a href={`/products/${product.id}`}>
                                                <div className="h-32 lg:h-36 xl:h-64 min-w-0 w-full">
                                                    <CustomImage
                                                        src={product.img}
                                                        alt={product.name}
                                                        fill={true}
                                                        class_name="object-contain"
                                                    />
                                                </div>
                                            </a>
                                        )}
                                    </div>

                                    <div className="flex flex-col text-xs md:text-sm space-y-1 py-5 px-3 max-h-52 h-full justify-between w-full min-w-0">
                                        <div className="flex flex-col space-y-1">
                                            <a
                                                href={`/products/${product.id}`}
                                                className="text-sm md:text-lg lg:text-xl font-bold text-color-3 text-pretty line-clamp-2"
                                                title={product.name}
                                            >
                                                {product.name}
                                            </a>
                                            <span className="text-color-2">
                                                {product.brand}
                                            </span>
                                            <span className="text-color-1">
                                                {product.stock} Disponibles
                                            </span>
                                            <a
                                                href={`/products/${product.id}`}
                                                className="text-color-3"
                                            >
                                                Precio: ${product.price}
                                            </a>
                                        </div>

                                        <div className="flex items-center w-full justify-between">
                                            <AddToCartButton />
                                            <button
                                                className="text-color-1 p-2 rounded-lg cursor-pointer"
                                                onClick={() =>
                                                    toggleFavorite(product.id)
                                                }
                                                aria-label={
                                                    favoritedItems.has(
                                                        product.id
                                                    )
                                                        ? "Quitar de favoritos"
                                                        : "Agregar a favoritos"
                                                }
                                                title={
                                                    favoritedItems.has(
                                                        product.id
                                                    )
                                                        ? "Quitar de favoritos"
                                                        : "Agregar a favoritos"
                                                }
                                            >
                                                <Heart
                                                    size="20"
                                                    fill={
                                                        favoritedItems.has(
                                                            product.id
                                                        )
                                                            ? "var(--color-1)"
                                                            : "transparent"
                                                    }
                                                    strokeWidth={1.5}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
