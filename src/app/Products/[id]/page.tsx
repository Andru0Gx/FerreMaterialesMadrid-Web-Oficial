// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import { turso } from "@/lib/turso";
import type { Product } from "@/types/product";
import { Heart } from "lucide-react";
import ProductGallery from "@/app/Products/components/productGallery";

// 1. Generar los paths estáticos
export async function generateStaticParams() {
    try {
        const result = await turso.execute({
            sql: "SELECT id FROM Products",
            args: [],
        });

        // Primero convertimos a unknown y luego al tipo deseado
        return (result.rows as unknown as { id: string }[]).map((product) => ({
            id: product.id,
        }));
    } catch (error) {
        console.error("Error fetching product IDs:", error);
        return [];
    }
}

// 2. Función para obtener un producto individual
async function getProduct(id: string): Promise<Product | null> {
    try {
        const result = await turso.execute({
            sql: "SELECT id,name,summary,description,specifications,extraImg,price,stock,brand FROM Products WHERE id = ?",
            args: [id],
        });

        if (result.rows.length === 0) return null;

        const product = result.rows[0] as unknown as Product;

        let specifications = product.specifications;
        if (typeof specifications === "string")
            specifications = JSON.parse(specifications);

        let allImages = product.extraImg;

        if (typeof allImages === "string" && allImages !== null) {
            // Dividir por comas y eliminar espacios en blanco
            allImages = allImages.split(",").map((url) => url.trim());
        }

        return {
            ...product,
            specifications,
            extraImg: allImages,
        };
    } catch (error) {
        console.error("Error fetching product:", error); //! Cambiar a logger
        return null;
    }
}

// 3. Página del producto
export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // Usar await con params
    const { id } = await params;

    // Obtener el producto usando el id
    const product = await getProduct(id);

    if (!product) notFound();

    const productImages = Array.isArray(product.extraImg)
        ? product.extraImg.filter((img): img is string => img !== undefined) // Filtrar imágenes nulas
        : [product.extraImg].filter((img): img is string => img !== undefined);

    return (
        <main className="flex flex-col">
            <section className="flex flex-col lg:flex-row p-5 lg:px-10 py-5 lg:space-x-24 justify-start">
                <ProductGallery
                    images={productImages}
                    productName={product.name}
                />
                <div className="flex flex-col space-y-4 items-start mt-5">
                    <h1 className="text-color-3 font-bold text-2xl">
                        {product.name}
                    </h1>
                    <h2 className="text-xl font-bold text-primary">
                        ${product.price}
                    </h2>
                    <p>{product.summary}</p>
                    <div className="flex flex-col sm:flex-row lg:flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-4 w-full">
                        <div className="flex items-center space-x-4 w-full sm:w-56 lg:w-full">
                            <input
                                type="text"
                                className="h-10 w-full sm:w-48 rounded-md border-2 p-2"
                                value="Cantidad: 1"
                                readOnly
                            />
                            <button>
                                <Heart />
                            </button>
                        </div>
                        <div className="flex flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 w-full p-0">
                            <button className="px-6 h-10 bg-primary text-white font-bold rounded-md w-full sm:w-48">
                                Comprar
                            </button>
                            <button className="px-6 h-10 bg-color-3 text-white rounded-md w-full sm:w-48">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                    <div className="bg-section h-0.5 w-full"></div>
                </div>
            </section>

            <section className="flex flex-col p-5 lg:px-10 py-5 justify-start space-y-5">
                <h2 className="text-color-3 font-bold text-2xl">
                    Descripción del producto
                </h2>
                <div className="bg-white p-5 rounded-xl shadow-md">
                    <p className="">{product.description}</p>
                </div>
            </section>

            <section className="flex flex-col p-5 lg:px-10 py-5 justify-start space-y-5">
                <h2 className="text-color-3 font-bold text-2xl">
                    Especificaciones
                </h2>
                <div className="bg-white p-5 rounded-xl shadow-md">
                    <ul className="space-y-5 text-sm lg:text-base">
                        {Object.entries(product.specifications).map(
                            ([key, value]) => (
                                <div className="relative" key={key}>
                                    <strong className="mr-2">{key}:</strong>
                                    <span>{value}</span>
                                </div>
                            )
                        )}
                    </ul>
                </div>
            </section>
        </main>
    );
}
