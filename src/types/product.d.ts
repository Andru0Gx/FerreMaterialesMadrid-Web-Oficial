// types/product.d.ts
export interface Product {
    id: string;
    name: string;
    summary: string;
    description: string;
    specifications: string;
    price: number;
    stock: number;
    brand: string;
    extraImg?: string | string[];
}