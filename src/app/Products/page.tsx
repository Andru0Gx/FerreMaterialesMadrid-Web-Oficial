// app/Products/page.tsx
"use client";
import { Suspense } from "react";
import { Filters } from "./sections/Filters";
import ProductsContent from "./components/productsContent";
import { CardsLoader } from "./components/cardsLoader";

export default function Products() {
    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-col sm:flex-row w-full">
                <Suspense fallback={<div>Cargando filtros...</div>}>
                    <Filters />
                </Suspense>

                <Suspense
                    fallback={
                        <div className="flex justify-center items-center w-full h-[30rem]">
                            <CardsLoader />
                        </div>
                    }
                >
                    <ProductsContent />
                </Suspense>
            </div>
        </div>
    );
}
