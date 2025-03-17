// app/Products/ProductsContent.tsx
"use client";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Cards } from "./cards";
import { CardsLoader } from "./cardsLoader";

export default function ProductsContent() {
    const searchParams = useSearchParams();
    const [products, setProducts] = useState<
        {
            ID: string;
            name: string;
            brand: string;
            stock: number;
            price: number;
            img: string;
            category: string;
            isOnSale: boolean;
        }[]
    >([]);
    const [loading, setLoading] = useState(true);

    const filters = useMemo(
        () => ({
            category: searchParams.get("category") || "All",
            brand: searchParams.get("brand") || "All",
            stock: searchParams.get("stock") === "true",
            offers: searchParams.get("offers") === "true",
        }),
        [searchParams]
    );

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const queryParams = new URLSearchParams();

                if (filters.category !== "All")
                    queryParams.append("category", filters.category);
                if (filters.brand !== "All")
                    queryParams.append("brand", filters.brand);
                if (filters.stock) queryParams.append("stock", "true");
                if (filters.offers) queryParams.append("offers", "true");

                const res = await fetch(`/api?${queryParams}`);
                if (!res.ok) throw new Error("Error fetching data");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchParams, filters]);

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            filters.category === "All" || product.category === filters.category;
        const matchesBrand =
            filters.brand === "All" || product.brand === filters.brand;
        const matchesStock = !filters.stock || product.stock;
        const matchesOffers = !filters.offers || product.isOnSale;
        return matchesCategory && matchesBrand && matchesStock && matchesOffers;
    });

    return (
        <div className="w-full">
            {loading ? (
                <div className="flex justify-center items-center w-full h-[30rem]">
                    <CardsLoader />
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5 xl:gap-10 xl:grid-cols-3 desktop:grid-cols-4 desktop:gap-5 2xl:grid-cols-6 p-5">
                    {filteredProducts.map((product, index) => (
                        <Cards
                            id={product.ID}
                            name={product.name}
                            brand={product.brand}
                            stock={product.stock}
                            price={product.price}
                            img={product.img}
                            key={`${product.ID}-${index}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
