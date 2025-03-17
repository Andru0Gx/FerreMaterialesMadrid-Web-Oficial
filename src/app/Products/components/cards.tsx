import { ImageOff, Heart } from "lucide-react";
import { CustomImage } from "@/components/Image";
import { AddToCartButton } from "@/app/Products/components/AddToCarbutton";
import { useState } from "react";
import Link from "next/link";

interface CardProps {
    id: string;
    name: string;
    brand: string;
    stock: number;
    price: number;
    img: string;
}

export function Cards({ id, name, brand, stock, price, img }: CardProps) {
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
        <div className="shadow-lg rounded-xl w-full xl:max-w-96 xl:w-64 flex overflow-hidden p-2 xl:p-5 bg-white relative">
            {/* <div className="absolute bg-primary py-1 px-2 pt-4 text-xs rounded-b-full text-white font-bold top-0 right-7 z-10">
                %
            </div>

            <div className="absolute bg-red-500 py-1 px-2 pt-4 text-xs rounded-b-full text-white font-bold top-0 right-14 z-10"></div> */}

            <div className="flex flex-row xl:flex-col items-center w-full">
                <div className="min-w-28 h-40 sm:h-52 md:w-56 lg:w-52 xl:size-56 content-center bg-section rounded-xl overflow-hidden">
                    {img === "" ? (
                        <Link href={`/products/${id}`}>
                            <div className="flex flex-col items-center justify-center size-full text-center xl:space-y-5 space-y-2 p-1 ">
                                <ImageOff
                                    color="var(--color-1)"
                                    strokeWidth={1.5}
                                />
                                <span className="text-color-1 text-xs lg:text-base">
                                    Imagen no disponible
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <Link href={`/products/${id}`}>
                            <div className="h-32 lg:h-36 xl:h-56 min-w-0 w-full">
                                <CustomImage
                                    src={img}
                                    alt={name}
                                    fill={true}
                                    class_name="object-contain"
                                />
                            </div>
                        </Link>
                    )}
                </div>

                <div className="flex flex-col text-xs md:text-sm space-y-1 pt-5 px-3 xl:px-0 max-h-52 h-full justify-between w-full min-w-0">
                    <div className="flex flex-col space-y-1">
                        <Link
                            href={`/products/${id}`}
                            className="text-sm md:text-lg lg:text-xl font-bold text-color-3 text-pretty line-clamp-2"
                            title={name}
                        >
                            {name}
                        </Link>
                        <span className="text-color-2">{brand}</span>
                        <span className="text-color-1">
                            {stock} Disponibles
                        </span>
                        <Link href={`/products/${id}`} className="text-color-3">
                            Precio: ${price}
                        </Link>
                    </div>

                    <div className="flex items-center w-full justify-between">
                        <AddToCartButton />
                        <button
                            className="text-color-1 p-2 rounded-lg cursor-pointer"
                            onClick={() => toggleFavorite(id)}
                            aria-label={
                                favoritedItems.has(id)
                                    ? "Quitar de favoritos"
                                    : "Agregar a favoritos"
                            }
                            title={
                                favoritedItems.has(id)
                                    ? "Quitar de favoritos"
                                    : "Agregar a favoritos"
                            }
                        >
                            <Heart
                                size="20"
                                fill={
                                    favoritedItems.has(id)
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
    );
}
