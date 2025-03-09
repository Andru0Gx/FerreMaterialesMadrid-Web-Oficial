"use client";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { categories, brands } from "@/consts/Filters";

export function Filters() {
    const div_class =
        "flex flex-col space-y-2 sm:border-b-2 border-section sm:pb-5 min-w-48 sm:min-w-0 ";
    const badge_class =
        "bg-background shadow-lg border-2 border-[#989898] rounded-xl py-1 px-2 text-color-3 space-x-2 w-fit text-xs cursor-pointer select-none m-auto mx-0";

    const [showStock, setShowStock] = useState(false);
    const [showOffers, setShowOffers] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        setSelectedCategory(params.get("category") || "All");
        setSelectedBrand(params.get("brand") || "All");
        setShowStock(params.get("stock") === "true");
        setShowOffers(params.get("offers") === "true");
    }, [searchParams]);

    const updateUrlParams = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value && value !== "All") {
            params.set(name, value);
        } else {
            params.delete(name);
        }

        router.replace(`${pathname}?${params.toString()}`);
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
        const params = new URLSearchParams(searchParams);

        if (checked) {
            params.set(name, "true");
        } else {
            params.delete(name);
        }

        router.replace(`${pathname}?${params.toString()}`);
    };

    // Cambiar sm:Top-24 por sm:Top-40
    return (
        <>
            <aside
                className="sm:w-72 px-5 py-3 mt-5 sm:mt-0 sm:p-5 sm:pt-16 sm:space-y-5 sm:flex-col sm:border-r-2 border-b-2 sm:border-b-0 border-section sm:sticky sm:top-24 xl:top-24 sm:h-screen flex flex-row overflow-x-auto w-full space-x-5 sm:space-x-0 min-h-28 min-w-72"
                id="filters"
            >
                {/* By Category */}
                <div className={div_class}>
                    <label htmlFor="Categories" className="font-bold">
                        Categoría
                    </label>
                    <select
                        name="Categories"
                        id="Categories"
                        className="w-full p-2 rounded-md bg-white border-1 border-section"
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            updateUrlParams("category", e.target.value);
                        }}
                    >
                        <option value="All">Todos</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* By Brand */}
                <div className={div_class}>
                    <label htmlFor="Brands" className="font-bold">
                        Marca
                    </label>
                    <select
                        name="Brands"
                        id="Brands"
                        className="w-full p-2 rounded-md bg-white border-1 border-section"
                        value={selectedBrand}
                        onChange={(e) => {
                            setSelectedBrand(e.target.value);
                            updateUrlParams("brand", e.target.value);
                        }}
                    >
                        <option value="All">Todos</option>
                        {brands.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </div>

                {/* By Stock */}
                <div className={div_class}>
                    <h3 className="font-bold">Disponibilidad</h3>
                    {!showStock ? (
                        <div className="flex space-x-5 items-center">
                            <input
                                type="checkbox"
                                name="stock"
                                id="stock"
                                className="size-6 cursor-pointer"
                                checked={showStock}
                                onChange={(e) => {
                                    setShowStock(e.target.checked);
                                    handleCheckboxChange(
                                        "stock",
                                        e.target.checked
                                    );
                                }}
                            />
                            <label
                                htmlFor="stock"
                                className="cursor-pointer select-none"
                            >
                                Mostrar solo artículos disponibles
                            </label>
                        </div>
                    ) : (
                        <div
                            className={`${badge_class} flex `}
                            onClick={() => {
                                setShowStock(false);
                                handleCheckboxChange("stock", false);
                            }}
                        >
                            <span>×</span>
                            <p>Artículos disponibles</p>
                        </div>
                    )}
                </div>

                {/* By Offers */}
                <div className={div_class}>
                    <h3 className="font-bold">Ofertas</h3>
                    {!showOffers ? (
                        <div className="flex space-x-5 items-center">
                            <input
                                type="checkbox"
                                name="offers"
                                id="offers"
                                className="size-6 cursor-pointer"
                                checked={showOffers}
                                onChange={(e) => {
                                    setShowOffers(e.target.checked);
                                    handleCheckboxChange(
                                        "offers",
                                        e.target.checked
                                    );
                                }}
                            />
                            <label
                                htmlFor="offers"
                                className="cursor-pointer select-none"
                            >
                                Mostrar solo artículos en oferta
                            </label>
                        </div>
                    ) : (
                        <div
                            className={`${badge_class} flex`}
                            onClick={() => {
                                setShowOffers(false);
                                handleCheckboxChange("offers", false);
                            }}
                        >
                            <span>×</span>
                            <p>Artículos en Oferta</p>
                        </div>
                    )}
                </div>
            </aside>

            <style>
                {`
                    /* Ocultar scrollbar en navegadores Webkit (Chrome, Safari) */
                    #filters::-webkit-scrollbar {
                        display: none;
                    }

                    /* Ocultar scrollbar en navegadores Firefox */
                    #filters {
                        scrollbar-width: none;
                        -ms-overflow-style: none; /* IE and Edge */
                    }
                `}
            </style>
        </>
    );
}
